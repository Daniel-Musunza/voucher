// Import the framework and instantiate it
import Fastify from 'fastify';
import { config } from 'dotenv';
import fs from 'fs';
import gethtml from './gethtml.js';
import gethtmlVoucher2 from './gethtmlVoucher2.js';
import { v4 as uuidv4 } from 'uuid';
import { generatePdf } from 'html-pdf-node';
import { uploadToMinio } from "./uploadToMinio.js";


config();
const fastify = Fastify();

const PDF_URL = "https://images.itravelholidays.co.uk"

fastify.post('/getvoucher1', async (request, reply) => {
  try {
    const payload = request.body;

    // const b64 = btoa(JSON.stringify(payload))

    // return b64
    const voucherData = JSON.parse(atob(payload.voucherData));
    // const voucherData = payload;
    // return voucherData
    // Generate the voucher HTML content
    const voucher = gethtml(voucherData).replace(
      '</head>',
      `
      <style>
        @page:first {
          margin-top: 0in;
        }
        .first-page {
          margin-top: 0;
        }
      </style>
      </head>`
    ).replace(
      '<body>',
      `<body><div class="first-page">`
    ).replace(
      '</body>',
      '</div></body>'
    );

      // PDF generation options
    const pdfOptions = {
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0',
        bottom: '20',
      },
    };

    // Create PDF from HTML
    const pdfBuffer = await generatePdf({ content: voucher }, pdfOptions);

    if (!pdfBuffer) {
      return { success: false, message: 'Error occurred, try again later' };
    }

    // Upload PDF to Minio
    try {
      const uploadResult = await uploadToMinio({
        bucketName: 'vouchers',
        file: pdfBuffer,
        folder: 'vouchers1'
      });

      const filepath = `${PDF_URL}/vouchers/${uploadResult.fileName}`;

      return { success: true, filepath };
    } catch (error) {
      return { success: false, error: `PDF upload failed, try again later: ${error.message}` };
    }
  } catch (error) {
    console.log(error);
    return { success: false, error: `There was a problem in generating the voucher. ${error.message}` };
  }
});

fastify.post('/getvoucher2', async (request, reply) => {
  try {
    const payload = request.body;

    // Convert the payload to a Base64 encoded string using Buffer
    // const b64 = Buffer.from(JSON.stringify(payload)).toString('base64');

    // return b64;

    // const voucherData = JSON.parse(atob(payload.voucherData));

    const voucherData = payload

    const voucher = gethtmlVoucher2(voucherData)



    // PDF generation options
    const pdfOptions = {
      format: 'A4',
      printBackground: true,
      margin: {   // Adjust this margin to make space for the header
        bottom: '20px',
      }
    };

    // Create PDF from HTML
    const pdfBuffer = await generatePdf({ content: voucher }, pdfOptions);

    if (!pdfBuffer) {
      return { success: false, message: 'Error occurred, try again later' };
    }

    // Upload PDF to Minio
    try {
      const uploadResult = await uploadToMinio({
        bucketName: 'vouchers',
        file: pdfBuffer,
        folder: 'vouchers2'
      });

      const filepath = `${PDF_URL}/vouchers/${uploadResult.fileName}`;

      return { success: true, filepath };
    } catch (error) {
      return { success: false, error: `PDF upload failed, try again later: ${error.message}` };
    }


  } catch (error) {
    console.log(error);
    return { success: false, error: `There was a problem in generating the voucher. ${error.message}` };
  }
});

try {
  await fastify.listen({ host: '0.0.0.0', port: 4000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

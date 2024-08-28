// Import the framework and instantiate it
import Fastify from 'fastify';
import { config } from 'dotenv';
import fs from 'fs';
import gethtml from './gethtml.js';
import gethtmlVoucher2 from './gethtmlVoucher2.js';
import { v4 as uuidv4 } from 'uuid';
import { generatePdf } from 'html-pdf-node';

config();
const fastify = Fastify();

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

    // Define a unique filename using UUID
    const filename = `voucher-${uuidv4()}.pdf`;

    // Define the path where the PDF file will be saved
    const filepath = `./vouchers/${filename}`;

    // Ensure the vouchers directory exists
    fs.mkdirSync('./vouchers', { recursive: true });

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

    // Save the PDF buffer to a file
    fs.writeFileSync(filepath, pdfBuffer);

    // Return the file path as a response
    return { success: true, filepath };
  } catch (error) {
    console.log(error);
    return { success: false, error: `There was a problem in generating the voucher. ${error.message}` };
  }
});

fastify.post('/getvoucher2', async (request, reply) => {
  try {
    const payload = request.body;

    // const b64 = btoa(JSON.stringify(payload))

    // return b64
    // const voucherData = JSON.parse(atob(payload.voucherData));
  
    const voucherData = payload

    const voucher = gethtmlVoucher2(voucherData)

    // return voucher
    // Define a unique filename using UUID
    const filename = `voucher-${uuidv4()}.pdf`;

    // Define the path where the PDF file will be saved
    const filepath = `./vouchers2/${filename}`;

    // Ensure the vouchers directory exists
    fs.mkdirSync('./vouchers2', { recursive: true });

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

    // Save the PDF buffer to a file
    fs.writeFileSync(filepath, pdfBuffer);

    // Return the file path as a response
    return { success: true, filepath };
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

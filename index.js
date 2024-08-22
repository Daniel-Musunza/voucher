// Import the framework and instantiate it
import Fastify from 'fastify';
import { config } from 'dotenv';
import fs from 'fs';
import gethtml from './gethtml.js';
import { v4 as uuidv4 } from 'uuid';
import { generatePdf } from 'html-pdf-node';

config();
const fastify = Fastify();

fastify.post('/getvoucher', async (request, reply) => {
  try {
    const payload = request.body;

    const voucherData = JSON.parse(atob(payload.voucherData));

    // return voucherData
    // Generate the voucher HTML content
    const voucher = gethtml(voucherData);

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
        top: '20',
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
    return { success: false, error: error.message };
  }
});

try {
  await fastify.listen({ host: '0.0.0.0', port: 4000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}

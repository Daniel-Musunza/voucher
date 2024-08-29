import * as Minio from 'minio';

export const minioClient = new Minio.Client({
    endPoint: 'images.itravelholidays.co.uk',
    port: 443,
    useSSL: true,
    accessKey: 'EzYklW5jA656OcAMNYBd', // Replace with your access key
    secretKey: 'j45M8bmizK3pachWCYoY7yhO4RVXQRjHDb2gHC45' // Replace with your secret key
  });
  




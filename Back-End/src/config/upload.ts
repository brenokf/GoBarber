import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname,'..','..','tmp');
const uploadsFolder  = path.resolve(tmpFolder, 'uploads');

export default {
  tmpFolder: tmpFolder,
  uploadsFolder: uploadsFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);

    }
  }),
};

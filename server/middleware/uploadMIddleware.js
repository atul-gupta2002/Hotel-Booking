// import multer from 'multer';
//
// const upload = multer({storage: multer.diskStorage()});
//
// export default upload;

import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Make sure this folder exists
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueName = `${file.fieldname}-${Date.now()}${ext}`;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

export default upload;

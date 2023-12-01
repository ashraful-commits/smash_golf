import { multer } from "multer";

const Storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + Math.round(Math.random() * 10000) + "-" + file.fieldname
    );
  },
});

export const uploadPhoto = multer({
  storage: Storage,
}).single("photo");

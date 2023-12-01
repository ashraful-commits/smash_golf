import cloudinary from "cloudinary";
//=========================================cloudinary config
cloudinary.v2.config({
  cloud_name: "ds9mljkgj",
  api_key: "681823761534747",
  api_secret: "_Eb_2iPZ5soB8Bg7FRsVryaW7qc",
  secure: true,
});
//=========================================== upload
export const cloudUpload = async (req: any) => {
  const data = await cloudinary.v2.uploader.upload(req.file.path);
  return data;
};
//=========================================== upload
export const cloudUploads = async (path: any) => {
  const data = await cloudinary.v2.uploader.upload(path, {
    resource_type: "auto",
  });

  return data.secure_url;
};
//=========================================== delete cloudFile
export const cloudDelete = async (publicId: any) => {
  const data = await cloudinary.v2.uploader.destroy(publicId);
  return data;
};
//=========================================== download from cloud

import { useState } from "react";

export const FileUpload = async(file) => {
  const [imgUploaded, setImgUploaded] = useState(false);
  const cloudUrl = `https://api.cloudinary.com/v1_1/dkwuew3ie/upload`;
  const formData = new FormData();
  formData.append("upload_preset", "estudiantes");
  formData.append("file", file);

  const resp = await fetch(cloudUrl, {
    method: "POST",
    body: formData,
  });

  const cloudResp = await resp.json();

  setImgUploaded(true)

  return {
    url: cloudResp.secure_url,
    imgUploaded: imgUploaded
  }
};
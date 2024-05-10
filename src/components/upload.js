import React, { useState } from "react";
import Axios from "axios";
import upload from "../assets/upload.svg";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const fileList = Array.from(event.target.files);
    setFiles(fileList);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("files", file);
      });

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
        },
      };

      await Axios.post(
        "http://127.0.0.1:5000/photograph/upload?files",
        formData,
        config
      );

      // Reset files after successful upload
      setFiles([]);
      setUploadProgress(0);

      console.log("Files uploaded successfully");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group az">
          <h2>Upload Your Pictures Here:</h2>
          <div className="image-upload">
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
              multiple
            />
            <div className="image-uploads">
              <img src={upload} alt="upload icon" />
              <h4>Drag and drop a file to upload</h4>
              <div className="uploads">
                {files.map((file, index) => (
                  <div key={index} className="image-item">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`upload ${index}`}
                    />
                    <p>
                      {" "}
                      {file.name
                        ? file.name.length > 10
                          ? `${file.name.substring(
                              0,
                              10
                            )}...${file.name.substring(
                              file.name.lastIndexOf(".") + 1
                            )}`
                          : file.name
                        : "File not uploaded"}
                    </p>
                  </div>
                ))}
              </div>
              <button type="submit">Upload</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Upload;

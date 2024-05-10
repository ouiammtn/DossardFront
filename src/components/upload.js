import "../styles/upload.css";
import React, { useState } from "react";
import upload from "../assets/upload.svg";
import axios from "axios"; // Import Axios for making HTTP requests

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    setFiles(fileList);

    // Preview images
    const previews = [];
    fileList.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.push({ file, src: e.target.result });
        setFiles([...previews]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async () => {
    // Create a new FormData object
    const formData = new FormData();

    // Append each file to the FormData object
    files.forEach((file) => {
      formData.append("files", file);
    });
    console.log(formData);
    try {
      // Make a POST request to the API endpoint with the FormData object
      const response = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
        },
        onUploadProgress: (progressEvent) => {
          // Update upload progress
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setUploadProgress(progress);
        },
      });

      // Handle successful response
      console.log("Upload successful", response);
      // Optionally, you can do something with the response data here
    } catch (error) {
      // Handle error
      console.error("Error uploading files", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group az">
              <h2>Upload Your Pictures Here : </h2>
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
                    {files.map((item, index) => (
                      <div key={index} className="image-item">
                        <img src={item.src} alt={`upload ${index}`} />
                        <p>
                          {item.file
                            ? item.file.name.length > 10
                              ? `${item.file.name.substring(
                                  0,
                                  10
                                )}...${item.file.name.substring(
                                  item.file.name.lastIndexOf(".") + 1
                                )}`
                              : item.file.name
                            : "File not uploaded"}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button onClick={handleSubmit}>Upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;

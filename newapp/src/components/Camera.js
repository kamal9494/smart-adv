import React from "react";
import "./Camera.css";



const Camera =  props =>{

    const [file, setFile] = React.useState("");


    // Handles file upload event and updates state
    function handleUpload(event) {
      setFile(event.target.files[0]);
  
      // Add code here to upload file to server
      // ...
    }
    const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} alt={image.name} />;
    };
    const styleObject = {
      "height" : "100px",
      "width" : "100%"
    }
    return(
    <>
    <div className="upload-box">
      <input type="file" onChange={handleUpload} />
      <p>File name: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p>
    </div>
    <div className="thumb">
      {file && <ImageThumb image={file} />}
    </div>
    </>
    );
}
export default Camera;
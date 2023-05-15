import React, { useState } from "react";

function FileUploadForm() {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    fetch("http://localhost:3017/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Choose a file:
          <input type="file" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUploadForm;

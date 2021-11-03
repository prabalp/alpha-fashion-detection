import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Checkboxes from "./comps/Checkboxes";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [specificImg, setSpecificImg] = useState("0000000000000");

  return (
    <div className="App">
      <Title />
      {/* <Checkboxes setSpecificImg={setSpecificImg} /> */}
      <Checkboxes setSpecificImg={setSpecificImg} />

      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} specificImg={specificImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;

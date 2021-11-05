import React, { useState } from "react";
import "./App.css";
// import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Checkboxes from "./comps/Checkboxes";
import ButtonAppBar from "./comps/ButtonAppBar";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [specificImg, setSpecificImg] = useState("0000000000000");
  const [value, setValue] = useState(false);
  const [code, setCode] = useState("");

  return (
    <div className="App">
      {/* <Title /> */}
      <ButtonAppBar value={value} setValue={setValue} />
      {/* <Checkboxes setSpecificImg={setSpecificImg} /> */}
      {value ? (
        <Checkboxes setSpecificImg={setSpecificImg} setValueO={setValue} />
      ) : (
        <></>
      )}

      {/* <UploadForm /> */}
      <ImageGrid
        setSelectedImg={setSelectedImg}
        specificImg={specificImg}
        setCode={setCode}
      />
      {selectedImg && (
        <Modal
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          code={code}
        />
      )}
    </div>
  );
}

export default App;

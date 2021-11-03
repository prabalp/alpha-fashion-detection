import React from "react";
import { motion } from "framer-motion";
import { decode } from "../functions";

const Modal = ({ setSelectedImg, selectedImg, code }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        height="50%"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <div
        style={{
          width: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {decode(code).map((val, key) => {
          return (
            <div
              style={{
                backgroundColor: "white",
                margin: "5px",
                padding: "5px",
              }}
              key={key}
            >
              {val}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Modal;

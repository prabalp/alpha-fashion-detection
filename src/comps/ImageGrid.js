import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, specificImg }) => {
  const { docs } = useFirestore("images");

  const renderImage = (doc) => {
    if (specificImg === "0000000000000") {
      return (
        <motion.div
          className="img-wrap"
          key={doc.id}
          layout
          whileHover={{ opacity: 1 }}
          s
          onClick={() => setSelectedImg(doc.url)}
        >
          <motion.img
            src={doc.url}
            alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      );
    } else if (doc.tagsEncoded === specificImg) {
      return (
        <motion.div
          className="img-wrap"
          key={doc.id}
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImg(doc.url)}
        >
          <motion.img
            src={doc.url}
            alt="uploaded pic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      );
    }
  };

  console.log("inside image grid", specificImg);
  return (
    <div className="img-grid">
      {docs &&
        docs.map(
          (doc) =>
            // for search based rendering use conditional rendering
            renderImage(doc)

          // <motion.div
          //   className="img-wrap"
          //   key={doc.id}
          //   layout
          //   whileHover={{ opacity: 1 }}
          //   s
          //   onClick={() => setSelectedImg(doc.url)}
          // >
          //   <motion.img
          //     src={doc.url}
          //     alt="uploaded pic"
          //     initial={{ opacity: 0 }}
          //     animate={{ opacity: 1 }}
          //     transition={{ delay: 1 }}
          //   />
          // </motion.div>
        )}
    </div>
  );
};

export default ImageGrid;

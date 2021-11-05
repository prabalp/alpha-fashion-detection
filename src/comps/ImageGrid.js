import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg, specificImg, setCode }) => {
  const { docs } = useFirestore("images");

  // dynamic search functions

  // const position = (specificImg) => {
  //   const ans = [];
  //   for (var i = 0; i < specificImg.length; i++) {
  //     if (specificImg[i] === "1") {
  //       ans.push(i);
  //     }
  //   }

  //   return ans;
  // };

  // const arr = position(specificImg);
  // const querry = (tagsEncoded) => {
  //   for (var i = 0; i < tagsEncoded.length; i++) {
  //     for (var j = 0; j < arr.length; j++) {
  //       if (i === arr[j]) {
  //         return true;
  //       }
  //     }
  //   }
  // };

  const renderImage = (doc) => {
    if (specificImg === "0000000000000") {
      return (
        <motion.div
          className="img-wrap"
          key={doc.id}
          layout
          whileHover={{ opacity: 1 }}
          s
          onClick={() => {
            setSelectedImg(doc.url);
            setCode(doc.tagsEncoded);
          }}
          style={{
            borderRadius: "10px",
            // minWidth: "300px",
            // minHeight: "300px",
            // maxHeight: "300px",
          }}
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
    // else if (querry(doc.tagsEncoded)) {
    //   return (
    //     <motion.div
    //       className="img-wrap"
    //       key={doc.id}
    //       layout
    //       whileHover={{ opacity: 1 }}
    //       onClick={() => setSelectedImg(doc.url)}
    //     >
    //       <motion.img
    //         src={doc.url}
    //         alt="uploaded pic"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 1 }}
    //       />
    //     </motion.div>
    //   );
    // }
  };

  console.log("inside image grid", specificImg);
  return (
    <div
      className="img-grid"
      style={{
        padding: "5px",
        // display: "flex",
        // flexWrap: "wrap",
        // alignItems: "center",
        // justifyContent: "space-around",
      }}
    >
      {docs &&
        docs.map((doc) =>
          // for search based rendering use conditional rendering
          renderImage(doc)
        )}
    </div>
  );
};

export default ImageGrid;

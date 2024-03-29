import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
// import { motion } from "framer-motion";
import MyComponent from "react-fullpage-custom-loader";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  console.log(progress);
  return (
    <MyComponent />

    // <motion.div className="progress-bar"
    //   initial={{ width: 0 }}
    //   animate={{ width: progress + '%' }}
    // ></motion.div>
  );
};

export default ProgressBar;

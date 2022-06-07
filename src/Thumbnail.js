import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Thumbnail = ({ image, i }) => {
  const transition = { type: "spring", duration: 0.5, damping: 100 };

  const pageTransition = {
    initial: {
      scale: 0.8,
      opacity: 0,
      transition: transition
    },
    enter: {
      scale: 1,
      opacity: 1,
      transition: transition
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: transition
    }
  };

  return (
    <motion.div
      className="thumbnail"
      variants={pageTransition}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link to={`/image/${i}`}>
        <img src={image} alt={i} />
      </Link>
    </motion.div>
  );
};

export default Thumbnail;

import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loader">
      <Loader 
        type="TailSpin" 
        color="#476a2e" 
        height={80} 
        width={80} 
      />
    </div>
  );
};

export default Loading;

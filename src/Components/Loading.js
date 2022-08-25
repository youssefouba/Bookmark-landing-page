import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="loading">
      <HashLoader color="#7D8DE3" size={100} speedMultiplier={1} loading={true}/>
    </div>
  );
};

export default Loading;

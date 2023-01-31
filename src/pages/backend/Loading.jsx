import React from "react";
import { BiLoader } from "react-icons/bi";

function Loading() {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="text-primary text-center">
          <BiLoader /> Loading...
        </h2>
      </div>
    </div>
  );
}

export default Loading;

import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="relative flex justify-center items-center w-24 h-24">
        <div className="absolute w-full h-full border-4 border-[#244D3F] border-dashed rounded-full animate-[spin_3s_linear_infinite]" />
        <div className="absolute w-16 h-16 border-4 border-[#244D3F]/30 border-t-[#244D3F] rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default Spinner;
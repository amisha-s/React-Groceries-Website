import React from "react";

const Heading = (props) => {
  return (
    <div>
      <div className=" w-fit mx-auto">
        <h2 className="md:text-5xl text-[2.5rem] font-bold">
          <span className="text-orange-500">{props.highlight}</span> {props.content}
        </h2>
        <div className="w-34 h-1 bg-orange-300 ml-auto mt-5"></div>
      </div>
    </div>
  );
};

export default Heading;

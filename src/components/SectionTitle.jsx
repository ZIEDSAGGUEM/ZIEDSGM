import React from "react";

function SectionTitle({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-5xl text-center  font-bold my-2  text-blue-500 dark:text-blue-500 "
    >
      {children}
    </h1>
  );
}

export default SectionTitle;

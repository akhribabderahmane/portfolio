import React from "react";

const Resume = () => {
  const getDocIdFromUrl = (url) => {
    const match = url.match(/\/d\/(.*?)\/(edit|preview)/);
    return match ? match[1] : "";
  };
  return (
    <div className=" justify-center px-2 md:px-12">
       <iframe
      src={`https://docs.google.com/document/d/${getDocIdFromUrl("https://docs.google.com/document/d/1w9wYTs7nZaVU9OOVLizE_ZoFFcPOdeMr0Z30GTukAhs/edit")}/preview`}
      title='Google Docs Viewer'
      width={"100%"}
      height={"800px"}
    >
      This browser does not support embedding Google Docs. Please use a
      compatible browser.
    </iframe>
    </div>
  );
};

export default Resume;




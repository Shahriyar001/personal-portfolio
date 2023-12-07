import React from "react";

const Contact = () => {
  return (
    <div className="m-12">
      <div className="text-white flex items-center   mb-12">
        <h3 className="text-2xl mx-2">#Contact-me </h3>
        <progress
          className="progress progress-accent w-56"
          value="100"
          max="100"
        ></progress>
      </div>
      <div className="mt-5">
        <div className="text-white place-items-center mx-auto w-1/2">
          <div className="flex">
            <input
              type="text"
              placeholder="Name"
              className=" bg-[#282C35] border p-3 m-1  w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="E-mail"
              className=" bg-[#282C35] border p-3 m-1  w-full max-w-sm"
            />
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Tital"
              className=" bg-[#282C35] border p-3 pr-2 m-1  w-full "
            />
          </div>
          <div className="flex">
            <textarea
              className="bg-[#282C35] border h-32 ml-1 mt-2 mr-1 pt- w-full "
              placeholder=" Message"
            ></textarea>
          </div>
          <div
            className=" btn bg-[#282C36] rounded-none border border-white p-2
            mt-2 ml-1 w-20"
          >
            <p>SEND</p>
            {/* type="" placeholder="Send" className=" btn bg-[#282C36] border p-2
            mt-2 ml-1 w-20" */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

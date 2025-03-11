import React from "react";

const Footer = () => {
  const updatedDate = new Date().getFullYear();
  return (
    <footer className="p-6 bg-white flex flex-col items-center md:items-start ">
      <img src="/JaraFi-blue.png" className="w-[130px] " />

      <div className="flex justify-between items-center w-full md:flex-row flex-col gap-4 my-5 md:my-0">
        <p className="text-[16px] ">Copyright &copy; {updatedDate}.</p>

        <div className="flex gap-4 items-center ">
          <div className="rounded-[50%] border-[1px] border-black p-2 ">
            <a href="#">
              <img
                src="/icons8-google-48.png"
                className="w-[35px] h-[35px] opacity-65 "
              />
            </a>
          </div>
          <div className="rounded-[50%] border-[1px] border-black p-2 ">
            <a href="#">
              <img
                src="/icons8-telegram-48.png"
                className="w-[35px] h-[35px] opacity-65 "
              />
            </a>
          </div>
          <div className="rounded-[50%] border-[1px] border-black p-2 ">
            <a href="#">
              <img
                src="/icons8-linkedin-48.png"
                className="w-[35px] h-[35px] opacity-65 "
              />
            </a>
          </div>
          <div className="rounded-[50%] border-[1px] border-black p-2 ">
            <a href="#">
              <img
                src="/icons8-twitter-50.png"
                className="w-[35px] h-[35px] opacity-65 "
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

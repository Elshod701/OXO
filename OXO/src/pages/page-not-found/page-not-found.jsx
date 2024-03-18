import React from "react";
import notFound from "../../assets/images/not.png";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import { IoMdArrowBack } from "react-icons/io";

const PageNotFound = () => {
  return (
    <section>
      <div className="container">
        <Button className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 hover:text-[#767676]">
            <IoMdArrowBack className="text-xl" />
            <span className="font-bold text-[24px]">Back to home</span>
          </Link>
        </Button>
      </div>
      <div className="container flex items-center justify-center flex-col gap-4 h-[600px]">
        <img
          className="w-[400px] h-[400px] object-cover object-center"
          src={notFound}
          alt="pagenotfound"
        />
        <h1 className="text-[40px] font-bold">Page Not Found (404 error)</h1>
      </div>
    </section>
  );
};

export default PageNotFound;

import React from "react";
import { saveState, loadState } from "../../lib/local";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import Button from "../../components/button/button";

const Create_product = () => {
  const navigate = useNavigate();
  const token = loadState("user");
  console.log(token);

  const DeleteToken = () => {
    localStorage.clear("user");
  };

  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      console.log("Token bor");
    }
  }, []);
  return (
    <>
      <section className="py-6 bg-[#F7F7F7]">
        {token ? (
          <>
            <div className="container">
              <div className="btns flex items-center justify-between py-4">
                <Button className="flex items-center gap-2" s>
                  <Link
                    to="/"
                    className="flex items-center gap-2 hover:text-[#767676]"
                  >
                    <IoMdArrowBack className="text-xl" />
                    <span className="font-bold text-[24px]">Back to home</span>
                  </Link>
                </Button>
                <Button variant="log out" onClick={DeleteToken}>
                  <Link to="/" className="flex items-center gap-2">
                    Log out
                    <MdLogout />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="container">
              <h1 className="text-2xl font-bold">E’lon berish</h1>
              <form className="bg-[#fff] h-[283px] "></form>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-5 my-10">
            <p>Siz ro'yxatdan o'tmagansiz !!!</p>
            <Button className="flex items-center" variant="addvert">
              <Link to="/login">
                <IoMdArrowBack />
                Ro'yxatdan o'tish
              </Link>
            </Button>
          </div>
        )}
      </section>
    </>
  );
};
export default Create_product;

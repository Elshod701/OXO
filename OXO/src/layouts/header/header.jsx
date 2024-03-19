import React from "react";
import { useNavigate } from "react-router-dom";
// logo
import logo from "../../assets/images/logo.png";
// icons
import { LuMessageSquare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
// components
import Button from "../../components/button/button";
import { Link } from "react-router-dom";
import { loadState } from "../../lib/local";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const token = loadState("user");

  const CheckTokenForLogin = () => {
    if (token) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  const CheckTokenForCreating = () => {
    if (token) {
      navigate("/create-product");
    } else {
      navigate("/login");
      toast.error("Avval ro'yxatdan o'ting");
    }
  };
  // user account ga o'tmoqchi bo'lsa,
  // agar registdan o'tsa token oladi va home pagedan turib
  // har safar login qilib kirmasligi uchun ({=== checktoken ===}) functionni yozdim.

  return (
    <>
      <header className="shadow-lg ">
        <div className="container">
          <div className="nav flex items-center justify-between h-[72px]">
            <Link to="/">
              <img className="w-[83px]" src={logo} alt="logo" />
            </Link>
            <div className="flex items-center justify-center gap-7">
              <div className="flex items-center gap-2">
                <LuMessageSquare />
                <p className="font-medium">Xabarlar</p>
              </div>
              <Link to="/liked" className="flex items-center gap-2">
                <FaRegHeart />
                <p className="font-medium">Yoqtirganlar</p>
              </Link>

              <div
                onClick={CheckTokenForLogin}
                className="flex items-center gap-2 hover:text-gray-400 cursor-pointer"
              >
                <FaUserAlt />
                <p className="font-medium">Akkaunt</p>
              </div>

              <select>
                <option value="UZ">UZ</option>
                <option value="RU">RU</option>
              </select>
              <Button onClick={CheckTokenForCreating} variant="addvert">
                <Link> E'lonlarni joylashtirish</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

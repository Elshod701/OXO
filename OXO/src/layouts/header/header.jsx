import React from "react";
// logo
import logo from "../../assets/images/logo.png";
// icons
import { LuMessageSquare } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
// components
import Button from "../../components/button/button";
import { Link } from "react-router-dom";

const Header = () => {
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
              <div className="flex items-center gap-2">
                <FaRegHeart />
                <p className="font-medium">Yoqtirganlar</p>
              </div>
              <div className="flex items-center gap-2">
                <FaUserAlt />
                <p className="font-medium">Akkaunt</p>
              </div>
              <select>
                <option value="UZ">UZ</option>
                <option value="RU">RU</option>
              </select>
              <Button variant="addvert">E'lonlarni joylashtirish</Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

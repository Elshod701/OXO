import React from "react";
// logo
import logo from "../../assets/images/logo.png";
import app_store from "../../assets/images/appstore.svg";
import playmarket from "../../assets/images/playmarket.svg";
const Footer = () => {
  return (
    <footer className="bg-[#19191C] text-[#FFFFFF] font-medium">
      <div className="container">
        <div className="footer-wrapper flex items-start justify-between py-5">
          <div>
            <img className="w-[83px]" src={logo} alt="logo" />
          </div>
          <ul className="leading-[34px]">
            <li>
              <a href="#">Mobil ilovalar</a>
            </li>
            <li>
              <a href="#">Yordam </a>
            </li>
            <li>
              <a href="#"> Pullik xizmatlar </a>
            </li>
            <li>
              <a href="#">OXO da biznes </a>
            </li>
            <li>
              <a href="#">Saytda reklama </a>
            </li>
            <li>
              <a href="#">Foydalanish shartlari</a>
            </li>
            <li>
              <a href="#">Maxfiylik siyosati</a>
            </li>
            <li>
              <a href="#">Foydalanish shartlari</a>
            </li>
          </ul>
          <ul className="leading-[34px]">
            <li>
              <a href="#">Qanday qilib sotish va sotib olish kerak?</a>
            </li>
            <li>
              <a href="#">Xavfsizlik qoidalari </a>
            </li>
            <li>
              <a href="#"> Sayt xaritasi </a>
            </li>
            <li>
              <a href="#">OXO da karyera </a>
            </li>
            <li>
              <a href="#">Qayta aloqa</a>
            </li>
          </ul>
          <div>
            <img src={app_store} alt="statik" />
            <img src={playmarket} alt="statik" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright py-8 border-t border-solid border-[#6c6c6c] flex items-center justify-center">
          <p>
            © 2022 Barcha huquqlar himoyalangan.Ushbu sayt cookie-fayllardan
            foydalanadi. Brauzeringizda cookie sozlamalarini o'zgartirishingiz
            mumkin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { FaRegHeart } from "react-icons/fa";
export const ItemCards = ({ img, title, price, time }) => {
  return (
    <div className="w-[203px] py-2 bg-[#ffffff]">
      <img
        src={img}
        className="w-[182px] h-[146px] rounded-lg  object-center object-contain bg-[#EFEFEF] mx-auto hover:scale-[1.05]"
        alt="item-img"
        id="card-img"
      />
      <div className="card-content p-2">
        <p>
          {title.split("").length > 35 ? title.slice(0, 35) + "..." : title}
        </p>
        <h4 className="pt-3 pb-2 text-xl font-bold text-[#EA3838]">
          {price} so'm
        </h4>
        <p className="text-[#888888]">Tashkent, Yakkasaroy</p>
        <div className="flex items-center justify-between pt-3 text-[#888888]">
          <span>{time}</span>

          <div onClick={() => console.log("Like")}>
            <FaRegHeart className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

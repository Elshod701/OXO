import React from "react";

export const CategoryCard = ({ img, categoryTitle }) => {
  return (
    <div className="w-[94px] h-[132px] bg-slate-400 ">
      <img className="mx-auto" src={img} alt="category-img" />
      <p className="text-base leading-4 text-center mt-3">{categoryTitle}</p>
    </div>
  );
};

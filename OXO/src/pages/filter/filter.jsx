import React from "react";
import { useParams } from "react-router-dom";
import { useGetAll } from "../../service/query/useGetAll";
import { ItemCards } from "../../components/item-cards/item-cards";
import { nanoid } from "nanoid";

const Filter = () => {
  const { category } = useParams();
  const { data: all } = useGetAll();

  const filteredData = all?.filter((e) => e.categoryName === category);
  console.log(filteredData);
  return (
    <section className="bg-[#F7F7F7]">
      <div className="container">
        <div className="flex items-center flex-wrap gap-4 py-5 justify-between ">
          {filteredData?.map((e) => (
            <ItemCards {...e} key={nanoid()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filter;

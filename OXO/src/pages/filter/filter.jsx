import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetAll } from "../../service/query/useGetAll";
import { ItemCards } from "../../components/item-cards/item-cards";
import { nanoid } from "nanoid";
import { Loading } from "../../components/loading/loading";

const Filter = () => {
  const { category } = useParams();
  const { data: all, isLoading } = useGetAll();
  const filteredData = all?.filter((e) => e.categoryName === category);

  return (
    <section className="bg-[#F7F7F7]">
      <div className="container">
        <div className="flex">
          <p className="text-2xl font-bold  hover: cursor-pointer hover:text-gray-500">
            <Link to="/">Главная</Link>
          </p>
          {/* <p className="text-2xl font-bold hover: cursor-pointer hover:text-gray-500"> */}
          {/* {filteredData[0].categoryName.toUpperCase()} */}
          {/* bu yerda glavnaya dan keyin categoryname ni qo'ymoqchi edim, lekin bitta refreshdan keyin error beryapti */}
          {/* </p> */}
        </div>
        <div className="flex items-center flex-wrap gap-4 py-5 justify-between ">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {filteredData?.map((e) => (
                <ItemCards {...e} key={nanoid()} e={e} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Filter;

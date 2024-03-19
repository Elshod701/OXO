import React from "react";
import { useState } from "react";
import { useGetCategories } from "../../service/query/useGetCategories";
import { CategoryCard } from "../../components/category-cards/category-card";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { Loading } from "../../components/loading/loading";
import { ItemCards } from "../../components/item-cards/item-cards";
import { useInfiniteData } from "../../service/query/useInfiniteData";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Button from "../../components/button/button";
import { useGetAll } from "../../service/query/useGetAll";

const Home = () => {
  const { data } = useGetAll();
  const placeholderCount = data?.length;
  const { data: infiniteData, fetchNextPage, hasNextPage } = useInfiniteData();
  const { data: categories, isLoading } = useGetCategories();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const results = data?.filter((item) =>
      item.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <section className="h-[112px] bg-[#F7F7F7] py-8 mt-[72px]">
        <div className="container">
          <form className="flex items-center justify-between gap-4">
            <div className=" header-input border-solid border border-gray-400 rounded-lg bg-white flex items-center">
              <div className="w-[590px] flex items-center px-2 py-3 gap-2 border-r border-solid border-gray-400">
                <IoIosSearch className="text-xl" />
                <input
                  placeholder={
                    `${placeholderCount}` + " ta " + "natija bo‘yicha qidirish"
                  }
                  className="outline-none bg-transparent w-[560px] pr-3 "
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div className="w-[340px] flex items-center px-2 py-3 gap-2">
                <IoLocationOutline className="text-xl" />
                <input
                  type="text"
                  placeholder="Butun O‘zbekiston"
                  className="outline-none bg-transparent w-[340px] pr-3 "
                />
              </div>
            </div>
            <Button onClick={(e) => e.preventDefault()} variant="addvert">
              Izlash
            </Button>
          </form>
          {searchTerm && (
            <ul className="bg-white z-50  absolute shadow-2xl p-4 w-[900px] h-[400px]  overflow-y-scroll">
              {searchResults?.map((item) => (
                <Link to={`/product-detail/${item.productId}`} key={nanoid()}>
                  <li className="p-3 flex items-center gap-2 hover:bg-[#d5d5d5] hover:cursor-pointer">
                    <img className="w-[40px] h-[40px]" src={item.img} alt="" />
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section id="categ-sec">
        <div className="container">
          <div className="wrapper w-[1044px] py-3">
            <h2 className="font-bold text-[24px] pb-6">Kategoriyalar</h2>
            <div className="wrapper flex items-center  flex-wrap gap-9">
              {categories?.map((e) => (
                <Link to={`filter/${e.categoryName}`} key={nanoid()}>
                  <CategoryCard {...e} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="card-sec" className="bg-[#F7F7F7]">
        <div className="container">
          <div className="wrapper py-3">
            <h2 className="font-bold text-[24px] pb-6">Siz uchun maxsus</h2>
            <div className="flex items-center flex-wrap gap-4 pb-5 justify-between ">
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  {infiniteData?.pages.map((page) =>
                    page.map((e) => <ItemCards key={nanoid()} {...e} e={e} />)
                  )}
                </>
              )}
            </div>
            {hasNextPage ? (
              <Button variant="addvert" onClick={() => fetchNextPage()}>
                More...
              </Button>
            ) : (
              "tugadi :)"
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

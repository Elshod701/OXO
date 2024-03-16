import React, { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useGetCategories } from "../../service/query/useGetCategories";
import { CategoryCard } from "../../components/category-cards/category-card";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { Loading } from "../../components/loading/loading";
import { ItemCards } from "../../components/item-cards/item-cards";
import { useInfiniteData } from "../../service/query/useInfiniteData";
import Button from "../../components/button/button";
import { useGetSearchFromAll } from "../../service/query/useGetSearchFromAll";
const Home = () => {
  const [value, setValue] = useState("");
  const search = useDebounce(value);
  const { data: inputData, isLoading: inputData_Loading } =
    useGetSearchFromAll(search);
  const { data: infiniteData, fetchNextPage, hasNextPage } = useInfiniteData();
  const { data: categories, isLoading } = useGetCategories();
  console.log(inputData?.slice(0, 10));

  return (
    <>
      <section id="input-sec">
        <div className="container">
          <form>
            <input
              type="text"
              placeholder="Enter text"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <Button type="submit">OK</Button>
            <div className="flex items-center">
              {inputData?.map((e) => (
                <ItemCards {...e} />
              ))}
            </div>
          </form>
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
                    page.map((e) => (
                      <Link key={nanoid()}>
                        <ItemCards {...e} />
                      </Link>
                    ))
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

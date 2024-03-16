import React from "react";
import { useGetAll } from "../../service/query/useGetAll";
import { useGetCategories } from "../../service/query/useGetCategories";
import { CategoryCard } from "../../components/category-cards/category-card";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
const Home = () => {
  const { data: all } = useGetAll();
  const { data: categories } = useGetCategories();
  return (
    <>
      <section id="input-sec">
        <div className="container">input bor</div>
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
    </>
  );
};

export default Home;

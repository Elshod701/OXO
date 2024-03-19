import React from "react";
import { useParams, Link } from "react-router-dom";
import { MdOnlinePrediction } from "react-icons/md";
import { useGetAll } from "../../service/query/useGetAll";
import { loadState } from "../../lib/local";
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { ItemCards } from "../../components/item-cards/item-cards";
import Button from "../../components/button/button";
import userImg from "../../assets/images/user.jpg";
import reklama from "../../assets/images/reklama.png";
import skripkaImg from "../../assets/images/skripka.svg";
import locationimg from "../../assets/images/location.svg";
import mapimg from "../../assets/images/map.png";
import { nanoid } from "nanoid";

const Product_detail = () => {
  const { id } = useParams();
  const { data } = useGetAll();
  const token = loadState("user");
  const singleItem = data?.find((e) => e.productId == id);
  return (
    <>
      <section className="bg-[#F7F7F7] pb-6">
        <div className="container">
          <div className="single-card flex items-start gap-6 pt-[70px]">
            <div className="bg-[#EFEFEF] w-[711px] h-[467px] rounded-xl">
              <img
                className="w-[711px] h-[460px] object-contain object-center "
                src={singleItem?.img}
                alt="img"
              />
            </div>

            <div className="single-card-content flex flex-col gap-6">
              <div className="card-1 bg-[#fff]  w-[375px] px-4 py-6">
                <h2 className="text-center text-2xl font-medium">
                  Foydalanuvchi
                </h2>
                <div className="content-phase flex items-start justify-between mt-5">
                  <img
                    className="w-[100px] h-[100px] object-cover object-center rounded-full"
                    src={userImg}
                    alt="userImg"
                  />
                  <div className="h-auto flex-wrap">
                    <p className="font-medium text-lg">Elshod Jo'rayev</p>
                    <p>Ro’yxatdan o’tgan sanasi: 2020</p>
                    <div className=" my-2 text-sm flex items-center gap-2 bg-green-500 rounded-xl w-[100px] justify-center py-[2px]">
                      <span className="text-white text-[16px]">Online</span>
                      <MdOnlinePrediction className="text-2xl text-white" />
                    </div>
                    <p>
                      Email:
                      <Link to="/profile">
                        <span className="font-bold text-base">
                          {token?.user.email.split("").length > 20
                            ? token?.user.email.slice(0, 20) + "..."
                            : token?.user.email}
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-2 bg-[#fff]  p-4">
                <div className="card-2-content flex items-center gap-12 ml-4 mb-2">
                  <img
                    src={locationimg}
                    className="w-[66px] h-[66px] object-cover object-center"
                    alt="img"
                  />
                  <div>
                    <p className="font-bold text-xl">Tashkent</p>
                    <p className="font-medium text-lg">Sergeli tumani</p>
                    <p className="text-[#888888]">Sizdan 9 km uzoqlikda</p>
                  </div>
                </div>
                <img src={mapimg} alt="mapImage" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7] pb-14">
        <div className="container">
          <div className="wrapper flex items-start gap-6">
            <div className="for cards flex flex-col gap-7">
              <div className="single_info rounded-lg w-[681px] h-[auto]  bg-[#fff] py-6 px-8">
                <div className="flex items-center justify-between pb-6">
                  <h2>{singleItem?.time} da joylashtirildi</h2>
                  <div
                    onClick={() => console.log("Like")}
                    className="hover:cursor-pointer"
                  >
                    <FaRegHeart className="text-2xl" />
                  </div>
                </div>

                <div className="pb-6">
                  <h3 className="text-[24px]">{singleItem?.title}</h3>
                </div>

                <div className="pb-6">
                  <p className="text-[28px] font-bold text-[#EA3838]">
                    {singleItem?.price} so'm{" "}
                    <span className="text-gray-400 ml-5 font-normal">
                      Kelishiladi
                    </span>
                  </p>
                </div>

                <div className="flex items-center gap-5  flex-wrap pb-6">
                  <div className="sorting-types px-4 py-2">
                    <p className="items text-[#131418]">Holati: Yangi</p>
                  </div>
                  <div className="sorting-types px-4 py-2">
                    <p className="items text-[#131418]">Model: PS5 1TB</p>
                  </div>
                  <div className="sorting-types px-4 py-2">
                    <p className="items text-[#131418]">
                      Batareyka: Uzoqqa yetadi
                    </p>
                  </div>
                  <div className="sorting-types px-4 py-2">
                    <p className="items text-[#131418]">Joystik: Bor</p>
                  </div>
                  <div className="sorting-types px-4 py-2">
                    <p className="items text-[#131418]">Rangi: Oq</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-[24px] font-medium">Tavsifi</h2>
                  <p className="text-base font-normal pt-2 pb-5">
                    Бизнес классда такси килсангиз болади ортанча 6-7 соат ичида
                    400-500 даромад 13000 минг сомга зарядка толади!! Зарядка
                    3-7 квт кошиб берилади Полик бонусга Бир заряд билан юриш
                    масофаcи: 405 км Максимал қувват: 55 (квт) Максимал тезлик:
                    130 км/соат Тезлашув вақти 0-50 км/соат: 4, 9 с Батарея
                    қуввати: 38.88 квт/соат +998901146464 Бошлангич 36% толов
                    билан 3 йилдан 5 йилгача автокредит клиб олсез болади!!
                  </p>
                </div>

                <div className="forBorder"></div>
                <div className="pt-6 flex items-center justify-between">
                  <div>
                    <span> ID :</span>
                    <span className="font-bold text-xl">
                      {singleItem?.productId}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEye />
                    <span>Ko'rishlar : 711</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-700">
                    <FaFontAwesomeFlag />
                    <span>Shikoyat qilish</span>
                  </div>
                </div>
              </div>

              <div className="fortext w-[681px] bg-[#fff] rounded-lg px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="content-phase flex items-center  mt-5">
                    <img
                      className="w-[60px] h-[60px] object-cover object-center rounded-full"
                      src={userImg}
                      alt="userImg"
                    />
                    <div className="h-auto flex-wrap">
                      <p className="font-medium text-base">Elshod Jo'rayev</p>
                      <p className="text-sm">Ro’yxatdan o’tgan sanasi: 2020</p>
                      <div className=" mt-2 text-sm flex items-center gap-2 bg-green-500 rounded-xl w-[100px] justify-center py-[2px]">
                        <span className="text-white text-[16px]">Online</span>
                        <MdOnlinePrediction className="text-2xl text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-[#23E5DB] rounded-full p-2">
                      <FaPhoneAlt className="text-xl" />
                    </div>
                    <p>xx xxx-xx-xx</p>
                    <button className="py-1 px-5 bg-transparent rounded-md border border-solid border-black hover:text-white hover:bg-[#000]">
                      Ko'rsatish
                    </button>
                  </div>
                </div>
                <textarea className="my-4 resize-none bg-[#F2F4F5] outline-none p-6 w-[100%] h-[200px]" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={skripkaImg}
                      className="w-[20px]"
                      alt="skripkaImg"
                    />
                    <span className="text-lg font-medium">
                      Fayl biriktirish
                    </span>
                  </div>
                  <Button variant="addvert">Yuborish</Button>
                </div>
              </div>
            </div>
            <img className="h-[1090px]" src={reklama} alt="" />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F7F7] pb-14">
        <div className="container">
          <h1 className="font-bold text-[24px]">O'xshash tovarlar</h1>
          <div className="flex items-center gap-4 flex-wrap">
            {data?.slice(0, 10)?.map((e) => (
              <ItemCards key={nanoid()} {...e} e={e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product_detail;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../../Store/product";
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const HomePage = () => {
  const { fetchProduct, products } = useProductStore();
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  console.log("products", products);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {products && products.length > 0 ? (
          products.map((data) => (
            <div key={data.id} className="font-bold text-center bg-slate-200 p-2 rounded-md">
              <img className="w-30vh" src={data.image} alt={data.name} />
              <p>{data.name}</p>
              <p>R {data.price}</p>
              <div className="flex justify-evenly ">
                <MdDeleteOutline  className="text-red-600"/>
                <CiEdit className="text-blue-800"/>
              </div>
            </div>
          ))
        ) : (
          <div className=" h-[100vh] w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-20">
              <h1 className="text-4xl text-indigo-800">Create Product</h1>
              <p className="text-xl text-indigo-700">
                No Product Found😒
                <Link to={"/create"} className="">
                  Creat a Product
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
HomePage;

// 'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400

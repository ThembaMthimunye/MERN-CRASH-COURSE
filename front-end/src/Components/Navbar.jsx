import React from "react";
// import { useColorMode } from "@chakra-ui/react"; /
import { MdOutlineAddBox } from "react-icons/md";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"; 
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  // const { colorMode, toggleColorMode } = useColorMode(); 
  return (
    <div className="p-6 text-black">
      <div className="flex justify-between items-center">
        <div className="border rounded-xl px-4 py-2">
          <a className="flex items-center text-2xl" href="">
            Product Store
            <IoIosCart className="ml-2 text-xl" />
          </a>
        </div>

        <div className="flex items-center space-x-10">
          <a href="">
            <MdOutlineAddBox className="text-3xl" />
          </a>

          {/* <button onClick={toggleColorMode} className="text-3xl">
            {colorMode === "light" ? (
              <IoSunnyOutline />
            ) : (
              <IoMoonOutline />
            )}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

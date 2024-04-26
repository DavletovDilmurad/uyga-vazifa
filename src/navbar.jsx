import  { useContext } from "react";
import { UserContext1 } from "./usecontext";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const { state } = useContext(UserContext1);
  return (
    <div className="flex items-center gap-96 justify-between">
      <div>
        <h1 className="text-3xl">logo</h1>
      </div>
      <div className="flex gap-10">
        <p className="text-[20px]">home</p>
        <p className="text-[20px]">about</p>
        <p className="text-[20px]">contact</p>
      </div>
      <div className="flex items-center">
<CiShoppingCart className="text-3xl"/>
        <h1 className="bg-red-600 text-white rounded-[50%] w-[20px] text-center mt-[-20px]">{state.length}</h1>
      </div>
      <div className="gap-5 flex">
        <button className="w-20 bg-red-500 text-white h-[30px] rounded-md">
          login
        </button>
        <button className="w-20 bg-green-500 text-white h-[30px] rounded-md">
          register
        </button>
      </div>
    </div>
  );
};

export default Navbar;

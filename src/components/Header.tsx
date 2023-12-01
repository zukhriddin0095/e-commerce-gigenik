import { MdOutlineShoppingCartCheckout } from "react-icons/md";
// import { GrFavorite } from "react-icons/gr";
import Image from "next/image";
import ImageLogo from "../../public/logo.png";
import NavLink from "@/shared";
import Link from "next/link";

const PublicHeader = () => {
  
   
  return (
    <header className="text-gray-600 body-font fixed w-full top-0 bg-white z-10 shadow">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src={ImageLogo} alt="logo" width={50} className="rounded" />
          <span className="ml-3  text-xl  font-bold text-gray-900">
            E-commerce
          </span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center gap-5">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">All products</NavLink>
          <NavLink href="/about">about</NavLink>
          <NavLink href="/register">register</NavLink>
        </nav>
        <div className="flex items-center gap-x-4">
          <Link href="/login">
            <button className="button border-blue-600 hover:bg-blue-500 duration-300 hover:text-white">
              Sign Up
            </button>
          </Link>
          {/* <button className="border-blue-600 inline-flex items-center bg-gray-100 border-0 py-[5px] px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            <GrFavorite className=" text-[25px] " />
          </button> */}
          <Link href="/shoping-card">
            <button className="relative border-blue-600 inline-flex items-center bg-gray-100 border-0 py-[5px]  px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              <MdOutlineShoppingCartCheckout className=" text-[25px] " />
              
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;

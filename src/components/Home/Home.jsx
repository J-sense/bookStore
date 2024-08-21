import Lottie from "lottie-react";
import React from "react";
import reader from "../../assets/animation_lo5c25qc (1).json";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-24 flex flex-col lg:flex-row justify-between">
      <div className="md:w-[50%] md:ms-0 ms-4 md:mt-20">
        <button className="badge">Sale on</button>
        <h1 className="md:text-4xl text-xl font-bold space-y-3" >A reader lives a <br /> thousand lives <span className="text-blue-600">before he dies</span> </h1>
        <p className="mt-3 md:text-xl">
        Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.
        </p>
        <div>
          <Link to='/books'>
        <button className="btn mt-3"> Visit Store <AiOutlineShoppingCart className="ms-3 text-xl"/> </button>
          </Link>
        <Link to='/about' className="hover:text-blue-950 ms-3 text-ms">Learn More</Link>

        </div>
      </div>

      <div className="md:w-[520px]">
        <Lottie animationData={reader}></Lottie>
      </div>
    </div>
  );
};

export default Home;

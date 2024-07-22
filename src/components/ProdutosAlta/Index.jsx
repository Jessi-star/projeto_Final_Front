import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ListaTenis from "../ListaTenis";

export default function ProdutosAlta() {
   

    return (
        <div className="flex w-[full] flex-col gap-5">
            <div className=" flex justify-between">
                <h1 className="font-extrabold flex pl-20">Produtos em Alta</h1>

                <div className=" flex gap-2">
                    <a href="" className=" text-pink-600 hover:text-[#C92071] hover:font-bold hover:underline">Ver todos </a>
                    <FaArrowRightLong className="text-pink-600 h-4 w-5" />
                </div>
            </div>
           <ListaTenis />
        </div>

    )
}
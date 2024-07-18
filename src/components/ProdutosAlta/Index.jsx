import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "axios";

export default function ProdutosAlta() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('https://api-store-do1w.onrender.com/shoes')
            .then((response => setProdutos(response.data)))
    }, [])

    return (
        <div className="flex w-[full] flex-col">
            <div className=" flex justify-between">
                <h1 className="font-extrabold">PRODUTOS EM ALTA</h1>

                <div className=" flex gap-2">
                    <a href="" className=" text-pink-600 hover:text-[#C92071] hover:font-bold hover:underline">Ver todos </a>
                    <FaArrowRightLong className="text-pink-600 h-4 w-5" />
                </div>
            </div>
            <div className="w-full justify-center flex gap-4 flex-wrap pt-4">
                {produtos.map((produto) => {
                    return (
                        <div className="w-[280px] h-[400px] flex flex-col">
                            <div className="bg-gray-100 p-4">
                                <div className=" bg-yellow-200 w-[70px]  h-8 rounded-full flex items-center justify-center">
                                    <p className="">30% off</p>
                                </div>
                                <img src={produto.imagem_url} />
                            </div>
                            <p>Tenis</p>
                            <p className="font-bold uppercase">{produto.nome}</p>
                            <div className="flex gap-3">
                                <p className="text-[20px]">${produto.preco_desconto}</p>
                                <p className=" text-[20px] font-black">${produto.preco_original}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
import { useEffect, useState } from "react"
import axios from "axios";

export default function ListaTenis({ limit = 15}) {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get(`https://api-store-do1w.onrender.com/shoes?limit=${limit}`)
            .then((response => setProdutos(response.data)))
    }, [])

    return (
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
    )
}
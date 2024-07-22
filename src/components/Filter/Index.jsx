import { LuShoppingCart } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import FilterComponent from "../FilterComponent";
import Footer from "../Footer"
import Header from "../Header";


export default function Filter() {
    return (
        <div className="flex flex-col justify-start p-2 gap-12 ">
            <Header />

            <div className=" w-[100%] h-[1100px] bg-gray-100" >
                <div className=" flex items-center justify-between ">
                    <div className=" flex gap-3 pl-4 h-[28px] font-bold">
                        <p>Resultados para "Tênis"</p>
                        <p className="font-normal">- 389 produtos</p>

                    </div>



                    <div className="w-[300px] h-[60px] flex items-center justify-around">
                        <select className="border border-[#000]">
                            <option value="">Ordenar por: mais relevantes</option>
                            <option value="">Produto 1</option>


                        </select>

                    </div>
                </div>
                <div className="pl-8 ">
                    <div className="bg-white w-[280px] pl-8">
                        <p className="font-bold flex flex-col pt-7">Filtrar por</p>
                        <br />
                        <div className=" bg-black w-[248px] h-[1px]"><hr /></div>
                        <aside>
                            <div className="">

                                <FilterComponent text="Adidas" />
                                <FilterComponent text="Balenciaga" />
                                <FilterComponent text="K-Swiss" />
                                <FilterComponent text="Nike" />
                                <FilterComponent text="Puma" />
                            </div>

                            <br />
                            <div className="">
                                <p className="font-bold">Categoria</p>
                                <FilterComponent text="Esporte e Lazer" />
                                <FilterComponent text="Casual" />
                                <FilterComponent text="Utilitário" />
                                <FilterComponent text="Corrida" />
                            </div>

                            <br />
                            <div className="">
                                <p className="font-bold">Gênero</p>
                                <FilterComponent text="Masculino" />
                                <FilterComponent text="Feminino" />
                                <FilterComponent text="Unisex" />
                            </div>
                            <br />
                            <div className="">
                                <p className="font-bold">Estado</p>
                                <FilterComponent text="Novo" />
                                <FilterComponent text="Usado" />
                            </div>
                        </aside>
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    );
}

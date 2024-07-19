import { LuShoppingCart } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function Categoria() {
    return (
        <div className="flex flex-col justify-start p-2 gap-12 ">
            <div className="flex w-full h-[60px]">
                <div className="flex w-[30%] h-full items-center justify-start gap-2">
                    <img
                        className="w-9 rounded-lg"
                        src="src\assets\img\logo.jpeg"
                        alt="Logo da Digital Collage"
                        title="Logo da Digital Collage"
                    />
                    <div className="text-3xl text-[#C92071] font-bold flex items-center justify-center">
                        <h1>Digital Store</h1>
                    </div>
                </div>
                <div className="flex h-full w-[40%] items-center justify-center">
                    <div className="w-full h-[70%] flex items-center justify-center bg-[#e0e0e0] rounded-md">
                        <input
                            className="w-[87%] h-full p-1 bg-[#e0e0e0]"
                            type="text"
                            placeholder="Pesquisar produto..." />

                        <div className="w-[10%] flex items-center justify-center cursor-pointer">
                            <HiMiniMagnifyingGlass />
                        </div>
                    </div>
                </div>
                <div className="w-[30%] items-center justify-end flex gap-10 pr-[40px]">
                    <div className="flex justify-center items-center">
                        <h2 className="underline cursor-pointer ">Cadastre-se</h2>
                    </div>

                    <button className="p-5 h-[40px] w-[100px] flex items-center justify-center rounded bg-[#C92071] hover:bg-[#973e69] text-white">Entrar</button>

                    <div className="relative flex justify-center items-centerr pl-10">
                        <div className="absolute top-[-7px] left-[50px] w-[15px] h-[15px] rounded-full bg-[#C92071] flex items-center justify-center">
                            <p className="text-[7px] text-white">2</p>
                        </div>
                        <a className="text-[#C92071]">
                            <LuShoppingCart size={20} />
                        </a>

                    </div>
                </div>
            </div>

            <div className="flex gap-10">
                <Link to={"/"}>
                    <h2 className="text-[#474747] hover:text-[#C92071] hover:font-bold hover:underline">Home</h2>
                </Link>
                <Link to={"/produtos"}>
                    <h2 className="text-[#474747] hover:text-[#C92071] hover:font-bold hover:underline">Produtos</h2>
                </Link>
                <Link to={"/produtosFiltrados"}>
                    <h2 className="text-[#474747] hover:text-[#C92071] hover:font-bold hover:underline">Categorias</h2>
                </Link>


                <h2 className="text-[#474747] hover:text-[#C92071] hover:font-bold hover:underline">Meus Pedidos</h2>
            </div>


            <div class="flex space-x-6 justify-start">
                <a href="#" class="hover:text-[#C92071] hover:font-bold hover:underline">Home /</a>
                <a href="#" class="hover:text-[#C92071] hover:font-bold hover:underline">Produtos /</a>
                <a href="#" class="hover:text-[#C92071] hover:font-bold hover:underline">Tênis /</a>
                <a href="#" class="hover:text-[#C92071] hover:font-bold hover:underline">Nike /</a>
                <a href="#" class="hover:text-[#C92071] hover:font-bold hover:underline">Tênis Nike Revolution 6 Next Nature Masculino</a>
            </div>




            <footer className=" w-full h-[400px] flex flex-col bg-gray-950 gap-12 items-center justify-center pt-2">
                <div className="w-full h-[80%] flex items-center justify-center">
                    <div className="text-white space-y-4 w-[25%] pl-[40px]">

                        <div className="flex gap-3 items-center">
                            <img src="src\assets\img\Vector.png" alt="logo" />
                            <h1>DIGITAL STORE</h1>
                        </div>

                        <p>Lorem, ipsum dolor sit amet consectetur</p>
                        <p>adipiscing elit, sed do eiusmod tempor</p>
                        <p>incididunt ut labore et dolore.</p>

                        <div className="flex space-x-5">
                            <FaFacebook />
                            <FaInstagram />
                            <FiTwitter />
                        </div>
                    </div>

                    <div className=" text-white space-y-4 w-[20%]">
                        <h1>INFORMAÇAO</h1>
                        <p>Sobre Drip Store</p>
                        <p>Seguranca</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus Pedidos</p>
                    </div>

                    <div className=" text-white space-y-4 w-[20%]">
                        <h1>CATEGORIAS</h1>
                        <p>Camisetas</p>
                        <p>Calças</p>
                        <p>Bones</p>
                        <p>Headphones</p>
                        <p>Tenis</p>
                    </div>

                    <div className=" text-white space-y-4 w-[20%]">
                        <h1>CONTATO</h1>
                        <p>Informação</p>
                        <p>Av. Santos Dumont, 1510 - 1</p>
                        <p>andar - Aldeota, Fortaleza -</p>
                        <p>CE, 60150-161</p>

                        <p>(85) 3051-3411</p>
                    </div>
                </div>
                <div className=" w-full h-[10%] flex items-center justify-center">
                    <div className=" bg-white w-[80%] h-[1px]"></div>

                </div>
                <div className=" w-full h-[10%] flex items-center justify-center">
                    <p className=" text-white">@ 2022 Digital College</p>

                </div>

            </footer>



        </div>
    );
}

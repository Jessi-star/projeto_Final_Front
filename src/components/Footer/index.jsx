import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
    return (
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
    )
}
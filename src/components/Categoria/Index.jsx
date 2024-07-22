import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Footer from "../Footer"
import Header from "../Header";

export default function Categoria() {
    return (
        <div className="flex flex-col justify-start p-2 gap-12 ">
            <Header />


            <div className="flex space-x-6 justify-start">
                <a href="#" className="hover:text-[#C92071] hover:font-bold hover:underline">Home /</a>
                <a href="#" className="hover:text-[#C92071] hover:font-bold hover:underline">Produtos /</a>
                <a href="#" className="hover:text-[#C92071] hover:font-bold hover:underline">Tênis /</a>
                <a href="#" className="hover:text-[#C92071] hover:font-bold hover:underline">Nike /</a>
                <a href="#" className="hover:text-[#C92071] hover:font-bold hover:underline">Tênis Nike Revolution 6 Next Nature Masculino</a>
            </div>
            <div className="flex flex-row h-screen items-center justify-center">
                <div className="bg-gray-100 flex justify-center items-center w-1/2 h-full">
                    <div className="h-full w-[10%] flex items-center justify-center">
                        <GoChevronLeft />
                    </div>
                    <div className="h-full w-[80%] flex items-center justify-center">
                        <img src="src\assets\img\White-Sneakers-PNG-Clipart 2.png" alt="" />
                    </div>
                    <div className="h-full w-[10%] flex items-center justify-center">
                        <GoChevronRight />
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col">
                    <div className="max-w-md flex">
                        <p className="font-bold text-4xl break-all">Tênis Nike Revolution
                            <br />
                            6 Next Nature Masculino</p>
                    </div>
                    <div className="font-inter text-xs font-medium leading-4 tracking-wider text-left ">
                        Casual | Nike | REF:38416711
                    </div>
                    <div className="flex space-x-10">
                        <img src="src\assets\img\Stars.png" alt=""/>
                        <img src="src\assets\img\Group 1103.png" alt=""/>
                    </div>
                    <div className="space-y-2 flex">
                        <p className="font-inter text-xs font-bold leading-5 tracking-wider text-left">R$</p>
                        <p className="font-inter text-xs font-bold leading-5 tracking-wider text-left">219,00</p>
                        <p className="font-inter text-xs font-bold leading-5 tracking-wider text-left">219,00</p>
                    </div>
              
                    <div className="font-inter text-xs font-bold leading-5 tracking-wider text-left">
                        Descrição do produto
                    </div>
                    <div className="max-w-md">
                        <p className="break-words text-sm my-3 break-all">Lorem ipsum dolor sit amet, consectetus adipiscing elit, 
                        sed do 
                        <br/>
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim
                        <br/> 
                        ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                    </div>

                </div>
            </div>
            

            <Footer />
        </div>
    );
}

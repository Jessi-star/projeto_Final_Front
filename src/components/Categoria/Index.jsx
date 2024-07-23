import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Footer from "../Footer"
import Header from "../Header";

export default function Categoria() {
    return (
        <div className="flex flex-col justify-start p-2 gap-12 ">
            <Header />


            <div className="flex space-x-6 justify-start ms-20">
                <a href="#" className="hover:text-[#C92071] hover:font-bold hover:underline">Home /</a>
                <a href="#" className="hover:text-[#C92071] hover:font-bold hover:underline">Produtos /</a>
                <a href="#" className="hover:text-[#C92071] hover:font-bold hover:underline">Tênis /</a>
                <a href="#" className="hover:text-[#C92071] hover:font-bold hover:underline">Nike /</a>
                <a href="#" className="hover:text-[#C92071] hover:font-bold hover:underline">Tênis Nike Revolution 6 Next Nature Masculino</a>
            </div>


            <div className=" flex flex-row items-center justify-center ms-20">
                <div className="bg-[#E2E3FF] flex justify-center items-center w-1/2 h-[506px]">
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


                <div className="w-1/2 h-full flex flex-col gap-3 p-7">
                    <div className="max-w-md flex">
                        <p className="font-bold text-4xl break-all">Tênis Nike Revolution
                            <br />
                            6 Next Nature Masculino</p>
                    </div>
                    <div className=" text-gray-600 font-inter text-xs font-medium leading-4 tracking-wider text-left ">
                        Casual | Nike | REF:38416711
                    </div>
                    <div className="flex space-x-10">
                        <img src="src\assets\img\Stars.png" alt="" />
                        <img src="src\assets\img\Group 1103.png" alt="" />
                    </div>
                    <div className="flex items-end gap-3">

                        <div class="flex items-end">
                            <p className="width: 115px; height: 38px; top: 430px; left: 844px; gap: 0px; opacity: 0;">R$</p>
                            <span class="text-3xl font-bold">219</span>
                            <span class="text-sm">,00</span>
                        </div>
                        <div class="flex items-end">
                            <del class="text-sm text-gray-500">219,00</del>
                        </div>
                    </div>

                    <div className="max-w-md">
                        <h1 className="text-gray-500 font-inter text-xs font-bold leading-5 tracking-wider text-left">Descrição do produto</h1>
                        <p className="break-words text-sm my-1 break-all">Lorem ipsum dolor sit amet, consectetus adipiscing elit,
                            sed do
                            <br />
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim
                            <br />
                            ad minim veniam, quis nostrud exercitation ullamco.
                        </p>
                    </div>

                    <div className="text-gray-500 font-inter text-xs font-bold leading-5 tracking-wider text-left">
                        Tamanho
                    </div>

                    <div class="flex gap-2">
                        <button class="px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 font-semibold hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                            <span class="text-lg">39</span>
                        </button>
                        <button class="px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 font-semibold hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                            <span class="text-lg">40</span>
                        </button>
                        <button class="px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 font-semibold hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                            <span class="text-lg">41</span>
                        </button>
                        <button class="px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 font-semibold hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                            <span class="text-lg">42</span>
                        </button>
                        <button class="px-4 py-2 rounded bg-white border border-gray-300 text-gray-800 font-semibold hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                            <span class="text-lg">43</span>
                        </button>
                    </div>
                    <div className="text-gray-500 font-inter text-xs font-bold leading-5 tracking-wider text-left">
                        Tamanho
                    </div>
                    <div class="flex gap-3">
                        <button class="w-8 h-8 rounded-full bg-[#70ecfc] hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </button>
                        <button class="w-8 h-8 rounded-full bg-red-400 hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-500">
                        </button>
                        <button class="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
                        </button>
                        <button class="w-8 h-8 rounded-full bg-purple-700 hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                        </button>

                    </div>

                    <div className="w-full">
                        <button class="w-[150px] h-[30px] mt-4 bg-orange-400 text-white font-bold rounded">
                            Comprar
                        </button>
                    </div>


                </div>
            </div>
            <div className="w-ful items-center ms-20 ">
                <div className="w-1/2">
                    <div className="h-full w-[100%] flex">
                        <img src="Fotos\Group 53617.png" alt="" className="w-[200px] h-[100px] rounded-lg" />
                        <img src="Fotos\Group 53616.png" alt="" className="w-[200px] h-[100px] rounded-lg" />
                        <img src="Fotos\Group 53615.png" alt="" className="w-[200px] h-[100px] rounded-lg" />
                        <img src="Fotos\Group 53614.png" alt="" className="w-[200px] h-[100px] rounded-lg" />
                        <img src="Fotos\Group 53618.png" alt="" className="w-[200px] h-[100px] rounded-lg" />
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
}

import { LuShoppingCart } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
export default function Header() {
  return (
    <div className="flex flex-col justify-start pl-14 pt-9 gap-12">
        <div className="flex flex-items  gap-3">
            <div className="flex  ">
                <img
                className="w-9 rounded-lg"
                src="src\assets\img\logo.jpeg"
                alt="Logo da Digital Collage"
                title="Logo da Digital Collage"
                />
            </div>

            <div className="text-3xl text-[#C92071] font-bold">
                <h1>Digital Store</h1>
            </div>
            {/* flex gap-6 justify-center items-center pl-9 */}
            
            <div className="relative flex-1 p-1">
                <input
                className="bg-gray-100 rounded-md h-10 w-full"
                type="text"
                placeholder="Pesquisar produto..."/>

                <div className="absolute inset-y-0 right-0 pl-4 flex items-center pointer-events-none">
                <HiMiniMagnifyingGlass />
                </div>
            </div>
           

            <div className="flex justify-center items-center pl-10">
                <h2 className="underline">Cadastre-se</h2>
            </div>

            <button className="p-5 text-center rounded bg-[#C92071] text-white">Entrar</button>

            <div className="flex justify-center items-center pl-10">
                <LuShoppingCart />
            </div>
        </div>
      
      <div className="flex gap-10">
        <h2 className="text-[#474747] hover:text-[#C92071] hover:font-bold hover:underline">Home</h2>

        <h2 className="text-[#474747] hover:text-[#C92071] hover:font-bold hover:underline">Produtos</h2>

        <h2 className="text-[#474747] hover:text-[#C92071] hover:font-bold hover:underline">Categorias</h2>

        <h2 className="text-[#474747] hover:text-[#C92071] hover:font-bold hover:underline">Meus Pedidos</h2>
      </div>

      <div className="">

      </div>
    </div>
  );
}

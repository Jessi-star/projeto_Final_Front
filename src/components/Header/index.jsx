import { LuShoppingCart } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function Header() {
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
            <LuShoppingCart size={20}/>
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

      <div className="">

      </div>
    </div>
  );
}

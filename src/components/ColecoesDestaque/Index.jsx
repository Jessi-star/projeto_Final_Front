export default function ColecoesDestaque() {
    return (
        <div className="">
            <p className="font-bold text-[19px]">Coleções em destaque</p>

 
            <div className="border-solid flex p-[10px] w-[100%] ">
                <div className="w-[350px] h-[201px]  border-solid bg-[#D8E3F2] m-[10px] relative">
                    <p className="rounded-lg bg-[#E7FF86] w-[96px] h-[32px]">30% OFF</p>
                    <h1 className="w-[172px] h-[72px] font-black">Novo Drop Supreme</h1>
                    <button className="w-[153px] h-[48px] bg-[#F5F5F5] text-[#f823ff]">Comprar</button>
                    <img className="absolute inset-0 left-[2px] h-full w-[200px] justify-self-end object-cover" src="Fotos/Camisa.png" alt="Camisa" />
                </div>
                
                <div className="w-[350px] h-[201px] border-solid bg-[#D8E3F2] m-[10px] relative">
                    <p className="rounded-lg bg-[#E7FF86] w-[96px] h-[32px]">30% OFF</p>
                    <h1 className="w-[172px] h-[72px] font-black">Coleções Addidas</h1>
                    <button className="w-[153px] h-[48px] bg-[#F5F5F5] text-[#f823ff]">Comprar</button>
                    <img className="absolute inset-0 left-[2px] h-full w-[200px] justify-self-end object-cover" src="Fotos/Sapato.png" alt="Sapato" />
                </div>
                
                <div className="flex w-[350px] h-[200px] border-solid bg-[#D8E3F2] m-[10px] relative ">
                    <div className="w-[50%] border-solid"> 
                        <p className="rounded-lg bg-[#E7FF86] w-[96px] h-[32px]">30% OFF</p>
                        <h1 className="w-[184px] h-[72px] font-black">Novo Beats Bass</h1>
                        <button className="w-[153px] h-[48px] bg-[#F5F5F5] text-[#f823ff]">Comprar</button>
                    </div>
                    <div className="w-[50%] border-solid relative">
                        <img className="absolute inset-0 left-[2px] h-full object-cover" width="400px" src="Fotos/Fone de Ouvido.png" alt="Fone de Ouvido" />
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
            <p className="font-bold text-[19px]">Coleções em destaque</p>
            <div className="w-full flex items-center justify-center gap-8 mt-5">
                <div className="flex flex-col items-center justify-center">
                    <img src="Fotos/Camisetas.png" alt="Camisetas" />
                    <h1>Camisetas</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="Fotos/Calças.png" alt="Calças" />
                    <h2>Calças</h2>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="Fotos/Calças.png" alt="Bonés" />
                    <h3>Bonés</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="Fotos/Headphones.png" alt="Headphones" />
                    <h4>Headphones</h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="Fotos/Tênis.png" alt="Tênis" />
                    <h5>Tênis</h5>
                </div>
            </div>

        </div>
        </div>
    )
}
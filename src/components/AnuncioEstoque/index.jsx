export default function AnuncioEstoque() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="w-full flex px-[50px] pt-4">
                <div className="w-1/2 flex flex-col items-center justify-center">
                    <div className="flex flex-col ">
                        <h2 className="text-5x1 my-1 text-orange-400">Melhores ofertas personalizadas</h2>
                        <div className="break-all">
                            <p className="font-bold text-6xl my-3 ">Queima de <br></br> estoque Nike🔥</p>
                        </div>
                        <h1>Consequat culpa exercitaion mollit nisi excepteur do tempor</h1>
                        <h1>aboris eiusmod irure consecteur.</h1>
                        <button class="offer-button my-3 bg-[#C92071] hover:bg-[#973e69] text-white cursor-pointer rounded-sm pl-2 w-[200px]"  >Ver Ofertas</button>
                    </div>

                </div>
                <div className="ladoDireito w-1/2 flex items-start justify-start" >
                    <img src="src/assets/img/airjordan.png" className="mr-10" />
                </div>
            </div>

            <div className="indicadores w-full flex items-center justify-center gap-2">
                <div className=" h-3 w-3 rounded-full ponto ativo bg-[#C92071]"></div>
                <div className="h-3 w-3 rounded-full ponto bg-gray-500 cursor-pointer"></div>
                <div className="h-3 w-3 rounded-full ponto bg-gray-500 cursor-pointer"></div>
                <div className="h-3 w-3 rounded-full ponto bg-gray-500 cursor-pointer"></div>
            </div>
        </div>

    )
}
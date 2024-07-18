export default function AnuncioEstoque() {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="w-full flex p-4">
                <div className="w-1/2">
                    <h2 className="text-5x1 my-1 text-orange-400">Melhores ofertas personalizadas</h2>
                    <p className="font-bold text-4xl my-2">Queima de </p>
                    <p className="font-bold text-4xl my-2">estoque Nike🔥 </p>
                    <h1>Consequat culpa exercitaion mollit nisi excepteur do tempor</h1>
                    <h1>aboris eiusmod irure consecteur.</h1>
                    <button class="offer-button my-3">Ver Ofertas</button>
                </div>
                <div className="ladoDireito w-1/2">
                    <img src="src\image\jordan.png" width={300} />
                </div>
            </div>

            <div className="indicadores w-full flex items-center justify-center">
                <div className="ponto ativo"></div>
                <div className="ponto"></div>
                <div className="ponto"></div>
                <div className="ponto"></div>
            </div>
        </div>

    )
}
export default function OfertaEspecial() {
    return (
        <div className="flex flex-row h-screen items-center justify-center">
            <div className="w-1/2 h-full">
                <img className="flex  left-20 bottom-[120px] pl-20" src="src/assets/img/nike.png" width={500} />
            </div>
            <div className="w-1/2 h-full">
                
                <p class="font-bold text-sm text-pink-600 my-1">Oferta Especial</p>
                <div className="max-w-md">
                <p class="font-bold text-4xl break-all">Air Jordan edição de
                <br/> 
                colecionador</p>
                </div>
                <div className="max-w-md">
                    <p class="break-words text-sm my-3 break-all">Lorem ipsum dolor sit amet, consectetus adipiscing elit, 
                    sed do 
                    <br/>
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim
                    <br/> 
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    <br/> 
                    aliquip</p>
                </div>
                <button class="bg-pink-600 hover:bg-yellow-300 text-white font-bold py-1 px-11 rounded my-1"> Ver Oferta</button>
            </div>
        </div>

    )
}
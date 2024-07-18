export default function ColecoesDestaque() {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-10">
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
    )
}
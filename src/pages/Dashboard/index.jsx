import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AnuncioEstoque from "../../components/AnuncioEstoque";
import ColecoesDestaque from "../../components/ColecoesDestaque/Index";
import OfertaEspecial from "../../components/OfertaEspecial/Index";
import ProdutosAlta from "../../components/ProdutosAlta/Index";

export default function Dashboard (){
    return (
        <div className="w-full h-screen flex flex-col gap-5">
            <Header />
            <AnuncioEstoque /> 
            <ColecoesDestaque/>
            <ProdutosAlta/>
            <OfertaEspecial/> 

            <Footer />
        </div>
    )
}
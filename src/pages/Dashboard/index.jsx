import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AnuncioEstoque from "../../components/AnuncioEstoque";
import ColecoesDestaque from "../../components/ColecoesDestaque/Index";
import OfertaEspecial from "../../components/OfertaEspecial/Index";

export default function Dashboard (){
    return (
        <div >
            <Header />
            <h1 className="text-3xl font-bold underline">Olá </h1>
            <AnuncioEstoque /> 
            <ColecoesDestaque/>
            <OfertaEspecial/> 
            <Footer />
        </div>
    )
}
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AnuncioEstoque from "../../components/AnuncioEstoque";
import ColecoesDestaque from "../../components/ColecoesDestaque/Index";
import OfertaEspecial from "../../components/OfertaEspecial/Index";

export default function Dashboard (){
    return (
        <div >
            <Header />
            <h1 className="">.</h1>
            <AnuncioEstoque /> 
            <ColecoesDestaque/>
            <OfertaEspecial/> 
            <Footer />
        </div>
    )
}
import BtnAddTrasacao from "../common/buttons/BtnAddTransacao";
import InfoLayout from "./InfoLayout";

export default function PainelLayout (){
    return (
        <section className="flex flex-col gap-8 px-10 pt-5">
            <header className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Painel Geral e Extrato</h1>
                <BtnAddTrasacao/>
            </header>
            <section>
                <InfoLayout/>
            </section>
        </section>
        
    )
}
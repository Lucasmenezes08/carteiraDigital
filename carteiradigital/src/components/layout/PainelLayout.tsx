import BtnAddTrasacao from "../common/BtnAddTransacao";

export default function PainelLayout (){
    return (
        <header className="px-10 pt-5">
            <section className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Painel Geral e Extrato</h1>
                <BtnAddTrasacao/>
            </section>
        </header>
    )
}
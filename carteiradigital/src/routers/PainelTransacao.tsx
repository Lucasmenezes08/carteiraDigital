export default function PainelTransacao (){

    return (
        <section className="w-full h-screen flex flex-col items-center justify-start pt-5 gap-5 bg-gray-100">
            <h1 className="text-2xl font-bold">Adicionar Nova Transação</h1>
            <form className=" bg-white rounded-2xl p-5 shadow-2xs w-[35%]">
                <section className="grid grid-cols-2 gap-6">
                    <section className="flex flex-col gap-2">
                        <label>Valor</label>
                        <input type="text" placeholder="R$ 0,00" className={`border border-gray-100 rounded-sm outline p-2`}/>
                    </section>

                    <section>
                        <label></label>
                        //Adicionar componente TransacaoTipo
                    </section>

                    <section>
                        <label></label>
                        //Adicionar componente TransacaoCategoria
                    </section>

                    <section>
                        <label></label>
                        //Adicionar componente TransacaoData
                    </section>

                    <section className="flex flex-col col-span-2 gap-2">
                        <label>Descrição</label>
                        <input type="text" placeholder="Ex: Almoço com amigos" className={`border border-gray-100 rounded-sm outline p-2`}/>
                    </section>
                </section>

                <section>
                    //botão cancelar
                    //botão enviar
                </section>
            </form>
        </section>
    )
}
import { infoStyle } from "@/utils/textInfo"


export default function InfoEntradas (){
    return (
        <section className={infoStyle.container}>
            <p className={infoStyle.p}>Entradas (mês)</p>
            <p className={infoStyle.text.entradas}>+ R$ <span></span></p>
        </section>
    )
}
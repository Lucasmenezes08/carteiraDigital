import { infoStyle } from "@/utils/textInfo";

export default function InfoSaidas (){
    return (
        <section className={infoStyle.container}>
            <p className={infoStyle.p}>Saídas (mês)</p>
            <p className={infoStyle.text.saidas}>- R$ <span></span></p>
        </section>
    )
}
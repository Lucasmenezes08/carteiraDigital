import { infoStyle } from "@/utils/textInfo";

export default function InfoSaldo (){
    return (
        <section className={infoStyle.container}>
            <p className={infoStyle.p}>Saldo Atual</p>
            <p className={infoStyle.text.saldo}>R$ <span></span></p>
        </section>
    )
}
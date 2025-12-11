import InfoEntradas from "../common/info/InfoEntradas";
import InfoSaidas from "../common/info/InfoSaidas";
import InfoSaldo from "../common/info/infoSaldo";

export default function InfoLayout (){
    return (
        <section className=" w-full max-h-50 flex flex-row gap-8">
            <InfoSaldo/>
            <InfoEntradas/>
            <InfoSaidas/>
        </section>
    )
}
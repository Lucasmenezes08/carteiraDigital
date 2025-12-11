import BtnFilterAll from "./BtnFilterAll";
import BtnFilterEntrada from "./BtnFilterEntrada";
import BtnFilterSaida from "./BtnFilterSaida";

export default function FilterGroup (){
    return (
        <section className="min-w-[40%] h-10 flex flex-row items-center justify-center gap-5 bg-gray-200 rounded-lg p-1">
            <BtnFilterAll/>
            <BtnFilterEntrada/>
            <BtnFilterSaida/>
        </section>
    )
}
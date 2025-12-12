import { useFilter } from "@/store/useFilter";
import BtnFilterAll from "./BtnFilterAll";
import BtnFilterEntrada from "./BtnFilterEntrada";
import BtnFilterSaida from "./BtnFilterSaida";

export default function FilterGroup (){

    const {filterType , setFilterActive} = useFilter();

    return (
        <section className="min-w-[40%] h-10 flex flex-row items-center justify-center gap-5 bg-gray-200 rounded-lg p-1 transition">
            <BtnFilterAll active={filterType === 'todos'} setFilter={() => setFilterActive('todos')}/>
            <BtnFilterEntrada active={filterType === 'entradas'} setFilter={() => setFilterActive('entradas')}/>
            <BtnFilterSaida active={filterType === 'saidas'} setFilter={() => setFilterActive('saidas')}/>
        </section>
    )
}
import { textFilter } from "@/utils/textFilter";

export default function BtnFilterEntrada (){
    return ( 
        <button className={`${textFilter.normal}`}>
            Entradas
        </button>
    )
}
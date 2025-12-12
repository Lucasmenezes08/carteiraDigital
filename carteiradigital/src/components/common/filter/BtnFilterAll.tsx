import { textFilter } from "@/utils/textFilter";

export default function BtnFilterAll ({active , setFilter}:any){
    return ( 
        <button onClick={setFilter} className={`${active ? textFilter.active : textFilter.normal} ${active ? 'hover:bg-gray-100' : 'hover:bg-gray-300'} transition-colors duration-200`}>
            Todos
        </button>
    )
}
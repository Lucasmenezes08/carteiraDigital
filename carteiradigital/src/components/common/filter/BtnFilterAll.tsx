import { textFilter } from "@/utils/textFilter";

export default function BtnFilterAll (){
    return ( 
        <button className={`${textFilter.normal} hover:bg-gray-300`}>
            Todos
        </button>
    )
}
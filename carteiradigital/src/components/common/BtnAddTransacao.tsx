export default function BtnAddTrasacao (){
    return (
        <button className="flex flex-row justify-center items-center gap-1 bg-blue-600 text-white py-1 px-3 rounded-lg cursor-pointer hover:bg-blue-800">
            <span className="text-xl">+</span><span className="text-sm">Adicionar Transação</span>
        </button>
    )
}
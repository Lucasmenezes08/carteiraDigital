import {create} from 'zustand';
import {persist} from 'zustand/middleware'

interface Filter {
    filterType : 'todos' | 'entradas' | 'saidas';
    setFilterActive: (filter: 'todos' | 'entradas' | 'saidas') => void; 
}


export const useFilter = create<Filter>()(
    persist(
        (set) => ({
            filterType: 'todos',
            setFilterActive: (filter) => set({filterType : filter}),
        }),
        {name : 'filter-selected'}
    )
)
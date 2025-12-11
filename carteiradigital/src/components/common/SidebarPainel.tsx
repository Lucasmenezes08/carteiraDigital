import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { MdDashboard } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";



const items = [
    {
        nome: 'Painel Geral',
        url: '/',
        icon: <MdDashboard/>,
    },

    {
        nome: 'Relatórios',
        url: '/relatorios',
        icon: <IoStatsChart />,
    },

    {

    }
]


export default function SidebarPainel (){
    return (
        <Sidebar variant="sidebar" collapsible="icon">
            <SidebarContent className="bg-white">
                <SidebarGroup className="gap-6 pt-7">
                    <SidebarGroupLabel>
                        <section className="flex flex-row items-center justify-center gap-4">
                            <FaWallet className="text-2xl text-blue-700"/>
                            <p className={`text-xl font-semibold text-black text-shadow-2xs`}>Carteira</p>
                        </section>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                items.map((item) => (
                                    <SidebarMenuItem key={item.nome} className="">
                                        <SidebarMenuButton asChild>
                                            <a href={item.url} className={`w-full py-6 text-gray-700 flex items-center`}>
                                                <section className="text-xl">{item.icon}</section>
                                                <span className="text-md font-medium">{item.nome}</span>
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
    
}
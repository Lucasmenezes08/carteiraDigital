import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarPainel from "../common/SidebarPainel"





export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <SidebarPainel/>
      <main className="w-full h-screen">
        <SidebarTrigger/>
        {children}
      </main>
    </SidebarProvider>
  )
}
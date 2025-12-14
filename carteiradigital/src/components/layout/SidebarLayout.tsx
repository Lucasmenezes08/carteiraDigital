import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import SidebarPainel from "../common/SidebarPainel"





export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <SidebarPainel/>
      <main className="font-sans antialiased w-full h-screen bg-gray-100">
        <SidebarTrigger/>
        {children}
      </main>
    </SidebarProvider>
  )
}
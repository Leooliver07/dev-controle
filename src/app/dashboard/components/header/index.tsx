import { Container } from "@/components/container"
import Link from "next/link"

export function DashboardHeader(){
  return(
    <Container>
      <header className="w-full max-w-7xl bg-gray-900 py-3 rounded-lg text-white flex items-center gap-6 px-6 mx-auto">
        <Link href="/dashboard" className="hover:font-bold duration-300">
          Chamados 
        </Link>
       <Link href="/dashboard/customer" className="hover:font-bold duration-300">
        Clientes 
       </Link> 
      </header>
    </Container>
  )
}
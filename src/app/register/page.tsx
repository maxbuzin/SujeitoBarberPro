import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Crie sua conta no Barber Pro',
    description: 'Barber Pro - Sujeito Programador',
}

export default function Register() {
    return (
        <main className="flex w-full min-h-screen flex-col items-center justify-center bg-gray-900 text-gray-50">

            <form className="w-[355px] mb-24 flex flex-col gap-4 rounded-md items-center">
                <Image src="/img/logo.svg" alt="logo Barber Pro" width={250} height={100} quality={100} />
                <input type="text" placeholder="Digite o nome da barbearia" className="w-full mt-4 py-2 px-4 rounded-md bg-gray-800" />
                <input type="text" placeholder="Digite seu email" className="w-full py-2 px-4 rounded-md bg-gray-800" />
                <input type="password" placeholder="Digite sua senha" className="w-full py-2 px-4 rounded-md bg-gray-800" />
                <input type="button" value="Cadastrar" className="w-full mt-2 py-2 px-4 text-gray-900 bg-amber-500 hover:bg-amber-400 rounded-md font-semibold" />
                <Link href={"/login"} className="mt-4">Já tenho conta. Entrar</Link>
            </form>

        </main>
    )
}


import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Prueba Libros-MIDU',
  description: 'Prueba tecnica de MiduDev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <main className='grid min-h-screen grid-rows-[50px,1fr,100px] gap-4 m-auto max-w-lg px-4'>
       
          <section >{children}</section>
          <footer className='flex items-center justify-center'></footer>
        </main>
      </body>
    </html>
  )
}

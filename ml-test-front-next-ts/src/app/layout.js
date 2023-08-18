import './globals.css'


export const metadata = {
  title: 'Challen-Libre',
  description: 'Challenge FrontEnd',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header className="h-16 bg-yellow-300 px-4 flex">
        <form action='/items' className='m-auto max-w-screen-xl flex flex-1 gap-4'>
          <input type="text" name="search" placeholder="Buscar producto" className="input input-bordered input-md w-full max-w-xs text-white px-4"/>
          <button className="bg-gray-300 px-2 py-1 text-slate-700 h-11" type='submit'>Buscar</button>
        </form>
      </header>
      <main className='max-w-screen-xl p-4'>{children}</main>
      </body>
    </html>
  )
}

/* eslint-disable @next/next/no-img-element */
"use client"

import libros  from "@/app/libros.json"
import { useMemo, useState } from "react"

/* 
  * * Diseño: 
  * Para generar una grilla se uso en el display GRID las propiedades auto-fill un minimo de 220px con un  maximo de 1fr
  * Con las imagenes para que tengan el mismo tamaño se uso aspect en 9/14 y la propiedad object-cover (esto puede provocar que se pierda algun aspecto visual de 
  * la imagen)
  * * INFORMACION:
  * Los datos se encuentran en un JSON llamado libros.json, creamos la interface de typescript y 
  * con una importacion podemos acceder a los mismos
  * * USESTATE: 
    * Usamos un useState para guardar el estado del valor de las opciones del select que son los generos de
    * los libros. A cada cambio se guardará la opción elegida. Ponemos un value en el select para indicar el
    * cambio de genero.
  * * GENEROS:
  * Utilizando el array de books, creamos un nuevo array (Array.from) generados con un SET que evita la
  * repeticion de elementos. Cargamos este SET recorriendo el array de libros y guardando su elemento genero.
  * * USEMEMO:
  * Por cada cambio de genre aplicamos el filtro que nos muestra los libros de ese genero. Si no hay genero
  * retorna el array de libros completo.
  * * READLIST:
  
*/
export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: {
    name: string
    otherBooks: string[]
  }
}

const books:Book[] = libros.library.map((libros)=> libros.book)
const genres:string[] = Array.from(new Set (books.map((libros)=> libros.genre)))


export default function Home() {

  const[genre, setGenre] = useState<string>("")
  const[readList, setReadList] = useState<Book["ISBN"][]>([])

  function addReadList(book: Book["ISBN"]){
   setReadList( (readList) => readList.includes(book)? 
    readList.filter(readBook => readBook !== book)
   : [...readList,book])
    console.log(readList)
  }

  const matches = useMemo(()=>{
    if (!genre) return books;

    return books.filter((book) => {
      if (book.genre !== genre) return false
      return true
    })

  }, [genre])
  
  return (
    <section>
      <nav className='flex items-center text-2xl'>
            <select value={genre} onChange={(event) => setGenre(event.target.value)}>
              {genres.map( (genre) => 
                <option value={genre} key={genre}>{genre}</option>
              )

              }
            </select>
    </nav>
    
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3">
      {matches.map( (book) =>(
        <div key={book.ISBN} className="flex items-center flex-col"> 
          <img className="aspect-[9/14] object-cover" src={book.cover} alt={book.title} />
          <h2>
            {readList.includes(book.ISBN)?"❤️":"🖤"}
          </h2>
          <h2>
            {book.title}
          </h2>
          <button onClick={()=>{addReadList(book.ISBN)}}>Agregar a la lista</button>
        </div>
        ))}
    </div>
   
      </section>
  )
}

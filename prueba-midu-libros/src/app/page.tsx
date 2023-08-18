/* eslint-disable @next/next/no-img-element */
`use client`

import libros  from "@/app/libros.json"

/* 
  * * Diseño: 
  * Para generar una grilla se uso en el display GRID las propiedades auto-fill un minimo de 220px con un  maximo de 1fr
  * Con las imagenes para que tengan el mismo tamaño se uso aspect en 9/14 y la propiedad object-cover (esto puede provocar que se pierda algun aspecto visual de 
  * la imagen)
  * * INFORMACION:
  * Los datos se encuentran en un JSON llamado libros.json, creamos la interface de typescript y con una importacion podemos acceder a los mismos

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


export default function Home() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-3">
      {books.map( (book) =>(
        <div key={book.ISBN}> 
          <img className="aspect-[9/14] object-cover" src={book.cover} alt={book.title} />
          <h2>{book.title} </h2>
        </div>))}
    </div>
  )
}

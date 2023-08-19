import { useState } from "react"

/*
* * USESTATE: 
    * Usamos un useState para guardar el estado del valor de las opciones del select que son los generos de
    * los libros. A cada cambio se guardará la opción elegida. Ponemos un value en el select para indicar el
    * cambio de genero.

*/

export default function Nav() {
    const[genre, setGenre] = useState<string>("") 

  return (
    <nav className='flex items-center text-2xl'>
            <select value={genre} onChange={(event) => setGenre(event.target.value)}>
              <option value="">Todos</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Ciencia ficción">Ciencia ficción</option>
              <option value="Terror">Terror</option>
              <option value="Zombies">Zombies</option>
            </select>
    </nav>
  )
}
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from './Card'

interface pokemonProps {
  name: string
  url: string
}

export const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [currentPage, setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextPage, setNextPage] = useState('')
  const [previousPage, setPreviousPage] = useState('')

  useEffect(() => {
    axios.get(currentPage)
      .then((response) => {
        setPokemons(response.data.results)
        setNextPage(response.data.next)
        setPreviousPage(response.data.previous)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [currentPage])

  return (
    <div className="w-screen h-screen">
      <header className="w-full h-14 bg-sky-500 flex justify-center items-center">
        <h1 className="text-zinc-100 text-2xl font-medium">
          Poke API
        </h1>
      </header>

      <main className="max-w-3xl mx-auto my-4 grid grid-cols-4 gap-2">
        { pokemons.map((pokemon: pokemonProps) => (
          <Card key={pokemon.name} name={pokemon.name} />
        )) }
      </main>

      <footer className="max-w-3xl mx-auto flex justify-between gap-2">
        <button
          className="p-2 bg-sky-500 text-zinc-100 text-lg rounded-sm hover:bg-sky-600"
          onClick={() => setCurrentPage(previousPage)}
        >
          Anterior
        </button>
        <button
          className="p-2 bg-sky-500 text-zinc-100 text-lg rounded-sm hover:bg-sky-600"
          onClick={() => setCurrentPage(nextPage)}
        >
          Próxima
        </button>
      </footer>
    </div>
  )
}

import { useState, useEffect } from "react";
import CartaItem from "./components/CartaItem";
import Navbar from "./components/Navbar";
import axios from "axios";

export default function Dashboard() {
  const [peliculas, setPeliculas] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const fecthPeliculas = async (busqueda) => {
    const tipo = busqueda ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${import.meta.env.VITE_API_URL}/${tipo}/movie`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        query: busqueda,
      },
    });
    setPeliculas(results);
  };

  const buscarPelicula = (e) => {
    e.preventDefault();
    fecthPeliculas(busqueda);
    if (peliculas.length === 0) {
      setError(true);
    } else {
      setError(true);
    }
    e.target.reset();
  };

  useEffect(() => {
    fecthPeliculas();
  }, []);

  return (
    <main className="pb-5" style={{ backgroundColor: "#000000" }}>
      <Navbar home={true} submit={buscarPelicula} buscar={setBusqueda}></Navbar>
      <div className="container p-4">
        <div className="row">
          {peliculas.map((pelicula) => (
            <div className="p-3 col-sm-6 col-md-4 col-lg-3">
              <CartaItem key={pelicula.id} item={pelicula}></CartaItem>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

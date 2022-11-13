import React from "react";

export default function ErrorPeliculas({ error }) {
  return (
    <div className="container">
      <h1 className="text-white">ERROR</h1>
      <h2 className="text-white">No se encontro ninguna pelicula relacionada con: </h2>
      <h2 className="text-white">"{error}"</h2>
    </div>
  );
}

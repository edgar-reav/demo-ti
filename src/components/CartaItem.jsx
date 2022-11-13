export default function CartaItem({ item }) {
  const imagen = item.poster_path ? import.meta.env.VITE_API_IMAGE_URL + item.poster_path : "./images/null_imagen.png";
  return (
    <div className="card" style={{ height: "600px" }}>
      <img src={imagen} className="card-img-top" alt={item.original_title} height="400" />
      <div className="card-body">
        <h4 className="card-title">{item.title}</h4>
        <h6 className="card-text">{"Id: " + item.id}</h6>
        <h6 className="card-text">{"Fecha: " + item.release_date}</h6>
        <h6 className="card-text">{"Popularidad: " + item.popularity}</h6>
      </div>
    </div>
  );
}

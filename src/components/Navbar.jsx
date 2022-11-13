export default function Navbar({ home, submit, buscar }) {
  if (!home) {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark py-5 px-2 mb-4">
        <div className="container p-0 d-flex justify-content-center justify-content-sm-start">
          <a className="navbar-brand p-0 m-0" href="/">
            <img src="./images/Netflix_logo.png" width="200" height="70" />
          </a>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar navbar-expand-md p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="./images/Netflix_logo.png" width="100" height="30" />
        </a>
        <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">Serie TV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white">Film</a>
            </li>
          </ul>
          <form onSubmit={submit} className="d-flex col-sm-6" role="search">
            <input onChange={(e) => buscar(e.target.value)} className="form-control me-2" type="search" placeholder="Escribe el nombre de la pelicula...." aria-label="Search" />
            <button className="btn btn-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

import { useState } from "react";


function handleFilmCardClick(event: React.MouseEvent<HTMLDivElement>){
  var obj = event.currentTarget;
  const movie = obj.querySelector(".card-title")?.textContent;
  console.log(`Wybrano film: ${movie}`);
}
function handleDetailsClick(event: React.MouseEvent<HTMLButtonElement>){
  event.stopPropagation();
  var obj = event.currentTarget.parentElement?.parentElement;
  const movie = obj.querySelector(".card-title")?.textContent;
  console.log(`Pokaż szczegóły dla ${movie}`);
}
function searchInMovies(event: React.MouseEvent<HTMLInputElement>, superSecretFunction: Function){
  const target = event.currentTarget.value;
  superSecretFunction(target); //we do a little trolling
  console.log(target);
}
/**
 * Props dla filmu.
 */
export interface PropsMovie {
  /**
   * Źródło okładki, linkuj albo drogę do pliku lokalnego albo zdjęcia online
   */
  cover_source: string;
  /**
   * Nazwa filmu
   */
  name: string;
  /**
   * Rok wydania
   */
  release_year: number;
  rating: 1|2|3|4|5|6|7|8|9|10; //very beautiful
}
function Movie(props: PropsMovie) {
  return (
    <div className="card h-100" onClick={handleFilmCardClick}>
      <img className="card-img-top" src={props.cover_source}></img>
      <h2 className="card-title">{props.name}</h2>
      <div className="card-body">
      <p>Wydane w {props.release_year}</p>
      <button onClick={handleDetailsClick}>Pokaż szczegóły</button>
      <p>Ocena {props.rating}/10</p>
      {props.rating >= 8 && <p className="special_label">Polecane</p>}
      </div>
    </div>
  );
}

interface PropsMovies{
    /**
     * LISTA FILMÓW ZOBACZ {@link PropsMovie}
     */
    ListOfMovies: PropsMovie[];
    /**
     * Waow bardzo modularne
     */
    filterYear?: number;
}
export default function Movies(props: PropsMovies){
    const [isOpen, setIsOpen] = useState(true);
      const [currentFilter, setFilter] = useState('');
    var moviesSorted = [...props.ListOfMovies].sort((a, b) => a.name.localeCompare(b.name));
    /**
     * '[kolejne listy] wyświetlającą tylko filmy wydane po 2010 roku' więc uznaję że w poprzedniej liscie trzeba wszystko
     */
    var filtered = false;
    if(props.filterYear !== undefined){
      moviesSorted = props.ListOfMovies.filter((movie) => movie.release_year > props.filterYear);
      filtered = true;
    }
    if(currentFilter != ''){
      moviesSorted = props.ListOfMovies.filter((movie) => movie.name.toLowerCase().includes(currentFilter.toLowerCase()));
    }
    return (
    <div>
        <h2>Filmy {filtered && `po ${props.filterYear}`} <span className='visibility_toggler' onClick={() => setIsOpen(!isOpen)}> {isOpen ? '▾' : '▸'} </span></h2>
        {isOpen && <input type='text' className="form-control" placeholder="Wpisz nazwę szukanej" onChange={(e) => searchInMovies(e, setFilter)}/>}
        {isOpen && <p>{currentFilter}</p>}
        {isOpen && moviesSorted.length > 0 ? 
        <div className='container'>
          <div className="row g-2">
            {moviesSorted.map((element) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Movie {...element}/>
              </div>
            ))}
          </div>
        </div>
        : <p className="alert alert-info">Brak filmów spełniających kondycje wyszukiwania.</p> }
    </div>
    )
}

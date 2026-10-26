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
    <div className="entryContainer">
      <img src={props.cover_source}></img>
      <h2>{props.name}</h2>
      <p>Wydane w {props.release_year}</p>
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
    var moviesSorted = props.ListOfMovies.sort((a, b) => (a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0));
    /**
     * '[kolejne listy] wyświetlającą tylko filmy wydane po 2010 roku' więc uznaję że w poprzedniej liscie trzeba wszystko
     */
    var filtered = false;
    if(props.filterYear !== undefined){
    moviesSorted = props.ListOfMovies.filter((movie) => movie.release_year > props.filterYear);
      filtered = true;
    }
    return (
    <div>
        <h2>Filmy {filtered && `po ${props.filterYear}`}</h2>
        <div className='contentContainer'>
        {props.ListOfMovies.map((element) => (
            <Movie {...element}/>
        ))}
        </div>
    </div>
    )
}

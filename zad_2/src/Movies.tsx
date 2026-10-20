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
}
export default function Movies(props: PropsMovies){
    props.ListOfMovies.sort((a, b) => (a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0));

    /**
     * '[kolejne listy] wyświetlającą tylko filmy wydane po 2010 roku' więc uznaję że w poprzedniej liscie trzeba wszystko
     */
    const moviesPost2010 = props.ListOfMovies.filter((movie) => movie.release_year > 2010);
    return (
    <div>
        <h2>Filmy</h2>
        <div className='contentContainer'>
        {props.ListOfMovies.map((element) => (
            <Movie cover_source={element.cover_source} name={element.name} release_year={element.release_year} rating={element.rating}/>
        ))}
        </div>
    </div>
    )
}

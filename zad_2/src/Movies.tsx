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

export default function Movies({children}){
    return (
    <div>
        <h2>Filmy</h2>

    </div>


    )
}

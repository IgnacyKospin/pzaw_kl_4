/**
 * Props dla książek
 */
export interface PropsBook {
  /**
   * Źródło okładki, linkuj albo drogę do pliku lokalnego albo zdjęcia online
   */
  cover_source: string;
  /**
   * Tytuł
   */
  name: string;
  /**
   * Jakkolwiek nazywa się autor
   */
  author_name: string;

  /**
   * Rok wydania
   */
  release_year: number;
  /**
   * Ileż ma stron
   */
  page_amount: number;
}
function BookEntry(props: PropsBook){
  return (
    <div className="entryContainer">
      <img src={props.cover_source}></img>
      <h2>{props.name}</h2>
      <h3>Autorstwa {props.author_name}</h3>
      <p>Wydane w {props.release_year}</p>
      <p>{props.page_amount} stron</p>
    </div>
  );
}
interface PropsBooks{
    listOfBooks: PropsBook[]
}
export default function Books(props: PropsBooks){
    return (
        <div className="contentContainer">
            {props.listOfBooks.map((element) => (
                <BookEntry {...element}/>
            ))}
        </div>
    )
}
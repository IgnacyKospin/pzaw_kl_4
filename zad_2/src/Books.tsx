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
    listOfBooks: PropsBook[];
    /**
     * czy sortowac po roku wydania
     */
    sorted?: boolean;
}
export default function Books(props: PropsBooks){
    const books = props.sorted ? props.listOfBooks.sort((a, b) => (a.release_year < b.release_year ? 1 : b.release_year < a.release_year ? -1 : 0)): props.listOfBooks;
    return (
        <div>
            <h2>Książki {props.sorted && "posortowane"}</h2>
            <div className="contentContainer">
            {books.map((element) => (
                <BookEntry {...element}/>
            ))}
            </div>
        </div>
    )
}
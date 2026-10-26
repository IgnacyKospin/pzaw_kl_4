import { useState } from "react";
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
            {props.release_year <= 2000 && <p className="special_label">Klasyk</p>}
    </div>
  );
}
interface PropsBooks{
    listOfBooks: PropsBook[];
    /**
     * czy sortowac po roku wydania
     */
    sortedByReleaseYear?: boolean;
}
export default function Books(props: PropsBooks){
    const [isOpen, setIsOpen] = useState(true);
    const books = props.sortedByReleaseYear ? [...props.listOfBooks].sort((b,a) => (a.release_year - b.release_year)): [...props.listOfBooks].sort((a,b) =>a.name.localeCompare(b.name));
    return (
        <div>
            <h2>Książki {props.sortedByReleaseYear && "posortowane"} <span className='visibility_toggler' onClick={() => setIsOpen(!isOpen)}> {isOpen ? '▾' : '▸'} </span></h2>
            {isOpen &&
            <div className="contentContainer">
            {books.map((element) => (
                <BookEntry {...element}/>
            ))}
            </div>
}
        </div>
    )
}
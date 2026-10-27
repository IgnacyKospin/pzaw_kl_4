import { useState } from "react";
function searchInBooks(event: React.MouseEvent<HTMLInputElement>, superSecretFunction: Function){
  const target = event.currentTarget.value;
  superSecretFunction(target); //we do a little trolling
  console.log(target);
}
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
    <div className="card h-100">
      <img className="card-img-top" src={props.cover_source}></img>
      <h2 className="card-title">{props.name}</h2>
      <div className="card-body">
      <h3>Autorstwa {props.author_name}</h3>
      <p>Wydane w {props.release_year}</p>
      <p>{props.page_amount} stron</p>
            {props.release_year <= 2000 && <p className="special_label">Klasyk</p>}
      </div>
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
    const [currentFilter, setFilter] = useState('');
    const books = props.sortedByReleaseYear ? [...props.listOfBooks].sort((b,a) => (a.release_year - b.release_year)): [...props.listOfBooks].sort((a,b) =>a.name.localeCompare(b.name));
    return (
        <div>
            <h2>Książki {props.sortedByReleaseYear && "posortowane"} <span className='visibility_toggler' onClick={() => setIsOpen(!isOpen)}> {isOpen ? '▾' : '▸'} </span></h2>
            {isOpen && <input type='text' className="form-control" placeholder="Wpisz nazwę szukanej" onChange={(e) => searchInBooks(e, setFilter)}/>}
            {isOpen && <p>{currentFilter}</p>}
            {isOpen &&
            <div className="container">
              <div className="row g-3">
              {books.map((element) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <BookEntry {...element}/>
                </div>
              ))}
              </div>
            </div>
}
        </div>
    )
}
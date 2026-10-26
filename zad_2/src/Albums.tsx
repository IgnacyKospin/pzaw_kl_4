import { useState } from "react";


/**
 * Propsy dla indywidualnych piosenek, do użytku w elemencie Album
 */
interface PropsSong{
  /**
   * Nazwa piosenki
   */
  song_name: string;
  /**
   * Długość w sekundach
   */
  song_length: number;
}
function SongEntry(props: PropsSong){
  return (
    <tr><td>{props.song_name}</td><td>{props.song_length}</td></tr>
  );
}
/**
 * Props dla Albumu.
 */
export interface PropsAlbum{
  /**
   * Źródło okładki, linkuj albo drogę do pliku lokalnego albo zdjęcia online
   */
  cover_source: string;

  /**
   * nazwa albumu
   */
  album_name: string;

  /**
   * nazwa autora
   */
  author_name: string;

  /**
   * gatunek
   */
  genre: string;

  /**
   * data wydania (rok)
   */
  release_year: number;

  /**
   * array piosenek zawartych,
   * zobacz {@link PropsSong}
   */
  songs:PropsSong[]
}
function AlbumEntry(props: PropsAlbum){

  return (
    <div className="card">
      <img className="card-img-top" src={props.cover_source}></img>
      <h2 className="card-title">{props.album_name}</h2>
      <div className="card-body">
        <h3>Autor(zy): {props.author_name}</h3>
        <p>Gatunek: {props.genre}</p>
        <p>Wydane w {props.release_year}</p>
        <h3>Utwory:</h3>
        { props.songs.length > 0 ?
        <table className="table table-striped">
          <thead><th>Nazwa piosenki</th><th>Czas trwania (w sekundach)</th></thead>
          <tbody>
          {
          props.songs.map((element) => (
            <SongEntry {...element} />
          ))
          }
          </tbody>
        </table>
        : <p className="alert alert-info">Brak utworów.</p>
        }
      </div>
    </div>
  );
}

interface PropsAlbums{
    listOfAlbums: PropsAlbum[];
    /**
     * ile top [x] albumów według piosenek powinno pokazać? brak oznacza brak filtrowania.
     */
    showHowManyAlbumsByMostSongs?: number;
}
export default function Albums(props: PropsAlbums){
  const [isOpen, setIsOpen] = useState(true);
  var albums = [...props.listOfAlbums].sort((a,b) => a.album_name.localeCompare(b.album_name));
  if(props.showHowManyAlbumsByMostSongs){
    albums = albums.sort((a, b) => (a.songs.length < b.songs.length ? 1 : b.songs.length < a.songs.length ? -1 : 0));
    albums = albums.slice(0, props.showHowManyAlbumsByMostSongs);
  }
    return (
      <div className="container">
        <h2>{props.showHowManyAlbumsByMostSongs && `Top ${props.showHowManyAlbumsByMostSongs} według liczby piosenek`} Albumy <span className='visibility_toggler' onClick={() => setIsOpen(!isOpen)}> {isOpen ? '▾' : '▸'} </span></h2>
        {isOpen && 
        <div className="row g-4">
            {albums.map((element) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <AlbumEntry {...element} />
              </div>
            ))}
        </div>
        }
      </div>
    )
}
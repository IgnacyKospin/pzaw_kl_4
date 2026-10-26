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
    <li><span>{props.song_name}</span> -- <span>{props.song_length}</span></li>
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
    <div className="entryContainer">
      <img src={props.cover_source}></img>
      <h2>{props.album_name}</h2>
      <h3>Autor(zy): {props.author_name}</h3>
      <p>Gatunek: {props.genre}</p>
      <p>Wydane w {props.release_year}</p>
      <h3>Utwory:</h3>
      { props.songs.length > 0 ?
      <ul>
        {
        props.songs.map((element) => (
          <SongEntry {...element} />
        ))
        }
      </ul>
      : <p>Brak utworów.</p>
      }
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
  var albums = props.listOfAlbums;
  if(props.showHowManyAlbumsByMostSongs){
    albums = albums.sort((a, b) => (a.songs.length < b.songs.length ? 1 : b.songs.length < a.songs.length ? -1 : 0));
    albums = albums.slice(0, props.showHowManyAlbumsByMostSongs);
  }
    return (
      <div>
        <h2>{props.showHowManyAlbumsByMostSongs && `Top ${props.showHowManyAlbumsByMostSongs} według liczby piosenek`} Albumy <span className='visibility_toggler' onClick={() => setIsOpen(!isOpen)}> {isOpen ? '▾' : '▸'} </span></h2>
        {isOpen && 
        <div className="contentContainer">
            {albums.map((element) => (
                <AlbumEntry {...element} />
            ))}
        </div>
        }
      </div>
    )
}
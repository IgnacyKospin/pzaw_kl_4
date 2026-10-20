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
      <ul>
        {
        props.songs.map((element) => (
          <SongEntry song_name = {element.song_name} song_length={element.song_length} />
        ))
        }
      </ul>
    </div>
  );
}

interface PropsAlbums{
    listOfAlbums: PropsAlbum[];
}
export default function Albums(props: PropsAlbums){
    return (
        <div className="contentContainer">
            {props.listOfAlbums.map((element) => (
                <AlbumEntry cover_source={element.cover_source} album_name={element.album_name} author_name={element.author_name} genre={element.genre} release_year={element.release_year} songs={element.songs} />
            ))}
        </div>

    )
}
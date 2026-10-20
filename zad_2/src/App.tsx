

import Movies, { type PropsMovie } from './Movies';

/**
 * Props dla książek
 */
interface PropsBook {
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
interface PropsAlbum{
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

var moviesList: PropsMovie[] = [
  {
    cover_source:"https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg",
    name:"Morbius",
    release_year:2022
  }
];
function App(){
  return (
    <div className='superContainer'>
      <Movies ListOfMovies={moviesList}/>
      <h1>Książki</h1>
      <div className='contentContainer'>
        <BookEntry name="Czwarty Jeździec Apokalipsy" author_name='V. Ropshin (Borys Savinkov)' cover_source="src\assets\content-source\pale_horse_savinkov.png" release_year={Number("1909")} page_amount={Number("199")}/>
        <BookEntry name="1984" author_name='Jorjor Wel' cover_source="https://upload.wikimedia.org/wikipedia/commons/5/51/1984_first_edition_cover.jpg" release_year={Number("1949")} page_amount={Number("328")}/>
        <BookEntry name="Proces" author_name='Franz Kafka' cover_source="https://upload.wikimedia.org/wikipedia/commons/f/f9/TrialKafka.jpg" release_year={Number("1925")} page_amount={Number("128")}/>
      </div>
      <h1>Albumy</h1>
      <div className='contentContainer'>
        <AlbumEntry album_name='The Chocolate Wheelchair Album' cover_source="src\assets\content-source\venetian_snares_chocolate_wheelchair.png"  author_name='Venetian Snares' genre='Breakcore/IDM' release_year={Number("2003")} 
        songs={
          [
            {song_name:"Marty's Tardis", song_length:557}, 
            {song_name:"Abomination Street", song_length:262},
            {song_name:"Epidermis", song_length: 282}
          ]
        } />
        <AlbumEntry album_name='Kryzys' cover_source="src\assets\content-source\hanba_kryzys.png"  author_name='Hańba!' genre='Folk miejski/punk rock' release_year={Number("2023")} 
        songs={
          [
            {song_name:"Zagłębie Dąbrowskie", song_length:175}, 
            {song_name:"Czerwone i Czarne", song_length:208},
            {song_name:"Przemsza", song_length: 155}
          ]
        } />
       </div>
    </div>

  );
}

export default App





interface PropsMovie {
  name: string;
  img_source: string;
  release_year: number;
}
function Movie(props: PropsMovie) {
  return (
    <div className="entryContainer">
      <img src={props.img_source}></img>
      <h2>{props.name}</h2>
      <p>Wydane w {props.release_year}</p>
    </div>
  );
}
interface PropsBook {
  cover_source: string;
  name: string;
  author_name: string;
  release_year: number;
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
interface PropsAlbum{
  cover_source: string;
  album_name: string;
  author_name: string;
  genre: string;
  release_year: number;
  songs:{song_name: string, song_length_seconds: number }[]
}
function AlbumEntry(props: PropsAlbum){
  const songs = props.songs.map((element) => (
    <li>
      {element.song_name} -- {element.song_length_seconds}
    </li>
  ));
  return (
    <div className="entryContainer">
      <img src={props.cover_source}></img>
      <h2>{props.album_name}</h2>
      <h3>Autor(zy): {props.author_name}</h3>
      <p>Gatunek: {props.genre}</p>
      <p>Wydane w {props.release_year}</p>
      <p>Utwory:</p>
      <ul>
        {songs}
      </ul>
    </div>
  );
}
function App(){
  return (
    <div className='superContainer'>
      <h1>Filmy</h1>
      <div className='contentContainer'>
        <Movie name="Morbius" img_source="https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg" release_year={Number("2022")} />
        <Movie name="Sharknado" img_source="https://upload.wikimedia.org/wikipedia/en/9/93/Sharknado_poster.jpg" release_year={Number("2013")} />
        <Movie name="Lavalantula" img_source="https://upload.wikimedia.org/wikipedia/en/d/d6/Lavalantula.jpg" release_year={Number("2015")} />
      </div>
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
            {song_name:"Marty's Tardis", song_length_seconds:557}, 
            {song_name:"Abomination Street", song_length_seconds:262},
            {song_name:"Epidermis", song_length_seconds: 282}
          ]
        } />
        <AlbumEntry album_name='Kryzys' cover_source="src\assets\content-source\hanba_kryzys.png"  author_name='Hańba!' genre='Folk miejski/punk rock' release_year={Number("2023")} 
        songs={
          [
            {song_name:"Zagłębie Dąbrowskie", song_length_seconds:175}, 
            {song_name:"Czerwone i Czarne", song_length_seconds:208},
            {song_name:"Przemsza", song_length_seconds: 155}
          ]
        } />
       </div>
    </div>

  );
}

export default App

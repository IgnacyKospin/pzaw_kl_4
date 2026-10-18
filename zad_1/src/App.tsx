

import './App.css'


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
      <p>{props.release_year}</p>
    </div>
  );
}
interface PropsBook {
  cover_source: string;
  name: string;
  release_year: number;
  page_amount: number;
}
function BookEntry(props: PropsBook){
  return (
    <div className="entryContainer">
      <img src={props.cover_source}></img>
      <h2>{props.name}</h2>
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
    <li key={element.song_name}>
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
      <div className='contentContainer'>
        <BookEntry name="TEST1" cover_source="https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg" release_year={Number("2016")} page_amount={Number("200")}/>
        <BookEntry name="TEST1" cover_source="https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg" release_year={Number("2016")} page_amount={Number("200")}/>
        <BookEntry name="TEST1" cover_source="https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg" release_year={Number("2016")} page_amount={Number("200")}/>
      </div>
      <div className='contentContainer'>
        <AlbumEntry album_name='aaaaa' cover_source="https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg"  author_name='Test' genre='Test Pop' release_year={Number("1924")} songs={[{song_name:"test1", song_length_seconds:322}, {song_name:"test2", song_length_seconds:123}]} />
       </div>
    </div>

  );
}

export default App

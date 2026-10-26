

import Movies, { type PropsMovie } from './Movies';
import Books, { type PropsBook} from './Books';
import Albums, { type PropsAlbum} from './Albums';

var moviesList: PropsMovie[] = [
  {
    cover_source:"https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg",
    name:"Morbius (worse)",
    release_year:2009,
    rating:5
  },
  {
    cover_source:"https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg",
    name:"Morbius (better)",
    release_year:2022,
    rating: 10
  }
];
var booksList: PropsBook[] = [
  {
    name:"[A] Czwarty Jeździec Apokalipsy",
    author_name:"V. Ropshin (Borys Savinkov)",
    cover_source:"/assets/content-source/pale_horse_savinkov.png",
    release_year:1909,
    page_amount:199
  },
  {
    name:"[B] 1984",
    author_name:"Jorjor Wel",
    cover_source:"https://upload.wikimedia.org/wikipedia/commons/5/51/1984_first_edition_cover.jpg",
    release_year:1949,
    page_amount:328
  },
  {
    name:"[C] Proces",
    author_name:"Franz Kafka",
    cover_source:"https://upload.wikimedia.org/wikipedia/commons/f/f9/TrialKafka.jpg",
    release_year:1925,
    page_amount:128
  }
]
var albumsList: PropsAlbum[] = [
  {
    album_name:'The Chocolate Wheelchair Album',
    cover_source:"assets/content-source/venetian_snares_chocolate_wheelchair.png",
    author_name:'Venetian Snares',
    genre:'Breakcore/IDM',
    release_year:2003,
    songs:[
      {song_name:"Marty's Tardis", song_length:557}, 
      {song_name:"Abomination Street", song_length:262},
      {song_name:"Epidermis", song_length: 282}
    ]
  },
  {
    album_name:'Kryzys',
    cover_source:"assets/content-source/hanba_kryzys.png",
    author_name:'Hańba!',
    genre:'Folk miejski/punk rock',
    release_year:2023,
    songs:[
      {song_name:"Zagłębie Dąbrowskie", song_length:175}, 
      {song_name:"Czerwone i Czarne", song_length:208},
      {song_name:"Przemsza", song_length: 155},
      {song_name: "Refleksja", song_length: 121}
    ]
  },
  {
    album_name:'Kryzys Ale Taki Poważny Że Nic Nie Ma',
    cover_source:"assets/content-source/hanba_kryzys.png",
    author_name:'Hańba!',
    genre:'Folk miejski/punk rock',
    release_year:1928,
    songs:[

    ]
  }
];


function App(){
  return (
    <div className='container'>
      <h1>Filmy</h1>
      <Movies ListOfMovies={moviesList}/>
      <Movies ListOfMovies={moviesList} filterYear={2010} />
      <h1>Książki</h1>
      <Books listOfBooks={booksList} />
      <Books listOfBooks={booksList} sortedByReleaseYear={true}/>
      <h1>Albumy</h1>
      <Albums listOfAlbums={albumsList}/>
      <Albums listOfAlbums={albumsList} showHowManyAlbumsByMostSongs={1} />
    </div>

  );
}

export default App

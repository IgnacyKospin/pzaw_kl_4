

import Movies, { type PropsMovie } from './Movies';
import Books, { type PropsBook} from './Books';
import Albums, { type PropsAlbum} from './Albums';

var moviesList: PropsMovie[] = [
  {
    cover_source:"https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg",
    name:"Morbius (worse)",
    release_year:2022,
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
    name:"Czwarty Jeździec Apokalipsy",
    author_name:"V. Ropshin (Borys Savinkov)",
    cover_source:"src\assets\content-source\pale_horse_savinkov.png",
    release_year:1909,
    page_amount:199
  }
]
var albumsList: PropsAlbum[] = [
  {
    album_name:'The Chocolate Wheelchair Album',
    cover_source:"src\assets\content-source\venetian_snares_chocolate_wheelchair.png",
    author_name:'Venetian Snares',
    genre:'Breakcore/IDM',
    release_year:2003,
    songs:[
      {song_name:"Marty's Tardis", song_length:557}, 
      {song_name:"Abomination Street", song_length:262},
      {song_name:"Epidermis", song_length: 282}
    ]
  }
];


function App(){
  return (
    <div className='superContainer'>
      <Movies ListOfMovies={moviesList}/>
      <h1>Książki</h1>
      <Books listOfBooks={booksList}/>
      <h1>Albumy</h1>
      <Albums listOfAlbums={albumsList}/>
    </div>

  );
}

export default App

import {
  BrowserRouter as Router,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';

import { CategoryList } from './views/CatagoryList/CatagoryList';

const movieCategories = [
  {
    category: 'Anime',
    id: 'anime',
    description: 'anime movies',
    movies: [
      {
        title: 'Demon Slayer: Mugen Train',
        year: '2020',
        id: '1',
        poster:
          'https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_SX300.jpg',
      },
      {
        title: 'Jujutsu Kaisen 0: The Movie',
        year: '2021',
        id: '2',
        poster:
          'https://m.media-amazon.com/images/M/MV5BYzFmMjAwMDYtNzM0Zi00NjY2LWFjMjYtMGQ1OTRiZjk5YjJkXkEyXkFqcGdeQXVyMTMwODY5NDc2._V1_SX300.jpg',
      },
    ],
  },
  {
    category: 'Horror',
    id: 'horror',
    description: 'horror movies',
    movies: [
      {
        title: 'Get Out',
        year: '2017',
        id: '3',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg',
      },
      {
        title: "Child's Play 2",
        year: '1990',
        id: '4',
        poster:
          'https://m.media-amazon.com/images/M/MV5BM2Y0NGNiNGItYzYzOS00NDk0LTkzNWUtMGZjMjc1NWM4MzE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      },
    ],
  },
  {
    category: 'Action',
    id: 'action',
    description: 'action movies',
    movies: [
      {
        title: 'Last Action Hero',
        year: '1993',
        id: '5',
        poster:
          'https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
      },
      {
        title: 'Looney Tunes: Back in Action',
        year: '2003',
        id: '6',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMTkxNDk5MDQ2MF5BMl5BanBnXkFtZTYwMTA0Nzc2._V1_SX300.jpg',
      },
    ],
  },
];

function Movie() {}

function MovieList() {}

function Home() {
  return <h1>Home</h1>;
}

export default function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: '0 auto' }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/categories">
          <CategoryList movieCategories={movieCategories} />
        </Route>
      </div>
    </Router>
  );
}

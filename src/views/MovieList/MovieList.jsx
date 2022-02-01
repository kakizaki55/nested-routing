import React from 'react';
import { useRouteMatch, useParams, Route, Link } from 'react-router-dom';
import Movie from '../../components/Movie/Movie';

export default function MovieList({ movieCategories }) {
  const { catagoryId } = useParams();
  const { url, path } = useRouteMatch();

  const category = movieCategories.filter(({ id }) => id === catagoryId);
  const movieList = category[0].movies;
  return (
    <div>
      {movieList.map(({ id, title }) => {
        return (
          <div key={id}>
            <Link to={`${url}/${id}`}>{title}</Link>
          </div>
        );
      })}
      <Route path={`${path}/:movieId`}>
        <Movie />
      </Route>
    </div>
  );
}

import MovieList from '../MovieList/MovieList';
import { Route, useRouteMatch, Link } from 'react-router-dom';

export function CategoryList({ movieCategories }) {
  // Custom Hook we get from react router dom for nested routing
  const { url, path } = useRouteMatch();

  return (
    <>
      {movieCategories.map(({ category, id }) => {
        return (
          <li key={id}>
            <Link to={`${url}/${id}`}>{category}</Link>
          </li>
        );
      })}

      <Route path={`${path}/:catagoryId`}>
        <MovieList movieCategories={movieCategories} />
      </Route>
    </>
  );
}

import MovieList from '../MovieList/MovieList';

export function CategoryList() {
  // Custom Hook we get from react router dom for nested routing
  const { url, path } = useRouteMatch();
  console.log('url in CategoryList', url); // 💡 Use url for nested links
  console.log('path in CategoryList', path); // 💡 Use path for nested routes

  return <></>;
}

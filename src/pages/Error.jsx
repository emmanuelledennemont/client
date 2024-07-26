import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <img
          src={img}
          alt="404"
        />
        <h3>Page not found</h3>
        <p>The page you are looking for might have been removed.</p>
        <Link to="/dashboard">Back to Home</Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>Something went wrong</h3>
      <Link to="/">Back to Home</Link>
    </Wrapper>
  );
};

export default Error;

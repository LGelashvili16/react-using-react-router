import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
};

export default NotFound;

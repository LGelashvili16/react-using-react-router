import { Outlet, NavLink } from 'react-router-dom';

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        lorem ipsum dolor sit amet consectetur adispisicing elit. Dolur,earum!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;

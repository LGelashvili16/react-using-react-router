import { Outlet } from 'react-router-dom';

const CareersLayout = () => {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      </p>

      <Outlet />
    </div>
  );
};

export default CareersLayout;
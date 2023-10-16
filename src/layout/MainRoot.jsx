import { Outlet } from 'react-router-dom';

const MainRoot = () => {
  return (
    <div className="max-w-screen-xl px-4 md:px-8 lg:px-10 mx-auto mt-20">
      <Outlet />
    </div>
  );
};

export default MainRoot;

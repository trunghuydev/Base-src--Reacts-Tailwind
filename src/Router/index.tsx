import { Outlet, Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/SideBar/SideBar';
import Login from '../Auth/Login';
import Dashboard from '../Page/hello/hello';

const DefaultRouter = () => {
  const LayoutWithNavbar = () => (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<LayoutWithNavbar />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default DefaultRouter;

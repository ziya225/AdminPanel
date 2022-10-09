import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
const index = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default index;

import React from 'react'

const DashboardPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>Dashboard Page</div>;
};

export default DashboardPage
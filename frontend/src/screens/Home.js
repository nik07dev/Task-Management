import React from "react";

function Home({ children }) {
  return (
    <div className="p-2">
      <h1 className="text-center my-4">Task Management Application</h1>
      {children}
    </div>
  );
}

export default Home;

// App.js
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import EditForm from "./components/EditForm";
import ErrorBoundary from "./components/ErrorBoundary";

const Routing = () => {
  return (
    <Switch>
      <Route path="/create">
        <Home>
          <TaskForm />
        </Home>
      </Route>
      <Route path="/edit/:id">
        <Home>
          <EditForm />
        </Home>
      </Route>
      <Route path="/">
        <Home>
          <TaskList />
        </Home>
      </Route>
    </Switch>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;

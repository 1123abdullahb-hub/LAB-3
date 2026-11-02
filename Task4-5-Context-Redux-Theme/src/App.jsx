import React, { useContext } from "react";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

import User from "./components/User";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";

import "./App.css";

function Dashboard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <h1>Combined State Management</h1>

      <p>React Context API + Redux</p>

      <ThemeToggle />

      <User />

      <Counter />

      <footer>
        LAB 3 – React.js Practical
      </footer>
    </div>
  );
}

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
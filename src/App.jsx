import React from "react";
import user from "../data/user.json";
import "../styles/App.css";
import UserCard from "./UserCard";

function App() {
  return (
    <UserCard
      name={user.name}
      age={user.age}
      phoneNumber={user.phoneNumber}
      address={user.address}
    />
  );
}

export default App;

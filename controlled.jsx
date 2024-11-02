import React, { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState(""); // Creates a state variable

  function handleSubmit(e) {
    e.preventDefault();
    alert(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Sets the state variable when the input changes
      />
      <button type="submit">Submit</button>
    </form>
  );
}

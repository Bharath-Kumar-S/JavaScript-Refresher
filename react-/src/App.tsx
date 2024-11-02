import { useEffect, useState } from "react";
import "./App.css";

interface SpaceshipProps {
  fuelLevel: number;
}

const ControlPanel = ({ fuelLevel }: SpaceshipProps) => {
  useEffect(() => {
    console.log(`Fuel level changed to ${fuelLevel}`);
  }, [fuelLevel]);

  // Rest of component's code
  return (
    <div>
      <h2>Control Panel</h2>
      <p>Fuel Level: {fuelLevel}</p>
    </div>
  );
};

function App() {
  const [fuelLevel, setFuelLevel] = useState(100); // Fuel level state in Spaceship

  // Function to decrease fuel level
  const decreaseFuel = () => {
    setFuelLevel(fuelLevel - 10);
  };

  // Nested Control Panels
  return (
    <div>
      <ControlPanel fuelLevel={fuelLevel} />
      <button onClick={decreaseFuel}>Decrease Fuel</button>
    </div>
  );
}

export default App;

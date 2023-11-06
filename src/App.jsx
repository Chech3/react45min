import "./App.css";
import vehicles from "./data/vehicles.js";
import Card from "./components/Card.jsx";
import "./App.css";
import ShowHide from "./components/ShowHide";

function App() {
  const vehicleList = vehicles.map((v) => {
    return <Card title={v.name} description={v.description} />;
  });
  return (
    <>
      <h1>Hola mundo </h1>
      <div className="container">{vehicleList}</div>

      <ShowHide />
    </>
  );
}

export default App;

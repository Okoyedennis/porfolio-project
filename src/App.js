import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar";
import Header from "./Component/Header";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="App">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;

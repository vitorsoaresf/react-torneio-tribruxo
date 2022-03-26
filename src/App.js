import "./reset.css";
import "./App.css";
import { useState, useEffect } from "react";

import ShowStudents from "./components/ShowStudents";

function App() {
  const [students, setStudents] = useState([]);
  const [home, setHome] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) =>
        setStudents(response.filter((wizard) => wizard.image !== ""))
      )
      .catch((err) => console.error(err));
  }, []);

  return home ? (
    <div className="box_home">
      <div className="box_home__title">
        <p>TORNEIO</p>
        <p>TRIBRUXO</p>
      </div>
      <div className="box_home__button">
        <button
          onClick={() => {
            setHome(!home);
          }}
        >
          <i className="fas fa-quidditch"></i>
        </button>
      </div>
      <div className="box_home__houses">
        <div className="homeG__faixa">
          <div className="homeG"></div>
        </div>
        <div className="homeS__faixa">
          <div className="homeS"></div>
        </div>
        <div className="homeR__faixa">
          <div className="homeR"></div>
        </div>
        <div className="homeH__faixa">
          <div className="homeH"></div>
        </div>
      </div>
    </div>
  ) : (
    students.length > 0 && (
      <div className="App">
        <ShowStudents students={students} />
      </div>
    )
  );
}

export default App;

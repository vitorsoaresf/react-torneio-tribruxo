import "./styles.css";
import { useEffect, useState } from "react";
import Student from "../Student";

function ShowStudents({ students }) {
  const randomNumbers = (limit) => {
    let arrResult = [];
    for (let i = 0; i < limit; i++) {
      arrResult = [...arrResult, i];
    }

    return [
      parseInt(
        arrResult
          .splice(Math.floor(Math.random() * arrResult.length), 1)
          .join("")
      ),
      parseInt(
        arrResult
          .splice(Math.floor(Math.random() * arrResult.length), 1)
          .join("")
      ),
      parseInt(
        arrResult
          .splice(Math.floor(Math.random() * arrResult.length), 1)
          .join("")
      ),
    ];
  };

  const wizardWinner = () => {
    setWinner(!winner);
  };

  const returnQuantityStudents = (house) => {
    return students.reduce(
      (acc, element) => (element.house === house ? ++acc : acc),
      0
    );
  };

  const returnOneStudentHouse = (house) => {
    if (house === "Gryffindor") {
      return students.filter((wizard) => wizard.house === "Gryffindor")[
        Math.floor(Math.random() * quantityGryffindor)
      ];
    } else if (house === "Slytherin") {
      return students.filter((wizard) => wizard.house === "Slytherin")[
        Math.floor(Math.random() * quantitySlytherin)
      ];
    } else if (house === "Hufflepuff") {
      return students.filter((wizard) => wizard.house === "Hufflepuff")[
        Math.floor(Math.random() * quantityHufflepuff)
      ];
    } else {
      return students.filter((wizard) => wizard.house === "Ravenclaw")[
        Math.floor(Math.random() * quantityRavenclaw)
      ];
    }
  };

  const quantityGryffindor = returnQuantityStudents("Gryffindor");
  const quantitySlytherin = returnQuantityStudents("Slytherin");
  const quantityHufflepuff = returnQuantityStudents("Hufflepuff");
  const quantityRavenclaw = returnQuantityStudents("Ravenclaw");

  const [winner, setWinner] = useState(false);

  const [studentGryffindor, setStudentGryffindor] = useState(
    returnOneStudentHouse("Gryffindor")
  );

  const [studentSlytherin, setStudentSlytherin] = useState(
    returnOneStudentHouse("Slytherin")
  );

  const [studentHufflepuff, setStudentHufflepuff] = useState(
    returnOneStudentHouse("Hufflepuff")
  );

  const [studentRavenclaw, setStudentRavenclaw] = useState(
    returnOneStudentHouse("Ravenclaw")
  );

  const [optionStudents, setOptionStudents] = useState([
    studentGryffindor,
    studentSlytherin,
    studentHufflepuff,
    studentRavenclaw,
  ]);

  const [positionsListStudents, setPositionsListStudents] = useState([
    ...randomNumbers(4),
  ]);

  const [studentsSelected, setStudentsSelected] = useState([]);

  //INICIALIZACAO E  MONTAGEM
  useEffect(() => {
    if (winner) {
      setStudentGryffindor(returnOneStudentHouse("Gryffindor"));

      setStudentSlytherin(returnOneStudentHouse("Slytherin"));

      setStudentHufflepuff(returnOneStudentHouse("Hufflepuff"));

      setStudentRavenclaw(returnOneStudentHouse("Ravenclaw"));

      setOptionStudents([
        studentGryffindor,
        studentSlytherin,
        studentHufflepuff,
        studentRavenclaw,
      ]);

      setPositionsListStudents([...randomNumbers(4)]);
    }
    setStudentsSelected([
      optionStudents[positionsListStudents[0]],
      optionStudents[positionsListStudents[1]],
      optionStudents[positionsListStudents[2]],
    ]);
  }, [winner]);

  return (
    studentsSelected.length === 3 && (
      <div className="container">
        <div className="container__students">
          <Student student={studentsSelected[0]} />
          <Student student={studentsSelected[1]} />
          <Student student={studentsSelected[2]} />
        </div>

        <div className="container__bt">
          {winner ? (
            <div className="wizard-win">
              <p className="wizard-win__title">
                <i class="fas fa-trophy"></i>
              </p>
              <div className="style-student">
                <Student
                  student={
                    studentsSelected[
                      Math.floor(Math.random() * studentsSelected.length)
                    ]
                  }
                />
              </div>
              <button onClick={wizardWinner}>
                <i class="fas fa-undo"></i>
              </button>
            </div>
          ) : (
            <button className="container__bt__iniciar" onClick={wizardWinner}>
              <i className="fas fa-trophy"></i>
            </button>
          )}
        </div>
      </div>
    )
  );
}

export default ShowStudents;

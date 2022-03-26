import "./styles.css";

function Student({ student }) {
  return (
    student && (
      <div className="student-card">
        <img className={student.house} alt="wizard-img" src={student.image} />
        <div className="student-card__box-img">
          <div className={student.house[0]}></div>
        </div>
        <div className="student-card__description">
          <p>{student.name}</p>
          <p>{student.house}</p>
          <p>{student.species}</p>
        </div>
      </div>
    )
  );
}

export default Student;

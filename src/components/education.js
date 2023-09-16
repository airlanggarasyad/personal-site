const EducationCard = (props) => {
  return (
    <div className="bachelor education">
      <div>
        <img style={{ width: "8vw", margin: "0 1rem" }} src={props.imageURL} />
      </div>
      <div>
        <h3>
          {props.institution} <br />
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4 style={{ margin: 0 }}>{props.educationDesc}</h4>
          <h4 style={{ margin: 0 }}>
            {props.startDate} -- {props.endDate}
          </h4>
        </div>
        <ul style={{ margin: "0", padding: "1em" }}>
          {props.points.map((point, i) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationCard;

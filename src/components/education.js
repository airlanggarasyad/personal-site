const EducationCard = (props) => {
  return (
    <div className="bachelor education" style={{margin: "0 1rem"}}>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "5%", margin: "1rem 1rem 1rem 0rem" }}
            src={props.imageURL}
          />
          <div style={{ display: "flex", justifyContent: "space-between", width: "95%", alignItems: "end" }}>
            <h4 style={{ margin: 0 }}>{props.institution}<br/>{props.educationDesc}</h4>
            <h4 style={{ margin: 0 }}>
              {props.startDate} -- {props.endDate}
            </h4>
        </div>
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

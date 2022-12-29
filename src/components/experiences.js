const ExperienceCard = (props) => {
  return (
    <div style={{margin: "0 1rem"}}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ width: `${props.imageDim}`, margin: "1rem 1rem 1rem 0rem" }}
          src={props.imageURL}
        />
        <h3>
          {props.institution}
          <br />
        </h3>
      </div>
      <div style={{ width: "100%" }}>
        {props.positions
          .slice(0)
          .reverse()
          .map((position, i) => (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 style={{ margin: 0 }}>{position.name}</h4>
                <h4 style={{ margin: 0 }}>
                  {position.startDate} -- {position.endDate}
                </h4>
              </div>
              <ul style={{ margin: "0", padding: "0.2em 1em 1em 1em" }}>
                {position.points.map((point, i) => (
                  <li style={{textAlign: "justify"}}>{point}</li>
                ))}
              </ul>
            </>
          ))}
      </div>
    </div>
  );
};

export default ExperienceCard;

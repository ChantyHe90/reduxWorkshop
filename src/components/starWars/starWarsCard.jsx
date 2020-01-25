import React from "react";
import { connect } from "react-redux";

const StarWarsCard = props => {
  console.log("card:", props);
  return (
    <div className="starWarsCard">
      {props.data &&
        props.data.map(e => {
          return (
            <ul className="dataWrapper">
              <li>{e.name}</li>
              <li>{e.gender}</li>
            </ul>
          );
        })}
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.starWarsReducer.starWarsData.results
});
export default connect(mapStateToProps)(StarWarsCard);

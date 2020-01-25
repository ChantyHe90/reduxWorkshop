import React, { Component } from "react";
// to connect to the component:
import { connect } from "react-redux";
import { getStarWarsData } from "./starWarsAction";
import StarWarsCard from "./starWarsCard";

class starWars extends Component {
  componentDidMount() {
    this.props.getStarWarsData();
    // getStarWarsData is now a props coming from the store
  }
  render() {
    // console.log(this.props);
    return (
      <div className="starWarsMain">
        <p>we count:</p>
        <h1> {this.props.potato}</h1>
        <StarWarsCard />
      </div>
    );
  }
}
// API from action

const mapStateToProps = state => ({
  potato: state.starWarsReducer.starWarsData.count
  //   potato: state.starWarsData
});

// mapStateToProps error in localhost:3000
// mapStateToProps brings some state
export default connect(mapStateToProps, { getStarWarsData })(starWars);
// this component is now connected to our store
// connect()(starWars)
// connect takes at least parameters
// connect(a, b)(starWars);
// a = reducer information
// b = action functions
// {} because it is a object with mulitply actions

// lifecycle:
/* when we start this:
first render > then back > compoentnDidMount > render again passing data in props

a) check export 
connect:  class starWars is the "higher ordered the component"

mapState & getStar are already passed then to starWars

*/

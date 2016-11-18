const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();

    this.handleFilterTypeChange = this.handleFilterTypeChange.bind(this);
    //binds the function to the filter instance 
    //this.props.onFindPetsClick was passed from App, doesn't need to be bound 
      //beause the API call seems to always happen in the App not the filter?? 
  }

  handleFilterTypeChange(event) {
    this.props.onChangeType(event.target.value);
    // is a call to App function handleChangeFilterType which changes App state
      //need to change the app state to force the rerender to determine who to display  

  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleFilterTypeChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
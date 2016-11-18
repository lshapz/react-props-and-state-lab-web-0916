const React = require('react');

class Filters extends React.Component {
  constructor() {
    super();
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handlePetsClick = this.handlePetsClick.bind(this)
  }
  handleFilterChange(event) {
    this.props.onChangeType(event.target.value)
  }
  handlePetsClick() {
    this.props.onFindPetsClick()
  }
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleFilterChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handlePetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
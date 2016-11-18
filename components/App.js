const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [], //passed as prop to PetBrowser and later Pet
      adoptedPets: [], // passed as prop to PetBrowser and later Pet
      filters: {
        type: 'all', // passed as prop to Filter (mostly to make the select value look right)
      }
    };
    //bind the below functions to the app instances rather than the app as a concept
    //must use setState({}}) to force rerender!!!!

    this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
    //used for filter dropdown menu (state: {filters: {type: ''}})
    // passed as prop to filters 

    this.fetchPets = this.fetchPets.bind(this);
    //used for API call (state: {pets: []})
    // passed as prop to filters 

    this.handleAdoptPet = this.handleAdoptPet.bind(this);
    //used for pet adoption click (state: {adoptedPets: []})
    // passed as prop to PetBrowser and later Pet 
  }

  fetchPets() {
    let url = '/api/pets';
    //goes to fake api
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`;
    } 
    //makes sure we get the requested pet type from the API

    fetch(url)
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
    //fetch url, parse json, at last sets the state
  }

  handleChangeFilterType(type) {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type,
      })
    });
    //filters out pets of non-micropig type or whatever
  }

  handleAdoptPet(petId) {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId],
    });

    // pushes the selected pet into the adopted pets array 
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters}
                       onChangeType={this.handleChangeFilterType}
                       onFindPetsClick={this.fetchPets} 
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
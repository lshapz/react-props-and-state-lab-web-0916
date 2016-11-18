const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {

  //passes each member of App.state: {pets:[]} to a new pet instance
   // uses inclusion in app.state {adoptedPets:[]} to determine isAdopted property of each pet 
  //passes App.func() onAdoptPet to Pets as another property 

  render() {
    const pets = this.props.pets.map((pet, index) => (
      <Pet pet={pet} key={index} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    ));

    
    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
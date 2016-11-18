const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {
  render() {
    let pets = this.props.pets.map((pet) => {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
    })

    return (
      <div className="ui cards">
        {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
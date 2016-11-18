const React = require('react');

class Pet extends React.Component {
  constructor() {

    super();

    //binds function to each the pet instance
    this.handleAdoptPet = this.handleAdoptPet.bind(this);
  }

  handleAdoptPet() {
    this.props.onAdoptPet(this.props.pet.id);
    //onAdoptPet is the handleAdoptPet function defined in App and passed by petBrowser
      //changes the app state to include current pet in the adopted array (see above)
      //need to change the app state to force the rerender to change the button 
  }

  render() {
    const { pet, isAdopted } = this.props;
    // these mass assignments of pet properties are stolen from solution branch
    // could have done it by saying this.props.pet.name etc in each of the the below {}
    const { name, type, gender, age, weight } = pet;

    return (
      <div className="card">
        <div className="content">
          <a className="header">{name} {gender === 'male' ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {!isAdopted && <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>}
          {isAdopted && <button className="ui disabled button">Already adopted</button>}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
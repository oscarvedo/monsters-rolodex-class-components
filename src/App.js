import { Component } from 'react';
import SearchBox from './components/SearchBox/SearchBox.component';
import CardList from './components/CardList/CardList.component';
import './App.css';

class App extends Component {
  //Initialice the component and local state
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  //Right after the first render - API Requests here
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return {monsters: users}
      }));
  }

  onSearchChange = (e) => { //Performance Optimization. Declared once.
    const searchString = e.target.value.toLowerCase();
    this.setState(
      () => {
        return { searchField: searchString };
      }
    );
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <SearchBox
        className='search-box'
        onSearchHandler={onSearchChange} 
        placeholder='Search monsters'
      />
      <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
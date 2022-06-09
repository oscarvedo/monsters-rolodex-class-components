import { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox.component";
import CardList from "./components/CardList/CardList.component";
import "./App.css";

const App = () => {

  const [searchField, setSearchField] = useState('');

  const onSearchChange = (e) => {
        const searchFieldString = e.target.value.toLowerCase();
        setSearchField(searchFieldString);
      };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onSearchHandler={onSearchChange}
        placeholder="Search monsters"
      />
      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  );
};

// class App extends Component {
//   //Initialice the component and local state
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   //Right after the first render - API Requests here
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (e) => {
//     //Performance Optimization. Declared once.
//     const searchString = e.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField: searchString };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onSearchHandler={onSearchChange}
//           placeholder="Search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;

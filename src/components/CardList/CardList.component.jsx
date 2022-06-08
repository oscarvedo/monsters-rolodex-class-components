import { Component } from "react";
import CardItem from "../CardItem/CardItem.component";
import './CardList.styles.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => (
          <CardItem monster={monster} key={monster.id} />
        ))}
      </div>
    );
  }
}

export default CardList;

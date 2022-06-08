import { Component } from "react";
import './CardItem.styles.css';

class CardItem extends Component {
  render() {
    const { id, name, email } = this.props.monster;

    return (
      <div className="card-item">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`Monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default CardItem;

import CardItem from "../CardItem/CardItem.component";
import "./CardList.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <CardItem monster={monster} key={monster.id} />
      ))}
    </div>
  );
};

export default CardList;

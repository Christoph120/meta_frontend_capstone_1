import pizza from '../assets/pizza.jpg';
import pasta from '../assets/pasta.jpg';
import lemonade from '../assets/lemonade.jpg';


const Menu = () => {
  return (
    <div>
      <h2>Our Menu</h2>
      <h3>Pizzas</h3>
      <img src={pizza}  alt="img"/>
      <ul>
        <li>Margherita 10$</li>
        <li>Pepperoni 12$</li>
        <li>BBQ Chicken 14$</li>
        <li>Hawaiian 13$</li>
        <br></br>
        <li>Veggie Delight 12$</li>
        <li>Meat Lovers 14$</li>
        <li>Four Cheese 12$</li>
        <br></br>
        <li>Buffalo Chicken 13$</li>
        <li>Supreme 14$</li>
      </ul>
      <h3>Pasta</h3>
      <img src={pasta}  alt="img"/>
      <ul>
        <li>Spaghetti Bolognese 10$</li>
        <li>Fettuccine Alfredo 11$</li>
        <li>Lasagna 14$</li>
        <br></br>
        <li>Penne Arrabbiata 9$</li>
        <li>Carbonara 10$</li>
      </ul>
      <h3>Drinks</h3>
      <img src={lemonade}  alt="img"/>
      <ul>
        <li>Classic Lemonade 4$</li>
        <li>Strawberry Lemonade 4$</li>
        <li>Iced Tea 3$</li>
      </ul>
    </div>
  );
};

export default Menu;
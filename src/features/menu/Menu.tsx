import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import { IPizza } from '../../interfaces/pizza.interface';
import MenuItem from './MenuItem';

const Menu = () => {
  const menu = useLoaderData() as IPizza[];

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem
          key={pizza.id}
          id={pizza.id}
          name={pizza.name}
          unitPrice={pizza.unitPrice}
          ingredients={pizza.ingredients}
          soldOut={pizza.soldOut}
          imageUrl={pizza.imageUrl}
        />
      ))}
    </ul>
  );
};

export const loader = async () => {
  const menu = await getMenu();

  console.log('menu');
  return menu;
};

export default Menu;

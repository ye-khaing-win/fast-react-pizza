import { useEffect } from 'react';
import { formatCurrency } from '../../utils/helpers';

interface IMenuItemProps {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

const MenuItem = (props: IMenuItemProps) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = props;

  useEffect(() => {
    console.log('effect runs');
  }, []);

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;

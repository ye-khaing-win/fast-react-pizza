import { formatCurrency } from "../../utils/helpers";

interface ICartItemProps {
  pizzaId: string;
  name: string;
  quantity: number;
  totalPrice: number;
}

const CartItem = (props: ICartItemProps) => {
  const { pizzaId, name, quantity, totalPrice } = props;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default CartItem;

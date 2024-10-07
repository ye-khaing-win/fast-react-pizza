import { formatCurrency } from "../../utils/helpers";

interface IItem {
  quantity: number;
  name: string;
  totalPrice: number;
}

interface OrderItemProps {
  item: IItem;
  isLoadingIngredients: boolean;
  ingredients: string[];
}

const OrderItem = (props: OrderItemProps) => {
  const { item, isLoadingIngredients, ingredients } = props;
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
};

export default OrderItem;

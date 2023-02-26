import { useBasketContext } from "../ContextProviders/BasketContext";
import css from "./cartItem.module.css";

export default function CartItem(props) {
    const { pid, name, price } = props.data;
    const { basketList } = useBasketContext();

    return (
        <div key={pid} className={css.cartBody}>
            <p>{`Product name: ${name}`}</p>
            <p>{`Price: ${price}`}</p>
            <p>{`Amount: ${basketList[pid]}`}</p>
        </div>
    );
}
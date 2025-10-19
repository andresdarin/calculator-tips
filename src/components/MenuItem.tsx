import type { Dispatch } from "react";
import type { MenuItem } from "../types";
import type { orderActions } from "../reducers/order-reducer";

type MenuItemProps = {
    item: MenuItem;
    dispatch: Dispatch<orderActions>;
};

export function MenuItem({ item, dispatch }: MenuItemProps) {
    return (
        <button
            className="border border-gray-300 rounded w-full p-4 flex justify-between items-center hover:bg-teal-200 cursor-pointer"
            onClick={() => dispatch({ type: 'ADD_ITEM', payload: { item } })}
        >
            <h3 className="font-bold">{item.name}</h3>
            <span>${item.price.toFixed(2)}</span>
        </button>
    );
}
export default MenuItem;

import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem;
    addItem: (item: MenuItem) => void;
};

export function MenuItem({ item, addItem }: MenuItemProps) {
    return (
        <button
            className="border border-gray-300 rounded w-full p-4 flex justify-between items-center hover:bg-teal-200 cursor-pointer"
            onClick={() => addItem(item)}
        >
            <h3 className="font-bold">{item.name}</h3>
            <span>${item.price.toFixed(2)}</span>
        </button>
    );
}
export default MenuItem;

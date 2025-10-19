import { X } from "lucide-react";
import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";
import type { Dispatch } from "react";

type OrderContentsProps = {
    order: OrderItem[],
    dispatch: Dispatch<any>,
}

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
    return (
        <div>
            <h2 className="text-center my-4 text-lg">
                Order Contents
            </h2>
            <div>
                {order.length === 0 ? (
                    <p className="text-center">No items in the order</p>
                ) : (
                    <ul className="space-y-2">
                        {order.map(item => (
                            <li key={item.id} className="grid grid-cols-7 text-center justify-between border-b border-gray-300 pb-2">
                                <span className="col-span-4 text-start">{item.name}</span>
                                <span className="col-span-1">{item.quantity}</span>
                                <span className="col-span-1">{formatCurrency(item.price * item.quantity)}</span>
                                <div className="flex items-center justify-end">
                                    <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { itemId: item.id } })} className="text-white rounded-full w-6 h-6 bg-red-500 font-bold flex items-center justify-center">
                                        <X />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

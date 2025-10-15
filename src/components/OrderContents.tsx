import type { OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[];
}

export default function OrderContents({ order }: OrderContentsProps) {
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
                                <span className="col-span-1">${(item.price * item.quantity).toFixed(2)}</span>
                                <button className="col-span-1 text-end text-red-500 font-bold">x</button>
                            </li>
                        ))}
                        <li className="flex justify-between pt-2">
                            <span className="font-bold">Total</span>
                            <span className="font-bold">${order.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

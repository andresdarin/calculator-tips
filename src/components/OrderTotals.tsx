import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[],
    tip?: number,
    total?: number,
    placeOrder?: () => void
}

export const OrderTotals = ({ order, tip, total, placeOrder }: OrderTotalsProps) => {
    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order]);
    const tipAmount = useMemo(() => tip ? subTotalAmount * tip : 0, [order, tip]);
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [subTotalAmount, tipAmount]);
    return (
        <>
            <div className="space-y-3">
                <h2 className="text-center my-4 text-lg">
                    Order Totals
                </h2>
                <p>Subtotal: {' '}
                    <span>{formatCurrency(subTotalAmount)}</span>
                </p>
                <p>Tip: {' '}
                    <span>{formatCurrency(tipAmount)}</span>
                </p>
                <p>Total: {' '}
                    <span>{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button
                disabled={totalAmount === 0}
                className="w-full bg-teal-400 text-white py-2 cursor-pointer rounded disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={placeOrder}
            >
                Confirm Order
            </button>
        </>

    )
}

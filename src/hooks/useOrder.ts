import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)
    const [total, setTotal] = useState(0)



    const addItem = (item: MenuItem) => {
        const itemInOrder = order.find(orderItem => orderItem.id === item.id)

        if (itemInOrder) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id
                ? { ...orderItem, quantity: orderItem.quantity + 1 }
                : orderItem
            )
            setOrder(updatedOrder)
        }
        else {
            setOrder(prevOrder => [...prevOrder, { ...item, quantity: 1 }])
        }

    }

    const removeItem = (itemId: MenuItem["id"]) => {
        const itemInOrder = order.find(orderItem => orderItem.id === itemId)

        if (itemInOrder) {
            const updatedOrder = order.filter(orderItem => orderItem.id !== itemId)
            setOrder(updatedOrder)
        }
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
        setTotal(0)
    }

    return {
        order,
        tip,
        setTip,
        total,
        setTotal,
        addItem,
        removeItem,
        placeOrder
    }
}
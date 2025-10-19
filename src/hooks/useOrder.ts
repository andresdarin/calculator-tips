import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)
    const [total, setTotal] = useState(0)


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
        placeOrder
    }
}
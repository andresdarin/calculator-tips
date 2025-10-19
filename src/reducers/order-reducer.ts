import type { MenuItem, OrderItem } from '../types';

export type orderActions =
    { type: 'ADD_ITEM', payload: { item: MenuItem } }
    | { type: 'REMOVE_ITEM', payload: { itemId: number } }
    | { type: 'PLACE_ORDER' }
    | { type: 'ADD_TIP', payload: { value: number } }


export type OrderState = {
    order: OrderItem[];
    tip: number;
}

export const initialState = {
    order: [],
    tip: 0,
}

export const orderReducer = (
    state: OrderState = initialState,
    action: orderActions
) => {

    if (action.type === 'ADD_ITEM') {
        const itemInOrder = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        let updatedOrder: OrderItem[] = [];
        if (itemInOrder) {
            updatedOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id
                ? { ...orderItem, quantity: orderItem.quantity + 1 }
                : orderItem
            )
            return { ...state, order: updatedOrder }
        } else {
            const newItem: OrderItem = { ...action.payload.item, quantity: 1 }
            updatedOrder = [...state.order, newItem];
        }
        return { ...state, order: updatedOrder }
    }
    if (action.type === 'REMOVE_ITEM') {
        const itemInOrder = state.order.find(orderItem => orderItem.id === action.payload.itemId)
        let updatedOrder: OrderItem[] = [];
        if (itemInOrder) {
            updatedOrder = state.order.map(orderItem => orderItem.id === action.payload.itemId
                ? { ...orderItem, quantity: orderItem.quantity - 1 }
                : orderItem
            ).filter(orderItem => orderItem.quantity > 0)
        }
        return {
            ...state,
            order: updatedOrder
        }
    }
    if (action.type === 'PLACE_ORDER') {
        const emptyOrder: OrderItem[] = [];
        return {
            ...state,
            order: emptyOrder,
            tip: 0
        }

    }
    if (action.type === 'ADD_TIP') {
        const newTip = action.payload.value;
        return {
            ...state,
            tip: newTip
        };
    }

    return state;
}
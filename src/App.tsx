import { useReducer } from "react";
import { MenuItem } from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder";
import { initialState, orderReducer } from "./reducers/order-reducer";

function App() {
  const { total } = useOrder();
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className="bg-teal-400 py-5 ">
        <h1 className="text-center text-4xl">Tip Calculator</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20  grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-4">
          <h2 className="text-4xl text-center">Menu</h2>

          {menuItems.map(item => (
            <MenuItem
              key={item.id}
              item={item}
              dispatch={dispatch}
            />
          ))}

        </div>
        <div className="space-y-4 border p-4 rounded border-gray-300">
          <h2 className="text-4xl text-center">Consumo</h2>

          {state.order.length === 0 ? (
            <p className="text-center">No hay items en el pedido</p>
          ) : (
            <>
              <OrderContents
                order={state.order}
                dispatch={dispatch}
              />

              <TipPercentageForm
                dispatch={dispatch}
                tip={state.tip}
              />

              <OrderTotals
                order={state.order}
                tip={state.tip}
                total={total}
                dispatch={dispatch}
              />
            </>
          )}

        </div>
      </main>
    </>
  )
}

export default App

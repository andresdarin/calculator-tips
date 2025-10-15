import { MenuItem } from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem } = useOrder();

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
              addItem={addItem}
            />
          ))}

        </div>
        <div className="space-y-4 border p-4 rounded border-gray-300">
          <h2 className="text-4xl text-center">Consumo</h2>

          <OrderContents
            order={order}
          />
        </div>
      </main>
    </>
  )
}

export default App

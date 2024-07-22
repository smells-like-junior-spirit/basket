import './App.css';
import Basket from "./components/Basket"

function App() {

  const items = [
    {
      uid: "86ed58db-082d-45ab-aa81-5218059349cb",
      title: "Товар1",
      description: "описание товара 1",
      price: 1200
    },
    {
      uid: "05542e59-7a90-4e80-bf9d-78967f272049",
      title: "Товар2",
      description: "описание товара 2",
      price: 800
    },
    {
      uid: "7793e4f0-fe86-47cc-98f6-e01b6beeb3af",
      title: "Товар3",
      description: "описание товара 3",
      price: 250
    }
  ].map(item => ({ ...item, qty: 1 }));

  return (
    <div className="App">
      <header className="App-header">
        <h1>Корзина</h1>
        <Basket items={items} />
      </header>
    </div>
  );
}

export default App;

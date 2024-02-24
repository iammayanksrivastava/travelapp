import { useState } from "react";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import PackingList from "./components/PackingList";
import Form from "./components/Form";

export default function App() {
  const [items, setItems] = useState([]);

  function handleClearItems() {
    const confirmAlert = window.confirm("Are you sure?");
    if (confirmAlert) setItems([]);
  }

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onResetItem={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

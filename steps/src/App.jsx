import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (item) => {
    const newItems = [...items];
    const sameDate = newItems.find((el) => el.nameDate === item.nameDate);
    
    if (sameDate) {
      sameDate.namePath += item.namePath;
    } else {
      newItems.push(item);
      newItems.sort((a, b) => Date.parse(b.nameDate) - Date.parse(a.nameDate));
    }

    setItems(newItems);
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((el) => el.id !== id));
  };

  return (
    <div className="counter">
      <Form onAdd={handleAdd} />
      <Table forms={items} onDelete={handleDelete}/>
    </div>
  );
}

export default App

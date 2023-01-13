import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("filter by category");
  console.log(items)

  const itemsToDisplay = items.filter((item) => {
    console.log(item)
    if (selectedCategory === "filter by category") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  function handleSelectedCategory(event){
    setSelectedCategory(event.target.value);

  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelectedCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

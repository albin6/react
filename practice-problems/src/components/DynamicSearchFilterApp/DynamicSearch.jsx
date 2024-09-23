import React, { useState } from "react";
import { items } from "../../utils/DynamicSearchData";

function DynamicSearch() {
  const [filteredItems, setFilteredItems] = useState(items);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={() =>
          setFilteredItems(
            items.filter(
              (item) =>
                item.category.includes(searchTerm) ||
                item.title.includes(searchTerm)
            )
          )
        }
      >
        search
      </button>
      <br />
      <br />
      <div>
        {filteredItems.map((item) => (
          <div
            key={item.id}
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{item.title}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DynamicSearch;

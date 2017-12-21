import React from "react";

export default ({ items, handleItemSelect, active }) => (
  <ul className="list-group">
    {items.map(item => (
      <li
        key={item.id}
        onClick={handleItemSelect(item)}
        className={`${
          active.item.id === item.id ? "active" : ""
        } list-group-item`}
      >
        {" "}
        {item.name}
      </li>
    ))}
    {!items.length && <li className="list-group-item">No Records</li>}
  </ul>
);

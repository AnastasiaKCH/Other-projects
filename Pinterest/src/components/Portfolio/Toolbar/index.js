import React from "react";
import styles from "./Toolbar.css";

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (<div className="buttons">
    {filters.map((filter) => {
        return (<button key={filter} className={filter === selected ? 'active' : 'container'} onClick={onSelectFilter}>{filter}</button>);
    })}
  </div>);

}

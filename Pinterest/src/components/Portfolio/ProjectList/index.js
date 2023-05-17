import React from "react";
import styles from "./ProjectList.css";

export default function ProjectList({ project }) {
    return (<div className="pin_container">
        {project.map((card, index) => {
            if (index === 0 || index === 2 || index === 4 || index === 6 || index === 12 || index === 15) {
                return (<div key={index} className="card_small" category={card.category} idName="card"><img src={card.img} width="320px" height="250px" /></div>);
            } else if (index === 1 || index === 5 || index === 8 || index === 10 || index === 13 || index === 16) {
                return (<div key={index} className="card_medium" category={card.category} idName="card"><img src={card.img} width="320px" height="320px" /></div>);
            } else if (index === 3 || index === 7 || index === 9 || index === 11 || index === 14) {
                return (<div key={index} className="card_large" category={card.category} idName="card"><img src={card.img} width="320px" height="430px" /></div>);
            }
        })}
    </div >);
}
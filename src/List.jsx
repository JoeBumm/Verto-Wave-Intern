import React from 'react'

function List(props) {
    const lowCaloriesFruits = props.items.filter((fruit) => fruit.price < 30);
    // This map function is used to create a list of items from the fruits array
    // Notice how we are using the key prop to uniquely identify each item in the list (id)
    const ListItems = lowCaloriesFruits.map((fruit) => <li key={fruit.id}>{fruit.name}: <b>{fruit.price}</b></li>); 
    return(
        <ol>
            <div>
            <h3>{props.category}</h3>
            {ListItems}
            </div>
        </ol>
    ); 
}

export default List
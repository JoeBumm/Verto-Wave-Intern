import React from 'react'
import Card from './Card'
import Student from './Student'
import './App.css'
import List from './List'
import Button from './Button'
import Mycomponent from './Mycomponent'

function App() {
    const fruits = [{ id: 1, name: "apple", price: 10 },
    { id: 2, name: "banana", price: 20 },
    { id: 3, name: "cherry", price: 30 },
    { id: 4, name: "date", price: 40 },
    { id: 5, name: "elderberry", price: 50 }];

    const vegetables = [{ id: 6, name: "potato", price: 10 },
    { id: 7, name: "celery", price: 20 },
    { id: 8, name: "carrots", price: 30 },
    { id: 9, name: "corn", price: 40 },
    { id: 10, name: "boroccoli", price: 50 }];

    const listitem = fruits[0];
    console.log(listitem)
    return (
        <>
            {/* <div className="studentcard">
        
            <Student name="VERTO WAVE" location="Sheraton Al Matar" />
            <Student name="CIB" location="Dokki" />
            <Student name="Microsoft" location="Smart Village" />
            <Student name="IBM" location="dasdad" />
            </div> */}
            <List items={fruits} category="Fruits" />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </>
    )
}

export default App
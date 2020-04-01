import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Person.css';
import Added from '../Added/Added';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Cart from '../../Cart/Cart';

const Person = (props) => {
    const first15 = fakeData.slice(0,15);
    const [person, setPerson] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddPerson = (props) =>{
        console.log('person added');
        const newCart = [...cart,person];
        setCart(newCart);
         
    }

    return (
        <div className="person-container">
            <div className="addPerson-container">
                
                    {
                        person.map(person =><Added 
                        handleAddPerson={handleAddPerson}
                        person={person}></Added>)
                    }
                
            </div>
            <div className="add-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Person;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Added.css';

const Added = (props) => {
  //  console.log(props.person);
    const {img, name,email,salary,company,phone} = props.person;
    
    return (
        <div className="friend">
            <div>
                <img src= {img} className="friend-img" alt=""/>
            </div>
            <div className="friend-info">
                <h3>Name: {name} </h3>
                <p>Email: {email}</p>
                <p>Company: {company}</p>
                <p>Phone: {phone}</p>
                <p>Salary: ${salary}.</p>
                <br/>
                <button className="add-button" 
                onClick={() => props.handleAddPerson(props.person)}> <FontAwesomeIcon icon={faUserPlus} /> Add friend</button>

            </div>
            
        </div>
    );
};

export default Added;
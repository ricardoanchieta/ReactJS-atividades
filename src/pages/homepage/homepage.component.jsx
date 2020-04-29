import * as React from 'react';
import './homepage.styles.css';
import '../../App.css';
import {Link} from 'react-router-dom';

export default function Homepage(){
    return(
        <div className="container">
            <h1 className="header center orange-text">
                Homepage
            </h1>
            <ul className="center">
                <li>
                    <Link to = "/ToDoList">
                        TO DO list
                    </Link>
                </li>
            </ul>
        </div>
    )
}



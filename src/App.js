import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ToDoList from './pages/ToDoList/ToDoList.component';


function App() {
    return (
		<div>
			<Switch>
				<Route exact path='/' component={Homepage}/>
				<Route exact path='/ToDoList' component={ToDoList} />
			</Switch>
		</div>
    );
}

export default App;
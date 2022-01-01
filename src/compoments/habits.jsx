import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
    
    //컴포넌트가 업데이트 될때마다
    /*componentDidUpdate(){
    }
    */

    handleIncrement = (habit) => {
        this.props.onIncrement(habit)
    };
    handleDecrement = (habit) =>{
        this.props.onDecrement(habit)

    };
    handleDelete = (habit) =>{
        this.props.onDelete(habit)
    };
    handleAdd = name =>{
        this.props.onAdd(name)
    }
    render() {
        console.log('habits');
        return (  
            <> 
            <HabitAddForm onAdd = {this.handleAdd}></HabitAddForm>
            <ul> 
              {this.props.habits.map(habit =>
                <Habit key={habit.id} 
                habit={habit} 
                onIncrement = {this.handleIncrement}
                onDecrement = {this.handleDecrement}
                onDelete = {this.handleDelete}
                />
                )} 
           </ul>
           <button className='habits-reset' onClick= {this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;
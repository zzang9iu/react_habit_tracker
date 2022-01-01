import React, { PureComponent } from 'react';

class Habit extends PureComponent {

  

    componentDidMount(){
        console.log(`habit : ${this.props.habit.name} mounted`);
    }
    componentWillUnmount(){
        console.log(`habit : ${this.props.habit.name} will unmounted`);
    }


  
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    }
    handleDecrease = () =>{
        this.props.onDecrement(this.props.habit);
    }
    handelDelete = () =>{
        this.props.onDelete(this.props.habit);
    }

    render() {
        const {name,count} = this.props.habit;
        return (
            <li className='habit'>
              <span className='habit-name'>{name}</span>
              <span className='habit-count'>{count}</span> 
            <button className='habit-button habit-increase' onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
            </button>
            <button className='habit-button habit-decrease' onClick={this.handleDecrease}>
            <i className="fas fa-minus-square"></i>
            </button>
            <button className='habit-button habit-delete' onClick={this.handelDelete}>
            <i className="fas fa-trash"></i>
            </button>
            </li>
        );
    }
}

export default Habit;
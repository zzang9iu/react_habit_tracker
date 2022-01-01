import React, { memo, PureComponent } from 'react';

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event =>{
    event.preventDefault();
    const name =   inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
    };
    return (
        <form ref = {formRef} className='add-form' onSubmit={onSubmit}>
            <input type='text' ref = {inputRef} placeholder ='Habit' className='add-input'/>
            <button className='add-button'>Add</button>
        </form>
    );
    });  
export default HabitAddForm;



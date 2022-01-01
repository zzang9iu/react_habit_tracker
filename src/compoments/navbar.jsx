import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
    render() {
        console.log('navar');
        return (
            <div className='navbar'>
                <i className='navar-log fas fa-leaf'></i>
            <span>Habit Tracker</span>
            <span className='navar0count'>{this.props.totalCount}</span>
            </div>
        );
    }
}

export default Navbar;
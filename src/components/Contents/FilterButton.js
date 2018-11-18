import React, { Component } from 'react';

class FilterButton extends Component {
  render() {
    const { title, isActive, onClick } = this.props
    return (<li className={title}>
      <button className={['btn', isActive ? 'active' : 'inactive'].join(' ')} onClick={onClick}>
        {title}
      </button>
    </li>)
  }
}

export default FilterButton;

import React from 'react';
import classes from '../modules/Sidebar.module.scss'

const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <div className={classes['sidebar']}>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onSelectCategory(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

// props an object of whatever gets passed in
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
      {/* /* can add more buttons similar to it
      <Button color="blue" text="Hello 1" />
      <Button color="red" text="Hello 2" /> */}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

// prop types
Header.propTypes = {
  title: PropTypes.string,
};

// can also style in this way and add {headingStyle} in h1 style
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// };

export default Header;

import React from 'react';
import PropTypes from 'prop-types';

const TodoCard = ({ title }) => (
  <div
    style={{
      border: '1px solid',
      marginBottom: 10,
      padding: 10,
      borderRadius: 5,
    }}
  >
    <h4>{title}</h4>
  </div>
);

export default TodoCard;

TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
};

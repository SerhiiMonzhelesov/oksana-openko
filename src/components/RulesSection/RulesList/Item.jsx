import React from 'react';
import { StyledRulesItem } from './Item.styled';
import sprite from '../../../assets/images/icons.svg';
import PropTypes from 'prop-types';

const Item = ({ text }) => {
  return (
    <StyledRulesItem>
      <svg viewBox="0 0 32 32">
        <use href={sprite + '#check-light'}></use>
      </svg>
      <p>{text}</p>
    </StyledRulesItem>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Item;

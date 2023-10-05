import React from 'react';
import { StyledIcon, StyledRulesItem, StyledRulesText } from './Item.styled';
import sprite from '../../../assets/images/icons.svg';
import PropTypes from 'prop-types';

const Item = ({ text }) => {
  return (
    <StyledRulesItem>
      <StyledIcon viewBox="0 0 32 32">
        <use href={sprite + '#check-light'}></use>
      </StyledIcon>
      <StyledRulesText>{text}</StyledRulesText>
    </StyledRulesItem>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Item;

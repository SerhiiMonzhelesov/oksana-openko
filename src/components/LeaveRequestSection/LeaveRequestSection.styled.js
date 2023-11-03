import styled from 'styled-components';
import leaveRequestBgMobile from '../../assets/images/leave-request-bg/leave-request-bg-mobile.png';
import leaveRequestBgTablet from '../../assets/images/leave-request-bg/leave-request-bg-tablet.png';
import leaveRequestBgDesktop from '../../assets/images/leave-request-bg/leave-request-bg-desktop.png';
import Select from 'react-select';

export const StyledSectionInner = styled.div`
  margin: 0 auto;
  background-image: url(${leaveRequestBgMobile});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  padding: ${props =>
    props.$visibleForm ? '112px 0 192px 0' : '112px 0 180px 0'};

  @media screen and (min-width: 768px) {
    background-image: url(${leaveRequestBgTablet});
    padding: ${props =>
      props.$visibleForm ? '248px 0 248px 0' : '176px 0 316px 0'};
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${leaveRequestBgDesktop});
    padding: ${props =>
      props.$visibleForm ? '136px 0 152px 0' : '152px 0 128px 0'};
  }
`;

export const StyledSectionTitle = styled.h2`
  margin-bottom: 32px;
  font-family: 'ProximaNova-500', sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  color: var(--secondary-text);

  @media screen and (min-width: 768px) {
    margin-bottom: 31px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const StyledButtonRequest = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 344px;
  margin: 0 auto;
  padding: 15px 0;
  font-family: 'ProximaNova-600', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: var(--secondary-text);
  background-color: var(--bg-primery);
  border: none;
  cursor: pointer;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #9589e1;
  }

  &:active {
    background-color: #5b4dac;
  }

  @media screen and (min-width: 768px) {
    max-width: 416px;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 344px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 416px;
  }
`;

export const StyledInputWrapper = styled.div``;

export const StyledSpanError = styled.span`
  display: block;
  height: 20px;
  margin-bottom: 12px;
  font-family: 'ProximaNova-400', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: #ca250e;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 4px;
  padding: 14px 12px;
  font-family: 'ProximaNova-400', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: var(--main-text);
  background-color: var(--bg-main);
  border: none;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: 2px solid var(--bg-primery);
  }

  &::placeholder {
    font-family: 'ProximaNova-500', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: #979899;
  }
`;

export const StyledTextarea = styled.textarea`
  display: block;
  height: 48px;
  max-height: 220px;
  width: 100%;
  max-width: 344px;
  resize: vertical;
  margin-bottom: 32px;
  padding: 14px 12px 13px 12px;
  font-family: 'ProximaNova-400', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: var(--main-text);
  background-color: var(--bg-main);
  border: none;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: 2px solid var(--bg-primery);
  }

  &::placeholder {
    font-family: 'ProximaNova-500', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    color: #979899;
  }

  @media screen and (min-width: 768px) {
    max-width: 416px;
  }
  /* Для веб-кит браузеров (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 5px; /* Ширина полосы прокрутки */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--bg-brown); /* Цвет ползунка */
    border-radius: 5px; /* Скругление углов ползунка */
  }
`;

export const StyledSelect = styled(Select)`
  /* Добавьте остальные стили здесь */
  background-color: black;

  &.option:hover {
    background-color: red; // Цвет фона при наведении
  }
`;

export const stylesSelect = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    marginBottom: '4px',
    padding: '7px 2px',
    backgroundColor: 'var(--bg-main)',
    border: 'none',
    borderRadius: '0',
    outline: '2px solid transparent',
    outlineColor: state.isFocused ? 'var(--bg-primery)' : 'transparent',
    cursor: 'pointer',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  }),

  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: 'ProximaNova-400',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    color: 'var(--main-text)',
  }),

  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: 'ProximaNova-500',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '16px',
    color: '#c5c1c1',
    outlineColor: state.isFocused ? 'var(--bg-primery)' : 'transparent',
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  }),

  indicatorSeparator: (baseStyles, state) => ({
    ...baseStyles,
    display: 'none',
  }),

  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: 'var(--primery-text)',
  }),

  menu: (baseStyles, state) => ({
    ...baseStyles,
    maxWidth: '268px',
    marginTop: '17px',
    left: 'auto',
    fontSize: '46px',
    background: 'var(--bg-main)',
    borderRadius: '0',
    position: 'absolute',
    right: 0,
    zIndex: 2,

    ':after': {
      position: 'absolute',
      display: 'block',
      content: '""',
      width: 28,
      height: 12,
      borderLeft: '14px solid transparent',
      borderRight: '14px solid transparent',
      borderBottom: '12px solid #F2F1F3',
      top: -9,
      right: 0,
      zIndex: 1,
    },
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    fontFamily: 'ProximaNova-500',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '16px',
    color: 'var(--primery-text)',
    backgroundColor: state.isSelected ? '#E1DEE5' : 'none',
    borderBottom: '1px solid rgba(136, 123, 121, 0.20)',
    cursor: 'pointer',

    ':hover': {
      backgroundColor: '#E1DEE5',
    },

    ':active': {
      backgroundColor: 'none',
    },

    ':last-child': {
      borderBottom: 'none',
    },
  }),
};

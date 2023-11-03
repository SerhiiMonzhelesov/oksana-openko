import { useState, useEffect } from 'react';
import Select from 'react-select';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import Container from 'components/Container/Container';
import Feedback from 'components/Feedback/Feedback';
import ButtonToTop from 'components/ButtonToTop/ButtonToTop';

import {
  StyledButtonRequest,
  StyledForm,
  StyledInput,
  StyledInputWrapper,
  StyledSectionInner,
  StyledSectionTitle,
  StyledSpanError,
  StyledTextarea,
  stylesSelect,
} from './LeaveRequestSection.styled';
import { addContact } from '../../services/api-service.js';
import { formValidation } from 'helpers/formValidation';
import { dataFormat, dataServices } from 'data/data-request';

export default function LeaveRequestSection() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: null,
    format: null,
    question: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    service: '',
    format: '',
  });

  const handleNameChange = event => {
    if (/^[a-zA-Zа-яА-ЯґҐєЄіІїЇ\s]*$/.test(event.target.value)) {
      setFormData({
        ...formData,
        name: event.target.value,
      });
    } else {
      setErrors({
        ...errors,
        name: 'Введіть своє ім’я кирилицею або латиницею',
      });
    }
  };

  const handleCommentChange = event => {
    setFormData({
      ...formData,
      question: event.target.value,
    });
  };

  const handleServiceChange = selectedOption => {
    setFormData({
      ...formData,
      service: selectedOption,
    });
  };

  const handleFormatChange = selectedOption => {
    setFormData({
      ...formData,
      format: selectedOption,
    });
  };

  const handlePhoneChange = value => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const handleFormReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: null,
      format: null,
      question: '',
    });
  };

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('USER_DATA'));
    if (storedUserData) {
      setFormData(storedUserData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('USER_DATA', JSON.stringify(formData));
  }, [formData]);

  const handleSubmit = async event => {
    event.preventDefault();

    const objErrors = formValidation(formData);
    setErrors(objErrors);

    if (Object.keys(objErrors).length === 0 && formData)
      try {
        const formDataForBackend = {
          ...formData,
          service: formData.service.value,
          format: formData.format.value,
        };

        setIsLoading(true);
        setIsFormVisible(false);
        const data = await addContact(formDataForBackend);

        if (data) {
          setIsLoading(false);
          handleFormReset();
          localStorage.removeItem('USER_DATA');
        }
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log('Помилка при надсиланні запиту:', error.message);
      }
    return;
  };

  const handleFeedbackClose = () => {
    setIsFormVisible(true);
    setIsError(false);
  };

  return (
    <section id="contacts">
      <StyledSectionInner $visibleForm={isFormVisible}>
        <Container>
          {isFormVisible ? (
            <>
              <StyledSectionTitle>Залишити заявку</StyledSectionTitle>
              <StyledForm onSubmit={handleSubmit}>
                <StyledInputWrapper>
                  <StyledInput
                    data-value
                    type="text"
                    aria-label="Ваше ім'я"
                    name="name"
                    placeholder="Ім’я*"
                    maxLength="50"
                    value={formData.name}
                    onChange={handleNameChange}
                  />
                  <StyledSpanError
                    style={{
                      visibility: errors.name ? 'visible' : 'hidden',
                    }}
                  >
                    {errors.name}
                  </StyledSpanError>
                </StyledInputWrapper>

                <StyledInputWrapper>
                  <PhoneInput
                    aria-label="Ваш номер телефону"
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="UA"
                    maxLength="50"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                  <StyledSpanError
                    style={{
                      visibility: errors.phone ? 'visible' : 'hidden',
                    }}
                  >
                    {errors.phone}
                  </StyledSpanError>
                </StyledInputWrapper>

                <StyledInputWrapper>
                  <Select
                    aria-label="Оберіть послугу"
                    styles={stylesSelect}
                    options={dataServices}
                    value={formData.service}
                    onChange={handleServiceChange}
                    placeholder="Послуга*"
                  />
                  <StyledSpanError
                    style={{
                      visibility: errors.service ? 'visible' : 'hidden',
                    }}
                  >
                    {errors.service}
                  </StyledSpanError>
                </StyledInputWrapper>

                <StyledInputWrapper>
                  <Select
                    aria-label="Оберіть формат"
                    styles={stylesSelect}
                    options={dataFormat}
                    value={formData.format}
                    onChange={handleFormatChange}
                    placeholder="Формат*"
                  />
                  <StyledSpanError
                    style={{
                      visibility: errors.format ? 'visible' : 'hidden',
                    }}
                  >
                    {errors.format}
                  </StyledSpanError>
                </StyledInputWrapper>

                <StyledTextarea
                  type="text"
                  aria-label="Ваше питання (до 500 символiв)"
                  name="question"
                  maxLength="500"
                  placeholder="Ваше питання (до 500 символiв)"
                  value={formData.question}
                  onChange={handleCommentChange}
                />

                <StyledButtonRequest type="submit">
                  Відправити
                </StyledButtonRequest>
              </StyledForm>

              <ButtonToTop />
            </>
          ) : (
            <Feedback
              onFeedbackClose={handleFeedbackClose}
              isError={isError}
              isLoading={isLoading}
            />
          )}
        </Container>
      </StyledSectionInner>
    </section>
  );
}

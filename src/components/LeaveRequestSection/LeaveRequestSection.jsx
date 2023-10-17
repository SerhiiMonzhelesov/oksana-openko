import Container from 'components/Container/Container';
import Select from 'react-select';
import { useState, useEffect } from 'react';
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
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { dataFormat, dataServices } from 'data/data-request';
import ButtonToTop from '../ButtonToTop/ButtonToTop';
import Feedback from 'components/Feedback/Feedback';

export default function LeaveRequestSection() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFeedbackVisible, setIsFeedbackVisible] = useState(false);
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
  const BASE_URL = 'http://localhost:3000/api';

  const handleNameChange = event => {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  };

  const handleCommentChange = event => {
    setFormData({
      ...formData,
      question: event.target.value,
    });
  };

  const handleServiceChange = selectedOption => {
    console.log(selectedOption.value);
    setFormData({
      ...formData,
      service: selectedOption,
    });
  };

  const handleFormatChange = selectedOption => {
    console.log(selectedOption.value);
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

  const handleSubmit = event => {
    event.preventDefault();

    const newErrors = {};
    if (formData.name.length === 0) {
      newErrors.name = 'Введіть ім’я';
    } else if (formData.name.length <= 1 || formData.name.length > 50) {
      newErrors.name = "Ім'я має містити від 2 до 50 символів";
    }

    if (!formData.phone) {
      newErrors.phone = 'Вкажіть номер телефону';
    } else if (!formData.phone) {
      newErrors.phone = 'Номер телефону повинен містити від ...';
    }

    if (!formData.service) {
      newErrors.service = 'Виберіть послугу';
    }

    if (!formData.format) {
      newErrors.format = 'Виберіть формат';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsFormSubmitted(true);
      setIsFeedbackVisible(true);
      localStorage.removeItem('USER_DATA');

      const formDataForBackend = {
        ...formData,
        service: formData.service.value,
        format: formData.format.value,
      };

      console.log(formDataForBackend);

      function addContact(formData) {
        const options = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        };

        return fetch(`${BASE_URL}/application`, options)
          .then(response => response.json())
          .catch(err => {
            console.warn(err.message);
          });
      }

      addContact(
        formDataForBackend

        // format: 'offline',
        // name: 'Андрей',
        // phone: '+380667777778',
        // question: 'пппппппппппппппппппппппппппппп',
        // service: 'Запрошений спікер',

        // name: 'Петруха',
        // phone: '+380667777778',
        // service: 'Психотерапія',
        // format: 'online',
        // question: 'лролролролрло',

        // name: 'Taras',
        // phone: '+380667777778',
        // service: 'Психотерапія',
        // format: 'online',
        // question: 'hello',
      );
    }

    // handleFormReset();
  };

  const handleFeedbackClose = () => {
    setIsFormSubmitted(false);
    setIsFeedbackVisible(false);
  };

  return (
    <section id="contacts">
      <StyledSectionInner>
        <Container>
          {isFormSubmitted ? (
            <Feedback onFeedbackClose={handleFeedbackClose} />
          ) : (
            <>
              <StyledSectionTitle>Залишити заявку</StyledSectionTitle>
              <StyledForm onSubmit={handleSubmit}>
                <StyledInputWrapper>
                  <StyledInput
                    type="text"
                    name="name"
                    placeholder="Ім’я*"
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
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="UA"
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
                  name="question"
                  maxLength="200"
                  placeholder="Ваше питання"
                  value={formData.question}
                  onChange={handleCommentChange}
                />

                <StyledButtonRequest type="submit">
                  Відправити
                </StyledButtonRequest>
              </StyledForm>

              <ButtonToTop />
            </>
          )}
        </Container>
      </StyledSectionInner>
    </section>
  );
}

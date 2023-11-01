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
import { addContact } from '../../services/api-service.js';

export default function LeaveRequestSection() {
  const [isFormVisible, setIsFormVisible] = useState(true);
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

    const newErrors = {};
    if (formData.name.length === 0) {
      newErrors.name = 'Введіть ім’я';
    } else if (formData.name.length <= 1 || formData.name.length > 50) {
      newErrors.name = "Ім'я має містити від 2 до 50 символів";
    } else if (formData.name.includes('  ')) {
      newErrors.name = 'Введіть правильне ім’я';
    }

    if (!formData.phone) {
      newErrors.phone = 'Вкажіть номер телефону';
    } else if (formData.phone.length < 10 || formData.phone.length > 50) {
      newErrors.phone = 'Некоректно введений номер';
    }

    if (!formData.service) {
      newErrors.service = 'Виберіть послугу';
    }

    if (!formData.format) {
      newErrors.format = 'Виберіть формат';
    }

    setErrors(newErrors);

    try {
      if (Object.keys(newErrors).length === 0) {
        setIsFormVisible(false);

        const formDataForBackend = {
          ...formData,
          service: formData.service.value,
          format: formData.format.value,
        };

        const data = await addContact(formDataForBackend);

        if (data) {
          localStorage.removeItem('USER_DATA');
        }

        handleFormReset();
      }
    } catch (error) {
      console.log('Помилка при надсиланні запиту:', error.message);
      setIsError(true);
    }
  };

  const handleFeedbackClose = () => {
    setIsFormVisible(true);
    setIsError(false);
  };

  const mediaQuery768px = window.matchMedia('(min-width: 768px)');
  const mediaQuery1440px = window.matchMedia('(min-width: 1440px)');

  let paddingStyle = { paddingTop: '112px', paddingBottom: '192px' };

  if (!isFormVisible) {
    paddingStyle = { paddingTop: '112px', paddingBottom: '180px' };
  }

  if (mediaQuery768px.matches) {
    if (isFormVisible) {
      paddingStyle.paddingTop = '248px';
      paddingStyle.paddingBottom = '248px';
    } else {
      paddingStyle.paddingTop = '176px';
      paddingStyle.paddingBottom = '316px';
    }
  }

  if (mediaQuery1440px.matches) {
    if (isFormVisible) {
      paddingStyle.paddingTop = '136px';
      paddingStyle.paddingBottom = '152px';
    } else {
      paddingStyle.paddingTop = '152px';
      paddingStyle.paddingBottom = '128px';
    }
  }

  return (
    <section id="contacts">
      <StyledSectionInner style={paddingStyle}>
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
            <Feedback onFeedbackClose={handleFeedbackClose} isError={isError} />
          )}
        </Container>
      </StyledSectionInner>
    </section>
  );
}

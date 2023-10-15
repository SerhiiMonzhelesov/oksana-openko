import Container from 'components/Container/Container';
import Select from 'react-select';
import { useState } from 'react';
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
    services: null,
    format: null,
    comment: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    services: '',
    format: '',
  });

  const handleNameChange = event => {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  };

  const handleCommentChange = event => {
    setFormData({
      ...formData,
      comment: event.target.value,
    });
  };

  const handleServiceChange = selectedOption => {
    setFormData({
      ...formData,
      services: selectedOption,
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
      services: null,
      format: null,
      comment: '',
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log('message');

    const newErrors = {};
    if (formData.name.length <= 1) {
      newErrors.name = 'Введіть ім’я';
    }
    if (!formData.phone) {
      newErrors.phone = 'Вкажіть номер телефону';
    }
    if (!formData.services) {
      newErrors.services = 'Виберіть послугу';
    }
    if (!formData.format) {
      newErrors.format = 'Виберіть формат';
    }

    setErrors(newErrors);

    console.log(formData);

    if (Object.keys(newErrors).length === 0) {
      setIsFormSubmitted(true);
      setIsFeedbackVisible(true);
      // Здесь вы можете отправить formData на бэкенд, например, с использованием fetch или axios.
      // Пример:
      // fetch('/your-backend-endpoint', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      //   .then(response => {
      //     // Обработка ответа от бэкенда
      //   })
      //   .catch(error => {
      //     // Обработка ошибок
      //   });
      // };
    }

    handleFormReset();
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
                    value={formData.services}
                    onChange={handleServiceChange}
                    placeholder="Послуга*"
                  />
                  <StyledSpanError
                    style={{
                      visibility: errors.services ? 'visible' : 'hidden',
                    }}
                  >
                    {errors.services}
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
                  name="comment"
                  maxLength="200"
                  placeholder="Ваше питання"
                  value={formData.comment}
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

export function formValidation(formData, newErrors) {
  if (formData.name.length === 0) {
    newErrors.name = 'Введіть ім’я';
  } else if (formData.name.length <= 1 || formData.name.length > 50) {
    newErrors.name = "Ім'я має містити від 2 до 50 символів";
  } else if (formData.name.includes('  ')) {
    newErrors.name = 'Введіть правильне ім’я';
  }

  if (!formData.phone) {
    newErrors.phone = 'Вкажіть номер телефону';
  } else if (formData.phone.length < 11 || formData.phone.length > 50) {
    newErrors.phone = 'Некоректно введений номер';
  }

  if (!formData.service) {
    newErrors.service = 'Виберіть послугу';
  }

  if (!formData.format) {
    newErrors.format = 'Виберіть формат';
  }

  return newErrors;
}

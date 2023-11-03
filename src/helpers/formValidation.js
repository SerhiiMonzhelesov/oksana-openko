export function formValidation(formData) {
  let objErrors = {};

  if (formData.name.length === 0) {
    objErrors.name = 'Введіть ім’я';
  } else if (formData.name.length <= 1 || formData.name.length > 50) {
    objErrors.name = "Ім'я має містити від 2 до 50 символів";
  } else if (formData.name.includes('  ')) {
    objErrors.name = 'Введіть правильне ім’я';
  }

  if (!formData.phone) {
    objErrors.phone = 'Вкажіть номер телефону';
  } else if (formData.phone.length < 11 || formData.phone.length > 50) {
    objErrors.phone = 'Некоректно введений номер';
  }

  if (!formData.service) {
    objErrors.service = 'Виберіть послугу';
  }

  if (!formData.format) {
    objErrors.format = 'Виберіть формат';
  }

  return objErrors;
}

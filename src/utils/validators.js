export default {
  required: value =>
    !value || value === null || (Array.isArray(value) && !value.length)
      ? 'Обязательное поля'
      : undefined,
  password: value =>
    value.length >= 6 ? undefined : 'Пароль должен быть минимум 6 символов',
  email: value => (/\S+@\S+\.\S+/.test(value) ? undefined : 'Невалидная почта'),
  equal: (a, b, text) => (a === b ? undefined : text),
}

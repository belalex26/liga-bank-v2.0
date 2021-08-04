export default function validateInfo(user) {
  let errors = {};

  if (!user.userName) {
    errors.userName = `Пожалуйста, заполните поле`;
  }

  if (!user.password) {
    errors.password = `Пожалуйста, заполните поле`;
  }

  return errors;
}

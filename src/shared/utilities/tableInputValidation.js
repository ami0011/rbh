export default function validateInput(type, value) {
  switch (type) {
    case 'currency':
    case 'number':
      if (value === null || value === undefined || value === '') {
        return false;
      }
      if (value <= 0 || isNaN(value)) {
        return true;
      }
      return false;
    default:
      return false;
  }
}

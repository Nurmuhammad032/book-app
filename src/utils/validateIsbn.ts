export function isValidISBNCode(str: string) {
  let regex = new RegExp(
    /^(?=(?:[^0-9]*[0-9]){10}(?:(?:[^0-9]*[0-9]){3})?$)[\d-]+$/
  );

  if (str == null) {
    return false;
  }

  if (regex.test(str)) {
    return true;
  } else {
    return false;
  }
}

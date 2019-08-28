export const languageEn = {
  id: 'en',
  label: 'EN',
};

export const languageTh = {
  id: 'th',
  label: 'ไทย',
};

export const languageOptions = [languageTh, languageEn];

export function getDefaultLanguage() {
  return languageEn;
}

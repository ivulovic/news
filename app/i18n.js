/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line

const srLocaleData = require('react-intl/locale-data/sr');
const enLocaleData = require('react-intl/locale-data/en');
const esLocaleData = require('react-intl/locale-data/es');
const ruLocaleData = require('react-intl/locale-data/ru');

const srTranslationMessages = require('./translations/sr.json');
const enTranslationMessages = require('./translations/en.json');
const esTranslationMessages = require('./translations/es.json');
const ruTranslationMessages = require('./translations/ru.json');

addLocaleData(srLocaleData);
addLocaleData(enLocaleData);
addLocaleData(esLocaleData);
addLocaleData(ruLocaleData);

const DEFAULT_LOCALE = 'sr';

// prettier-ignore
const appLocales = [
  'sr',
  'en',
  'es',
  'ru'
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, srTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  sr: formatTranslationMessages('sr', srTranslationMessages),
  en: formatTranslationMessages('en', enTranslationMessages),
  es: formatTranslationMessages('es', esTranslationMessages),
  ru: formatTranslationMessages('ru', ruTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;

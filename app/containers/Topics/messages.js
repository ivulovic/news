/*
 * Menu Messages
 *
 * This contains all the text for the Menu component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Menu';

export default defineMessages({
  websiteName: {
    id: `${scope}.website.name`,
    defaultMessage: 'aa',
  },
  attacksOnFreeSpeech: {
    id: `${scope}.free.speech`,
    defaultMessage: '',
  },
  onlineHarassment: {
    id: `${scope}.online.harassment`,
    defaultMessage: '',
  },
  injusticeAndCorruption: {
    id: `${scope}.injustice.corruption`,
    defaultMessage: '',
  }
});

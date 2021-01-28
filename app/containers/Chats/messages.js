/*
 * Chats Messages
 *
 * This contains all the text for the Chats container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Chats';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Chats container!',
  },
});

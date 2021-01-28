/**
 *
 * Asynchronously loads the component for Chats
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));

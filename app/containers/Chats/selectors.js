import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the chats state domain
 */

const selectChatsDomain = state => state.chats || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Chats
 */

const makeSelectChats = () =>
  createSelector(
    selectChatsDomain,
    substate => substate,
  );

export default makeSelectChats;
export { selectChatsDomain };

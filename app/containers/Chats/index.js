/**
 *
 * Chats
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectChats from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Chat from '../../components/Chat';
export function Chats() {
  useInjectReducer({ key: 'chats', reducer });
  useInjectSaga({ key: 'chats', saga });
  const [muteEveryone, setMuteEveryone] = useState(false);
  const [muteId, setMuteId] = useState([]);
  const [username, setUsername] = useState([
    { id: 1, name: 'Manish' },
    { id: 2, name: 'arjan' },
    { id: 3, name: 'nikesh' },
  ]);
  console.log('mute', muteEveryone);
  return (
    <div>
      {username.map((uname, i) => (
        <Chat
          mute={muteEveryone}
          setMute={setMuteEveryone}
          key={i}
          username={uname.name}
          id={uname.id}
          setUsername={setUsername}
          user={username}
        />
      ))}
    </div>
  );
}

Chats.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  chats: makeSelectChats(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Chats);

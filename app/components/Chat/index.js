import { Menu, Dropdown, Button, Modal, Radio } from 'antd';
import { EllipsisOutlined, AudioMutedOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import './Chat.css';
import MuteModal from '../MuteModal';
function Chat(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [isUnmuteVisible, setIsUnmuteVisible] = useState(false);
  const [muteOption, setMuteOption] = useState(false);
  const [mute, setMute] = useState(false);
  const muteEveryone = () => {
    console.log('mute every user');
    props.setMute(true);
    setMute(true);
    setIsVisible(false);
  };
  const muteMentioned = () => {
    setMute(true);
    setIsVisible(false);
  };
  const onDelete = id => {
    const u = props.user.filter(u => u.id !== id);
    props.setUsername(u);
    setIsDeleteVisible(false);
  };
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => setIsVisible(true)}>
          {props.mute || mute ? 'Unmute' : 'Mute'}
        </div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => setIsDeleteVisible(true)}>Delete</div>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Menu className="menu" defaultSelectedKeys={['1']}>
        <Menu.Item
          key={toString(props.id)}
          className="chat"
          style={{
            height: '70px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span>{props.username}</span>
            <span style={{ marginLeft: '5px' }}>
              {(props.mute || mute) && <AudioMutedOutlined />}
            </span>
          </div>
          <Dropdown
            overlay={menu}
            placement="bottomRight"
            trigger="click"
            style={{ height: '13px', marginTop: '15px' }}
          >
            <EllipsisOutlined style={{ height: '9px', marginTop: '8px' }} />
          </Dropdown>
        </Menu.Item>
      </Menu>

      <Modal
        visible={isVisible}
        onCancel={() => setIsVisible(false)}
        onOk={muteOption === 1 ? muteEveryone : muteMentioned}
      >
        <Radio.Group onChange={e => setMuteOption(e.target.value)}>
          <Radio style={radioStyle} value={1}>
            Mute Everyone
          </Radio>
          <Radio style={radioStyle} value={2}>
            Mute @mentioned
          </Radio>
        </Radio.Group>
      </Modal>
      <Modal
        visible={isUnmuteVisible}
        onCancel={() => setIsUnmuteVisible(false)}
        onOk={muteOption === 1 ? muteEveryone : muteMentioned}
      >
        <Radio.Group onChange={e => setMuteOption(e.target.value)}>
          <Radio style={radioStyle} value={1}>
            Unmute Everyone
          </Radio>
          <Radio style={radioStyle} value={2}>
            Unmute @mentioned
          </Radio>
        </Radio.Group>
      </Modal>
      <Modal
        visible={isDeleteVisible}
        onCancel={() => setIsDeleteVisible(false)}
        onOk={() => onDelete(props.id)}
      >
        <h2>Are you sure you want to delete?</h2>
      </Modal>
    </div>
  );
}

Chat.propTypes = {};

export default Chat;

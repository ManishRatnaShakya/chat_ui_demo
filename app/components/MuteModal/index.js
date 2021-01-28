import React from 'react';
import { Modal } from 'antd';
function MuteModal({ visible }) {
  return (
    <div>
      <Modal title="Basic Modal" visible={visible} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default MuteModal;

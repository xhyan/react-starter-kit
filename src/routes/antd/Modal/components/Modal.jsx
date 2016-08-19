import React, {Component} from 'react';
import {Modal, Button} from 'antd';

class AntModal extends Component {

  render() {
    const props = this.props;
    return (
      <div>
        <Button type="primary" onClick={props.onClick}>antd 对话框测试</Button>
        <Modal title="Test Ant Modal" visible={props.modal.visible}
          onOk={props.handleOk} onCancel={props.handleCancel} maskClosable={false}>
          <p>lalalala</p>
          <p>hahahaha</p>
          <p>wawawawa</p>
          <p>hehehehe</p>
        </Modal>
      </div>
    );
  }
}

export default AntModal;

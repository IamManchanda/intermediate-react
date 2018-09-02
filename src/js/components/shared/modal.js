import React from 'react';
import { createPortal } from 'react-dom';

export default class Modal extends React.Component {
  componentDidMount() {
    this.element = document.createElement('div');
    this.modalRoot = document.getElementById('modal');
    this.modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.element);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.element);
  }
}

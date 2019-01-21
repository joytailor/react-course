import React, { Component, createRef } from 'react';

export default class Modal extends Component {
  backdropRef = createRef();

  state = {
    isModalOpen: this.props.isModalOpen,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen } = this.state;
    return nextState.isModalOpen !== isModalOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code !== 'Escape') return;
    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (e.target !== this.backdropRef.current) return;
    this.props.onClose();
  };

  render() {
    return (
      <div
        className="Backdrop"
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className="ModalWindow">{this.props.children}</div>
      </div>
    );
  }
}

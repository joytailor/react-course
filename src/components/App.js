import React, { Component, createRef } from 'react';
import AppHeader from './AppHeader';
import Modal from './Modal';

export default class App extends Component {
  containerRef = createRef();

  state = { isModalOpen: false };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen } = this.state;
    return nextState.isModalOpen !== isModalOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const { isModalOpen } = this.state;

    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    if (!isTargetInsideContainer && isModalOpen) {
      this.closeModal();
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && (
          <Modal onClose={this.closeModal()} ref={this.containerRef} />
        )}
      </div>
    );
  }
}

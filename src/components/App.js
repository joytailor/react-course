import React, { Component } from 'react';
import AppHeader from './AppHeader';
import Modal from './Modal';

export default class App extends Component {
  state = { isModalOpen: false };

  constructor() {
    super();
    this.closeModal = this.closeModal.bind(this);
  }

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
          <Modal onClose={this.closeModal()}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
              illum repellendus perspiciatis animi fugiat, distinctio incidunt
              eligendi porro cupiditate voluptatem excepturi maiores aperiam
              nisi itaque minus accusantium id nulla tempora!
            </p>
            <button type="button" onClick={this.onClose()}>
              Close
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

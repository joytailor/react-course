import React, { Component } from 'react';

export default class Modal extends Component {
  state = {};

  render() {
    return (
      <div className="Backdrop">
        <div className="ModalWindow">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non illum
            repellendus perspiciatis animi fugiat, distinctio incidunt eligendi
            porro cupiditate voluptatem excepturi maiores aperiam nisi itaque
            minus accusantium id nulla tempora!
          </p>
          <button type="button">Close</button>
        </div>
      </div>
    );
  }
}

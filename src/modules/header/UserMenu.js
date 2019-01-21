import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown';
import Avatar from './Avatar';
import AvatarImg from './avatar.jpg';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropdownOpen } = this.state;
    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const { isDropdownOpen } = this.state;

    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    if (!isTargetInsideContainer && isDropdownOpen) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    console.log('Hello');
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { isDropdownOpen } = this.state;
    const { name } = this.state;
    return (
      <div
        onClick={this.openDropdown}
        className="UserMenu"
        ref={this.containerRef}
      >
        <Avatar imgUrl={AvatarImg} />
        <span className="UserName">{name}</span>
        {isDropdownOpen && <Dropdown close={this.closeDropdown} />}
      </div>
    );
  }
}

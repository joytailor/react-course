import { connect } from 'react-redux';
import MenuItem from './MenuItem';

import { menuSelectors } from '../../../features/menu';
import { cartActions } from '../../../features/cart';

const mapStateToProps = state => ({
  item: menuSelectors.getCurrentItem(state),
});

const mapDispatchToProps = {
  addToCart: cartActions.addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuItem);

import { connect } from 'react-redux';
import CartView from './CartView';
import { cartSelectors, cartActions } from '../../features/cart';

const mapStateToProps = state => ({
  items: cartSelectors.getCartProducts(state),
});

const mapDispatchToProps = {
  removeFromCart: cartActions.removeFromCart,
  addToCart: cartActions.addToCart,
  decrementCounter: cartActions.decrementCounter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartView);

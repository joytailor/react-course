import { connect } from 'react-redux';
import CartIconView from './CartIconView';
import { cartSelectors } from '../../../features/cart';

const mapStateToProps = state => ({
  amount: cartSelectors.getCartProductsAmount(state),
});

export default connect(mapStateToProps)(CartIconView);

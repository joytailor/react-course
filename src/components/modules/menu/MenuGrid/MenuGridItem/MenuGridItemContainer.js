import { connect } from 'react-redux';
import MenuGridItem from './MenuGridItem';

import { cartActions } from '../../../../features/cart';

const mapDispatchtoProps = {
  addItemToCart: cartActions.addToCart,
};

export default connect(
  null,
  mapDispatchtoProps,
)(MenuGridItem);

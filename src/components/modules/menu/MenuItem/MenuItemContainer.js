import { connect } from 'react-redux';
import MenuItem from './MenuItem';

import { menuSelectors } from '../../../features/menu';

const mapStateToProps = state => ({
  item: menuSelectors.getCurrentItem(state),
});

export default connect(mapStateToProps)(MenuItem);

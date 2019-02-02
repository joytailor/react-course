import { connect } from 'react-redux';
import MenuGrid from './MenuGrid';

import { menuSelectors } from '../../../features/menu';

const mapStateToProps = state => ({
  items: menuSelectors.getAllMenuItems(state),
});

export default connect(mapStateToProps)(MenuGrid);

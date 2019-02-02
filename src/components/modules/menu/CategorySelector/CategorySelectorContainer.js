import { connect } from 'react-redux';
import CategorySelector from './CategorySelector';

import { menuSelectors } from '../../../features/menu';

const mapStateToProps = state => ({
  options: menuSelectors.getCategories(state),
});

export default connect(mapStateToProps)(CategorySelector);

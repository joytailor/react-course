import { connect } from 'react-redux';
import CategorySelector from './CategorySelector';

import { menuActions, menuSelectors } from '../../../features/menu';

const mapStateToProps = state => ({
  options: menuSelectors.getCategories(state),
  value: menuSelectors.getCurrentCategory(state),
});

const mapDispatchToProps = { onChange: menuActions.changeFilter };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategorySelector);

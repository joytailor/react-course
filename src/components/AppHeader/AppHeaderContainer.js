import { connect } from 'react-redux';
import AppHeader from './AppHeader';

import * as selectors from '../features/session/sessionSelectors';

const mapStateToProps = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppHeader);

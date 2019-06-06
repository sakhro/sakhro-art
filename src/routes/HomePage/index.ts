import { push } from "connected-react-router";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { compose } from "redux";

import { HomePage } from "./HomePage";

const mapDispatchToProps = {
  push,
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  injectIntl,
);

export default enhance(HomePage);

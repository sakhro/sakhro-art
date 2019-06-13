import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { isProductPageSelector, pageTitleKeySelector } from "@redux/Global/GlobalSelectors";

import { Header as View  } from "./Header";

const mapStateToProps = createStructuredSelector({
  isProductPage: isProductPageSelector,
  pageTitleKey: pageTitleKeySelector,
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps),
);

export const Header = enhance(View);

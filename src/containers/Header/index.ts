import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { globalActions } from "@redux/Global/GlobalActions";
import { isHomePageSelector, isProductPageSelector, pageTitleKeySelector } from "@redux/Global/GlobalSelectors";

import { Header as View  } from "./Header";

const mapStateToProps = createStructuredSelector({
  isHomePage: isHomePageSelector,
  isProductPage: isProductPageSelector,
  pageTitleKey: pageTitleKeySelector,
});

const mapDispatchToProps = {
  showNav: globalActions.showNav,
};

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
);

export const Header = enhance(View);

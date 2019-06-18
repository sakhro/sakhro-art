import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { globalActions } from "@redux/Global/GlobalActions";
import { isNavVisibleSelector } from "@redux/Global/GlobalSelectors";

import { Nav as View } from "./Nav";

const mapStateToProps = createStructuredSelector({
  isVisible: isNavVisibleSelector,
});

const mapDispatchToProps = {
  onClose: globalActions.hideNav,
};

export const Nav = connect(mapStateToProps, mapDispatchToProps)(View);

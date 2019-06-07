import { connect } from "react-redux";

import { Hamburger as View } from "./Hamburger";

import { globalActions } from "@redux/Global/GlobalActions";

const mapDispatchToProps = {
  onClick: globalActions.showNav,
};

export const Hamburger = connect(null, mapDispatchToProps)(View);

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { pageTitleKeySelector } from "@redux/Router/RouterSelectors";

import { Header as View } from "./Header";

const mapStateToProps = createStructuredSelector({
  pageTitleKey: pageTitleKeySelector,
});

export const Header = connect(mapStateToProps)(View);

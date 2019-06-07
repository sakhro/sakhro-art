import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { pageTitleKeySelector } from "@redux/Router/RouterSelectors";

import { MainLayout as View } from "./MainLayout";

const mapStateToProps = createStructuredSelector({
  pageTitleKey: pageTitleKeySelector,
});

export const MainLayout = connect(mapStateToProps)(View);

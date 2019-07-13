import { injectIntl } from "react-intl";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { ProductsGrid as View } from "./ProductsGrid";

import { bagsKeysSelector, bagsSelector } from "@redux/Lookbook/LookbookSelectors";

const mapStateToProps = createStructuredSelector({
  bags: bagsSelector,
  bagsKeys: bagsKeysSelector,
});

const enhance = compose(
  connect(mapStateToProps),
  injectIntl,
);

export const ProductsGrid = enhance(View);

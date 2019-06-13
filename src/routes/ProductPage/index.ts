import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import { isProductPageSelector } from "@redux/Global/GlobalSelectors";

import { ProductPage as View } from "./ProductPage";

const mapStateToProps = createStructuredSelector({
  // isProductPage: isProductPageSelector,
});

export default connect(mapStateToProps)(View);

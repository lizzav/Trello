import React, {memo, useMemo} from "react";
import PropTypes from "prop-types";

import "./Card.scss";

const Card = ({ children }) => {
  // console.log("card change")
  // return useMemo(() => <div className="card">{children}</div>, [children]);
  return <div className="card">{children}</div>
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default Card;
// export const Card=memo(CardInner);

import React from "react";

const MenuItem = (props) => {
  // const [index, item, key] = props;

  return (
    <>
      <div className="item_container" key={props.key}>
        <div className="menu_item_box">
          <div className="item_name_box">{props.item.name}</div>
          <div className="price_box">{props.item.price}</div>
          <div className="button_box">
            {/* {props.item.ordered && <h3>Ordered!</h3>} */}
            <button onClick={() => props.onClick(props.index)}>Order</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuItem;

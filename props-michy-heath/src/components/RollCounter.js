

const RollCounter = (props) => {
    return (
        <>
          <h3>Total Rolls</h3>
          <div className="counter">{props.count}</div>
        </>
    );
};

export default RollCounter;
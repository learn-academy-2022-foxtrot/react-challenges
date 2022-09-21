const Rolls = (props) => {
  let list = props.results;
  return (
    <div className="rolls">
      Rolls
      <div className="list-of-nums">
        <ul>
          {list.map((element, i) => (
            <li key={i}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rolls;

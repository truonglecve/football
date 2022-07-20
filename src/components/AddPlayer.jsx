import { useState } from "react";

const inititalState = {
  name: "",
  age: "",
  rate: "",
  position: "",
};

const AddPlayer = (props) => {
  const [playerInfo, setPlayerInfo] = useState(inititalState);
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setPlayerInfo({
      ...playerInfo,
      [name]: value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { onAddPlayer } = props;
    onAddPlayer(playerInfo);
    setPlayerInfo(inititalState);
  };
  return (
    <div className="form-container">
      <h4>Add new player</h4>
      <form className="form-content" onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            onChange={onHandleChange}
            value={playerInfo.name}
          />
        </div>
        <div className="form-control">
          <label htmlFor="position">Position</label>
          <input
            id="position"
            name="position"
            onChange={onHandleChange}
            value={playerInfo.position}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            onChange={onHandleChange}
            value={playerInfo.age}
          />
        </div>
        <div className="form-control">
          <label htmlFor="rate">Rate</label>
          <input
            type="number"
            id="rate"
            name="rate"
            onChange={onHandleChange}
            value={playerInfo.rate}
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddPlayer;

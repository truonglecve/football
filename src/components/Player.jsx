const Player = (props) => {
  const { player, onDeletePlayer } = props;
  const { name, position, age, id, avatar } = player;
  return (
    <div className="player__wrapper">
      <div className="player__avatar">
        <img src={avatar} alt="Player" />
      </div>
      <h1>{name}</h1>
      <p>{position}</p>
      <p>{age}</p>
      <div className="player__delerte-btn" onClick={() => onDeletePlayer(id)}>
        X
      </div>
    </div>
  );
};
export default Player;

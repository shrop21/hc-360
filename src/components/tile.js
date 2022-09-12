
export function TileHeader(props) {
  return (
    <div className='header'>
      <img className='icon' alt="app-icon" src={props.icon} height='20px' />
      <h3>{props.name}</h3>
    </div>
  )
}

export function Tile(props) {
  return (
    <div className='tile app-listing-tile'>
      <TileHeader name={props.name} icon={props.icon} />
      <p>{props.description}</p>
    </div>
  )
}

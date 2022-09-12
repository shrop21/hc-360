import './App.css';

function TileHeader(props) {
  return (
    <div className='header'>
      <img className='icon' alt="app-icon" src={props.icon} height='20px' />
      <h3>{props.name}</h3>
    </div>
  )
}

function Tile(props) {
  return (
    <div className='tile'>
      <TileHeader name={props.name} icon={props.icon} />
      <p>{props.description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src="https://s3.amazonaws.com/images.teladoc.com/member/Logo-Horz-RGB.svg" alt="teladoc-logo" height='40px' />
      </header>
      <h2>Installed Apps</h2>
      <div className='tile-container'>
        <Tile
          name="Medication Manager"
          description="See crucial drug-to-drug interaction warnings about how your meds might conflict, as well as easily import your meds and prescriptions."
          icon="https://www.svgrepo.com/show/143615/pills.svg" />
        <Tile
          name="In + Out: Breathing"
          description="A breathing app that helps you fights anxiety through exercises. Audio cues guide the rhythm of your breath as you breathe in and out."
          icon="https://www.svgrepo.com/show/32602/lungs.svg" />
      </div>
      <h2>Suggested Apps</h2>
      <div className='tile-container'>
      <Tile
          name="White Bright Smile"
          description="Keep up with your dental hygiene! Brush your teeth to your favorite songs, and get reminders to book appointments."
          icon="https://www.svgrepo.com/show/931/tooth.svg" />
        <Tile
          name="Eye Games"
          description="Have fun testing your eyes: reaction time, color blindness, peripheral vision. Health and entertainment collide in this new app!"
          icon="https://www.svgrepo.com/show/41998/eye.svg" />
      </div>
    </div>
  );
}

export default App;

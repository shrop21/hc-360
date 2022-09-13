import React from "react";
import { MEDICATION_MEMBER_1, MEDICATION_MEMBER_2 } from "../data";
import './medication-manager.css';

function WideInfoTile(props) {
  return (
    <div className='tile wide-info-tile'>
      <h3>{props.name}</h3>
      {props.details && props.details.map(detail =>
        <p className="wideDetails" key={detail}>{detail}</p>
      )}
    </div>
  )
}

class MedicationManager extends React.Component {
  constructor(props) {
    super(props);
    const paths = window.location.pathname.split('/');
    const memberId = paths[paths.length - 1];
    this.member = MEDICATION_MEMBER_1;
    if (memberId.includes("2")) {
      this.member = MEDICATION_MEMBER_2;
    }

    this.state = {
      select: this.member[0],
      selectedIndex: 0,
      items: this.member.medications,
      infoTiles: this.member.tiles
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      select: this.member[event.target.selectedIndex],
      selectedIndex: event.target.selectedIndex,
    });
    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  render() {
    return (
      <div className='app'>
        <h2>Medication Manager</h2>
        <div className='tile-container'>
          <div className="tile">
            <div className="select">
              <select id="med-select" className="selectElement" name={this.props.name} value={this.state.select} onChange={this.handleChange}>
                {this.state.items && this.state.items.map((item, index) =>
                  <option key={`${item}-${index}`} value={item}>{item.name}</option>
                )}
              </select>
            </div>
            <p className="medicationDetails">
              Dosage: {this.state.items[this.state.selectedIndex].dosage}
            </p>
            <p className="medicationDetails">
              Treatment: {this.state.items[this.state.selectedIndex].treatment}
            </p>
          </div>
          {this.state.infoTiles && this.state.infoTiles.map(tile =>
            <WideInfoTile key={tile.title} name={tile.title} details={tile.details}/>
          )}
        </div>
      </div>
    );
  }
}

export default MedicationManager;

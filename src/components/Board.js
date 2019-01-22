/* eslint-disable complexity */
import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
  Lines,
  Line,
} from 'react-simple-maps';
import { connect } from 'react-redux';
import {
  spawnGate,
  spawnClue,
  endMythos,
  startUpdate,
  endUpdate,
  addCharacterToMap,
  endAction,
  endEncounter,
} from '../store/mapReducer';
import { spawnedGate, spawnedClue } from '../store/mythosReducer';
import {
  activateCharacter,
  characterRefresh,
  moveCharacter,
  restoreHealth,
  restoreSanity,
  buyTicket,
} from '../store/characterReducer';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: {},
      numactions: 0,
      isMoving: false,
    };
  }

  componentDidUpdate() {
    if (this.props.phase === 'mythos' && !this.props.updating) {
      this.props.startUpdate();
      for (let i = 1; i <= this.props.spawnGates; i++) {
        this.gateSpawn();
      }
      for (let i = 1; i <= this.props.spawnClues; i++) {
        this.clueSpawn();
      }
      this.props.endMythos();
      this.props.endUpdate();
    } else if (
      this.props.phase === 'action' &&
      !this.props.actingCharacter.name
    ) {
      this.props.activateCharacter(this.props.activeCharacters[0]);
    } else if (this.props.phase === 'action' && this.state.numactions === 2) {
      const charIndex = this.props.activeCharacters.findIndex(
        character => character.name === this.props.actingCharacter.name
      );
      if (charIndex + 1 >= this.props.activeCharacters.length) {
        this.props.endAction();
      } else {
        this.setState({
          numactions: 0,
        });
        this.props.activateCharacter(
          this.props.activeCharacters[charIndex + 1]
        );
      }
    } else if (this.props.phase === 'encounter') {
      this.props.activeCharacters.map(character => {
        let characterSpace = this.props.locations.find(
          location => location.name === character.location
        );
        if (characterSpace.monsters.length > 0) {
          characterSpace.monsters.map(monster =>
            this.monsterFight(character, monster)
          );
        }
      });
      this.props.endEncounter();
    }
  }
  gateSpawn = () => {
    const gateIndex = Math.floor(
      Math.random() * this.props.gateLocations.length
    );
    const gateLocation = this.props.locations.find(
      location => location.name === this.props.gateLocations[gateIndex]
    );
    this.props.spawnGate(gateLocation);
    this.props.spawnedGate(gateIndex);
  };

  clueSpawn = () => {
    const clueIndex = Math.floor(
      Math.random() * this.props.clueLocations.length
    );
    const clueLocation = this.props.locations.find(
      location => location.name === this.props.clueLocations[clueIndex]
    );
    this.props.spawnClue(clueLocation);
    this.props.spawnedClue(clueIndex);
  };

  monsterFight = (character, monster) => {
    const sanResults = this.combatTest(character.will.value, monster.sanMod);
    if (sanResults < monster.sanDam) {
      this.props.restoreSanity(character, sanResults - monster.sanDam);
    }
    const healthResults = this.combatTest(
      character.strength.value,
      monster.strMod
    );
    if (healthResults < monster.strDam) {
      this.props.restoreHealth(character, healthResults - monster.strDam);
    }
    return monster.health - healthResults;
  };

  test = (skill, modifier) => {
    for (let i = 1; i <= skill + modifier; i++) {
      let result = Math.floor(Math.random * 6) + 1;
      if (result === 5 || result === 6) {
        return true;
      }
    }
    return false;
  };

  combatTest = (skill, modifier) => {
    let numSuccesses = 0;
    for (let i = 1; i <= skill + modifier; i++) {
      let result = Math.floor(Math.random * 6) + 1;
      if (result === 5 || result === 6) {
        numSuccesses++;
      }
    }
    return numSuccesses;
  };

  actionHandler = evt => {
    if (evt.target.name === 'move') {
      this.setState({
        isMoving: true,
      });
    } else if (evt.target.name === 'rest') {
      this.props.restoreHealth(this.props.actingCharacter, 1);
      this.props.restoreSanity(this.props.actingCharacter, 1);
      this.setState({
        numactions: this.state.numactions + 1,
      });
    } else if (evt.target.name === 'boatticket') {
      this.props.buyTicket(this.props.actingCharacter, 'boat');
      this.setState({
        numactions: this.state.numactions + 1,
      });
    } else if (evt.target.name === 'trainticket') {
      this.props.buyTicket(this.props.actingCharacter, 'train');
      this.setState({
        numactions: this.state.numactions + 1,
      });
    }
  };

  handleClick = evt => {
    if (!this.state.isMoving) {
      this.setState({
        selectedLocation: this.props.locations.find(
          location => location.name === evt.target.attributes.id.value
        ),
      });
    } else {
      this.props.moveCharacter(evt.target.attributes.id.value);
      this.props.addCharacterToMap(
        this.props.actingCharacter,
        this.props.locations.find(
          location => location.name === evt.target.attributes.id.value
        )
      );
      this.setState({
        isMoving: false,
        numactions: this.state.numactions + 1,
        selectedLocation: this.props.locations.find(
          location => location.name === evt.target.attributes.id.value
        ),
      });
    }
  };
  render() {
    if (this.props.locations && this.props.routes) {
      return (
        <React.Fragment>
          <h3> Doom: {this.props.doom}</h3>
          <h3>
            Current Omen: {this.props.omen} Next Omen: {this.props.nextOmen}
          </h3>
          <ComposableMap
            projectionConfig={{ scale: 100, rotation: [-11, 0, 0] }}
            width={600}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          >
            <ZoomableGroup disablePanning>
              <Geographies geography="/public/50m.json">
                {(geographies, projection) =>
                  geographies.map((geography, i) => (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: '607D8B',
                          stroke: '607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        hover: {
                          fill: '607D8B',
                          stroke: '607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        click: {
                          fill: '607D8B',
                          stroke: '607D8B',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                      }}
                    />
                  ))
                }
              </Geographies>
              <Markers>
                {this.props.locations.map(location => {
                  return (
                    <Marker
                      key={location.name}
                      id={location.name}
                      name={location.name}
                      gate={location.gate}
                      clue={location.clue}
                      expedition={location.expedition}
                      type={location.type}
                      marker={{
                        coordinates: [location.xcoord, location.ycoord],
                      }}
                      style={{
                        default: {
                          fill: location.fill,
                          zIndex: 5,
                        },
                        hover: {
                          fill: location.fill,
                          zIndex: 5,
                        },
                        pressed: {
                          fill: location.fill,
                          zIndex: 5,
                        },
                      }}
                    >
                      <circle
                        cx={0}
                        cy={0}
                        r={location.size === 'small' ? 3 : 8}
                        id={location.name}
                        onClick={this.handleClick}
                      />
                      <text
                        y={location.yoff || 8}
                        x={location.xoff || 1}
                        style={{
                          fontSize: 6,
                          stroke: 'black',
                          strokeWidth: 0.2,
                        }}
                      >
                        {location.name}
                      </text>
                    </Marker>
                  );
                })}
              </Markers>
              <Lines>
                {this.props.routes.map(route => {
                  return (
                    <Line
                      key={route.id}
                      type={route.type}
                      line={{
                        coordinates: {
                          start: [route.xstart, route.ystart],
                          end: [route.xend, route.yend],
                        },
                      }}
                      style={{
                        default: { stroke: route.fill, zIndex: -10 },
                        hover: { stroke: route.fill },
                        pressed: { stroke: route.fill },
                      }}
                    />
                  );
                })}
              </Lines>
            </ZoomableGroup>
          </ComposableMap>
          {this.state.selectedLocation.name && (
            <div>
              <h3>Space: {this.state.selectedLocation.name}</h3>
              {this.state.selectedLocation.gate &&
              this.state.selectedLocation.gate.hasGate ? (
                <p>
                  A mysterious {this.state.selectedLocation.gate.gateColor} gate
                  is here...
                </p>
              ) : null}
              {this.state.selectedLocation.clue ? (
                <p>A clue may be found here</p>
              ) : null}
              {this.state.selectedLocation.expedition ? (
                <p>An expedition may be launched here</p>
              ) : null}
              {this.state.selectedLocation.rumors.length > 0 ? (
                <p>There is an active rumor here</p>
              ) : null}
              <p>
                Players Present:{' '}
                {this.state.selectedLocation.players.length > 0
                  ? this.state.selectedLocation.players.map(
                      player => player.name
                    )
                  : 'none'}
              </p>
              <p>
                Monsters Present:{' '}
                {this.state.selectedLocation.monsters.length > 0
                  ? this.state.selectedLocation.monsters.map(
                      monster => monster.name
                    )
                  : 'none'}
              </p>
            </div>
          )}
          {this.props.actingCharacter.name && (
            <div>
              <h3>Active Character</h3>
              <p>
                {this.props.actingCharacter.name}, in{' '}
                {this.props.actingCharacter.location}
              </p>

              <p>
                Health: {this.props.actingCharacter.health}/
                {this.props.actingCharacter.maxHealth}
              </p>
              <p>
                Sanity: {this.props.actingCharacter.sanity}/
                {this.props.actingCharacter.maxSanity}
              </p>
              <h5>Actions</h5>
              <div>
                <button
                  type="button"
                  disabled={this.props.actingCharacter.hasMoved}
                  name="move"
                  onClick={this.actionHandler}
                >
                  Move
                </button>
                <button
                  type="button"
                  name="rest"
                  onClick={this.actionHandler}
                  disabled={
                    this.props.locations.find(
                      location =>
                        location.name === this.props.actingCharacter.location
                    ).monsters.length !== 0
                  }
                >
                  Rest
                </button>
                <button
                  type="button"
                  name="shop"
                  onClick={this.actionHandler}
                  disabled={
                    this.props.locations.find(
                      location =>
                        location.name === this.props.actingCharacter.location
                    ).type !== 'city' ||
                    this.props.locations.find(
                      location =>
                        location.name === this.props.actingCharacter.location
                    ).monsters.length !== 0
                  }
                >
                  Shop
                </button>
                <button
                  type="button"
                  name="boatticket"
                  onClick={this.actionHandler}
                  disabled={
                    this.props.locations.find(
                      location =>
                        location.name === this.props.actingCharacter.location
                    ).type !== 'city' ||
                    this.props.actingCharacter.inventory.tickets.length >= 2
                  }
                >
                  Buy a Boat Ticket
                </button>
                <button
                  type="button"
                  name="trainticket"
                  onClick={this.actionHandler}
                  disabled={
                    this.props.locations.find(
                      location =>
                        location.name === this.props.actingCharacter.location
                    ).type !== 'city' ||
                    this.props.actingCharacter.inventory.tickets.length >= 2
                  }
                >
                  Buy a Train Ticket
                </button>
              </div>
            </div>
          )}
        </React.Fragment>
      );
    } else {
      return <p>...Loading</p>;
    }
  }
}

const mapStateToProps = state => {
  return {
    locations: state.mapReducer.locations,
    routes: state.mapReducer.routes,
    doom: state.mapReducer.doom,
    omen: state.mapReducer.omen,
    nextOmen: state.mapReducer.nextOmen,
    clueLocations: state.mythosReducer.clueLocations,
    gateLocations: state.mythosReducer.gateLocations,
    spawnGates: state.mythosReducer.spawnGates,
    spawnClues: state.mythosReducer.spawnClues,
    phase: state.mapReducer.phase,
    updating: state.mapReducer.updating,
    actingCharacter: state.characterReducer.actingCharacter,
    activeCharacters: state.characterReducer.activeCharacters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    spawnGate: location => dispatch(spawnGate(location)),
    spawnedGate: index => dispatch(spawnedGate(index)),
    spawnClue: location => dispatch(spawnClue(location)),
    spawnedClue: index => dispatch(spawnedClue(index)),
    endMythos: () => dispatch(endMythos()),
    startUpdate: () => dispatch(startUpdate()),
    endUpdate: () => dispatch(endUpdate()),
    activateCharacter: character => dispatch(activateCharacter(character)),
    characterRefresh: () => dispatch(characterRefresh()),
    moveCharacter: location => dispatch(moveCharacter(location)),
    addCharacterToMap: (character, location) =>
      dispatch(addCharacterToMap(character, location)),
    endAction: () => dispatch(endAction()),
    restoreHealth: (character, amount) =>
      dispatch(restoreHealth(character, amount)),
    restoreSanity: (character, amount) =>
      dispatch(restoreSanity(character, amount)),
    buyTicket: (character, ticket) => dispatch(buyTicket(character, ticket)),
    endEncounter: () => dispatch(endEncounter()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

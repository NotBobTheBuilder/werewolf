import { useState } from 'react';
import styled from '@emotion/styled';

import ConfigPanel from 'src/components/config-panel';
import ConfigSummary from 'src/components/config-summary';
import Play from 'src/components/play';
import {Role} from 'src/roles';

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  height: 100%;
`;

enum Mode {
  CONFIG,
  DEAL,
}


function App() {
  const [phase, setPhase] = useState<Mode>(Mode.CONFIG);
  const [players, setPlayers] = useState<number>();
  const [werewolves, setWerewolves] = useState<number>();
  const [seers, setSeers] = useState<number>();
  const [doctors, setDoctors] = useState<number>();
  const [masons, setMasons] = useState<number>();
  const [villagers, setVillagers] = useState<number>();
  const [deck, setDeck] = useState<Array<Role>>([]);

  const panelConfigs: Array<{name: string, value: number | undefined, setValue: (n: number | undefined)=>void, eligibleValues: Array<number> }> = [
    {name: 'Players', value: players, setValue: setPlayers, eligibleValues: [4,5,6,7,8,9,10,11,12]},
    {name: 'Werewolves', value: werewolves, setValue: setWerewolves, eligibleValues: [1,2,3]},
    {name: 'Seers', value: seers, setValue: setSeers, eligibleValues: [0, 1]},
    {name: 'Doctors', value: doctors, setValue: setDoctors, eligibleValues: [0, 1]},
    {name: 'Masons', value: masons, setValue: setMasons, eligibleValues: [0, 2]},
    {name: 'Villagers', value: villagers, setValue: setVillagers, eligibleValues: [3,4,5,6,7,8,9,10,11]},
  ];

  const play = () => {
    const werewolfCards = Array(werewolves || 0).fill(Role.Werewolf);
    const seerCards = Array(seers || 0).fill(Role.Seer);
    const doctorCards = Array(doctors || 0).fill(Role.Doctor);
    const masonsCards = Array(masons || 0).fill(Role.Mason);
    const villagersCards = Array(villagers || 0).fill(Role.Villager);

    const shuffled = werewolfCards
      .concat(seerCards)
      .concat(doctorCards)
      .concat(masonsCards)
      .concat(villagersCards)
      .map(el => ({el, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({el}) => el)
      .slice(0, players);

    setPhase(Mode.DEAL);
    setDeck(shuffled);
  };

  const getConfigPanels = () => {
    const panels = [];
    for (const pc of panelConfigs) {
      const {name, value, setValue, eligibleValues} = pc;
      panels.push(<ConfigPanel<number | undefined> key={name} value={value} setValue={setValue} settingName={name} eligibleValues={eligibleValues}/>);
      if (value === undefined) {
        return panels;
      }
    }
    panels.push(<ConfigSummary key='play' players={players || 0} roles={(werewolves || 0)  + (seers || 0) + (doctors || 0) + (masons || 0) + (villagers || 0)} onClick={play} />)

    return panels;
  }

  const getPlayPanel = () => {
    return <Play players={deck} backToConfig={() => {setPhase(Mode.CONFIG)}}/>
  }

  return (
    <Container>
      {phase === Mode.CONFIG && getConfigPanels()}
      {phase === Mode.DEAL && getPlayPanel()}
    </Container>
  );

}

export default App;

import {useRef, useState} from 'react';
import styled from '@emotion/styled';
import PlayingCard, { CardState } from 'src/components/playing-card';
import Button from './button';
import {Role} from 'src/roles';

import {CSSTransition} from 'react-transition-group';

interface Props {
  players: Array<Role>;
  backToConfig: () => void;
}


const Container = styled.div`
display: grid;
grid-template-rows: 1fr 5fr 1fr;
align-content: space-around;
justify-content: center;
height: 100%
`;


const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-content: center;
  font-family: Arial;
  text-transform: uppercase;
  color: #F2F2F0;
`;

export default function Play(props: Props) {
  const {players, backToConfig} = props;
  const [card, setCard] = useState(CardState.BACK);
  const [player, setPlayer] = useState(0);
  const transitionRef = useRef(null);
  return <Container>
    <Title>Player {player + 1} Role</Title>
    <CSSTransition in={card === CardState.FRONT} nodeRef={transitionRef} timeout={500} onExited={() => {
      if (player + 1 === players.length) {
        backToConfig();
      } else {
        setPlayer(player + 1);
      }
    }}>
      <PlayingCard state={card} back={'???'} >
        <p ref={transitionRef}>{players[player]}</p>
        <p>Hide this card when you've memorised it!</p>
      </PlayingCard>
    </CSSTransition>
    <Button double onClick={() => setCard((c) => c === CardState.FRONT ? CardState.BACK : CardState.FRONT ) }>{card === CardState.FRONT ? 'Hide' : 'Show'}</Button>
  </Container>;
}
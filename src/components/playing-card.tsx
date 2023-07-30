import {ReactNode} from 'react';
import styled from '@emotion/styled';

export enum CardState {
  FRONT,
  BACK,
}

interface Props {
  state: CardState,
  children: ReactNode,
  back: ReactNode,
}

const FlipCard = styled.div`
  background-color: transparent;
  aspect-ratio: 1 / 2;
  perspective: 1000px;
  min-width: 30vmin;
  font-family: Arial;
  text-transform: uppercase;
  color: #F2F2F0;
`;

const FlipCardInner = styled.div<{flipped: boolean}>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 500ms;
  transform-style: preserve-3d;
  ${({flipped}) => flipped && 'transform: rotateY(180deg);'}
}
`

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-sizing: border-box;
  background-color: #393939;
  color: #F2F2F2;
  border-radius: 8px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const FrontFace = styled(CardFace)`
  transform: rotateY(180deg);
`;

const BackFace = styled(CardFace)`
  background-clip: content-box;
  border: 3px solid #393939;
  padding: 5vh;
`;

export default function PlayingCard(props: Props) {
  const {state, children, back} = props;
  return <FlipCard>
    <FlipCardInner flipped={state === CardState.FRONT}>
      <FrontFace>{children}</FrontFace>
      <BackFace>{back}</BackFace>
    </FlipCardInner>
  </FlipCard>;
}
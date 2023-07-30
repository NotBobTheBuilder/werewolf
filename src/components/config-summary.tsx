import styled from '@emotion/styled';
import Button from 'src/components/button';

interface Props {
  players: number;
  roles: number;
  onClick: () => void;
}

const Grid = styled.div`
display: grid;
grid-template-columns: 1fr 2fr 1fr;
justify-content: space-around;
min-height: 80px;
`;

export const GridItem = styled.div<{span?: number}>`
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
grid-column: span ${({span}) => span || 1};
align-content: center;
justify-content: center;
height: 80px;
font-family: Arial;
text-transform: uppercase;
color: #F2F2F0;
`;

export default function ConfigSummary(props: Props) {
  const {players, roles, onClick} = props;
  return <Grid>
    <GridItem span={4}>{ 'Dealing ' + roles + ' cards to ' + players + ' players'}</GridItem>
    <GridItem/>
    <GridItem><Button double onClick={onClick}>{players === roles  ? 'Play' : 'Shuffle' }</Button></GridItem>
    <GridItem/>
  </Grid>
};
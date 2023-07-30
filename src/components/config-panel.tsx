import styled from '@emotion/styled';

import Button from 'src/components/button';
import { ReactNode } from 'react';
import ButtonGrid from './button-grid';

const Grid = styled.div<{columns: string}>`
display: grid;
grid-template-columns: ${({columns}) => columns};
justify-content: space-around;
min-height: 80px;
`;

export const GridItem = styled.div`
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
grid-row: span 1;
align-content: center;
justify-content: center;
height: 100%;
font-family: Arial;
text-transform: uppercase;
color: #F2F2F0;
`;


interface Props<T extends ReactNode> {
  settingName: string
  value: T | undefined;
  setValue: (t: T | undefined) => void;
  eligibleValues: Array<T>,
}

export default function ConfigPanel<T extends ReactNode>(props: Props<T>) {
  const {settingName, eligibleValues, value, setValue} = props;
  return <div>
    <Grid columns='1fr 3fr 1fr'>
      <GridItem>{value !== undefined && <Button bordered onClick={() => setValue(undefined)}>{value}</Button>} </GridItem>
      <GridItem>{settingName}</GridItem>
      <GridItem></GridItem>
    </Grid>
    {value === undefined
      ? <ButtonGrid columns={3} rows={Math.ceil(eligibleValues.length / 3)} links={ eligibleValues.map(v => ({label: ''+v, onClick: () => setValue(v)})) } />
      : []}
  </div>
}
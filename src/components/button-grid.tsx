
import styled from '@emotion/styled';
import Button from 'src/components/button'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const GridContainer = styled.div<{columns: number, rows: number}>`
display: grid;
grid-template-columns: repeat(${({columns}) => columns}, auto);
justify-content: space-around;
align-content: space-around;
width: 100%;
aspect-ratio: ${({columns, rows}) => '' + columns + '/' + rows};
`;

export const GridItem = styled.div<{span?: number}>`
box-sizing: border-box;
grid-row: span 1;
grid-column: span ${({span}) => span || 1};
`

interface ButtonProp extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  span?: number,
  label: string,
}
interface Prop {
  links: Array<ButtonProp>;
  columns: number;
  rows: number;
}


export default function ButtonGrid(props: Prop) {
  const {columns, rows, links} = props;
  return <Container>
      <GridContainer columns={columns} rows={rows}>
        {
          links.map(({span, label, ...spreadprops}) =>
            <GridItem key={label} span={span || 0}>
              <Button double={!!span && span > 1} {...spreadprops}>{label}</Button>
            </GridItem>
          )
        }
        </GridContainer>
    </Container>
}
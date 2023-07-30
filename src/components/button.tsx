import styled from '@emotion/styled';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  double?: boolean;
  bordered?: boolean;
}

export default styled.button<Props>`
background-color: #393939;
font-family: Arial;
color: #F2F2F0;
&:hover {
  background-color: #494949;
  border: ${({bordered}) => bordered ?'3px solid #494949' : '0' };
}
cursor: pointer;
height: 80px;
border-radius: 5px;
background-clip: content-box;
text-transform: uppercase;

padding: ${({bordered}) => bordered ? ' 5px' : '0' };
border: ${({bordered}) => bordered ? '3px solid #393939' : '0'};
width: ${({double}) => double ? '100%' : '80px'};
`;

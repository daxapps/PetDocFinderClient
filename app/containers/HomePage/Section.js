import styled from 'styled-components';

const Section = styled.section`
  margin: 0 auto;

  // &:first-child {
  //   margin-top: 100px;
  // }
  &:nth-child(odd) {
  background: lightyellow;
  }
`;

export default Section;

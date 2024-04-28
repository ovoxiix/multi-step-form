import styled from "styled-components";

import congratulate from "/congratulate.png";

const Registered = () => {
  return (
    <Container>
      <Congratulate src={congratulate} alt="congratulate" />
      <Description>You are now registered.</Description>
    </Container>
  );
};

export default Registered;

const Container = styled.div`
  width: 100%;
  height: 180px;
  margin: 50px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Congratulate = styled.img`
  width: 100px;
  height: 100px;
`;

const Description = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

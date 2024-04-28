import styled from "styled-components";

const Required = () => {
  return <Star>*</Star>;
};

export default Required;

const Star = styled.span`
  color: #d90303;
  font-weight: bold;
`;

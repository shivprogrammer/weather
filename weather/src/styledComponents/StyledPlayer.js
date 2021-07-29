import styled from "styled-components";

export const PlayControl = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 5rem 1rem;
  width: 10%;
  svg {
    cursor: pointer;
    color: gainsboro;
  }
  svg:hover {
    fill: #DA4567
  }
`;

export const PlayerContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20vh;
`;

export const TimeControl = styled.div`
  display: flex;
  width: 50%;
  input {
    padding: 1rem 0rem;
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
  }
  p {
    padding: 1rem;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
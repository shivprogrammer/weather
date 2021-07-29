import styled from "styled-components";

export const PlayControl = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 30%;
  svg {
    cursor: pointer;
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
    padding: 1rem 2rem;
    width: 100%;
  }
  p {
    padding: 1rem;
  }
`;
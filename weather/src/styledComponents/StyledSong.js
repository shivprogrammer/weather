import styled from "styled-components";

export const StyledSong = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60vh;
  h2 {
    padding: 3rem 1rem 1rem 1rem;
    font-family: "Courier New", monospace;
  }
  h3 {
    font-size: 1rem;
    color: grey;
    font-family: "Courier New", monospace;
  }
  img {
    border-radius: 50%;
    width: 20%;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 60%;
    }
  }
`;

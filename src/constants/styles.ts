import styled from "@emotion/styled";

// export const PageWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;

export const Img = styled.img`
  display: flex;
  width: 1000px;
  height: 200px;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
  }
`;
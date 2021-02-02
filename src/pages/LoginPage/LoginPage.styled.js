import styled from "@emotion/styled";

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #0e0d15;
  `,
  Container: styled.main`
    max-width: 1200px;
    margin: auto;
    padding: 40px;
  `,
  Title: styled.h1`
    margin: 0 0 20px 0;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primary};
  `,
};

export default Styled;

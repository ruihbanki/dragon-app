import styled from "@emotion/styled";

export default {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  Header: styled.div`
    flex: 0 60px;
    background: ${(props) => props.theme.colors.primary};
  `,
  Content: styled.div`
    flex: 1;
  `,
  Container: styled.main`
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  `,
};

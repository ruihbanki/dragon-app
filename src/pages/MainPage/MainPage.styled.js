import styled from "@emotion/styled";

export default {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #0e0d15;
  `,
  Header: styled.div`
    flex: 0 60px;
    background: #262531;
  `,
  Content: styled.div`
    flex: 1;
    min-height: 1px;
  `,
  Container: styled.main`
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  `,
};

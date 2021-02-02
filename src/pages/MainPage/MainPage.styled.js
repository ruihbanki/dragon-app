import styled from "@emotion/styled";

const Styled = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #0e0d15;
  `,
  Header: styled.div`
    flex: 0 60px;
    position: fixed;
    width: 100%;
    height: 60px;
    top: 0;
    z-index: 100;
    background: ${(props) => props.theme.colors.base20};
  `,
  Content: styled.div`
    flex: 1;
    min-height: 1px;
    padding-top: 60px;
  `,
  Container: styled.main`
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  `,
};

export default Styled;

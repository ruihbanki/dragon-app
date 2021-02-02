import styled from "@emotion/styled";

const Styled = {
  Root: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    z-index: 1000;
    ::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.78);
    }
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 360px;
    height: 160px;
    padding: 12px;
    background: ${(props) => props.theme.colors.base20};
  `,
  Body: styled.div`
    flex: 1;
    padding: 12px;
  `,
  Title: styled.strong`
    color: ${(props) => props.theme.colors.primary};
    font-size: 20px;
    font-weight: 400;
  `,
  Message: styled.p`
    color: ${(props) => props.theme.colors.base60};
    font-size: 14px;
  `,
  Footer: styled.div`
    padding: 12px;
  `,
};

export default Styled;

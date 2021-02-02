import styled from "@emotion/styled";

const Styled = {
  Root: styled.div`
    position: relative;
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
  `,
  Title: styled.h1`
    font-size: 48px;
    font-weight: 300;
    margin: 0;
    color: ${(props) => props.theme.colors.primary};
  `,
  Add: styled.button`
    width: 40px;
    height: 40px;
    margin-left: 40px;
    line-height: 40px;
    border-radius: 999px;
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
    text-align: center;
    border: 0;
    font-size: 24px;
    :hover {
      filter: brightness(1.2);
    }
  `,
  NewArea: styled.div`
    background: ${(props) => props.theme.colors.base20};
    border-radius: 4px;
    padding: 24px;
  `,
  Content: styled.div`
    flex: 1;
    min-height: 1px;
  `,
};

export default Styled;

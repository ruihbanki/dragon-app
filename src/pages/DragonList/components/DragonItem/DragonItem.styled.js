import styled from "@emotion/styled";

export default {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    background: ${(props) =>
      props.editing ? props.theme.colors.base20 : props.theme.colors.base10};
    border-radius: 4px;
  `,
  Body: styled.div`
    flex: 1;
    display: flex;
    padding: 12px;
  `,
  Name: styled.strong`
    flex: 1;
    padding: 0 16px;
    color: #fff;
    font-size: 22px;
    font-weight: 400;
  `,
  Actions: styled.div``,
  Details: styled.div`
    padding: 12px;
    border-top: 1px solid ${(props) =>
      props.editing ? props.theme.colors.base30 : props.theme.colors.base10}};
  `,
};

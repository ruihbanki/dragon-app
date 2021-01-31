import styled from "@emotion/styled";

export default {
  Root: styled.input`
    width: 100%;
    height: 32px;
    padding: 0 8px;
    color: #fff;
    border: 1px solid ${(props) => props.theme.colors.primary};
    background: #000;
    box-sizing: border-box;
  `,
};

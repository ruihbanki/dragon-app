import styled from "@emotion/styled";

const Styled = {
  Root: styled.input`
    width: 100%;
    height: 32px;
    padding: 0 8px;
    color: #fff;
    border: 1px solid
      ${(props) =>
        props.error ? props.theme.colors.error : props.theme.colors.base40};
    background: #000;
    box-sizing: border-box;
    :focus {
      border: 1px solid
        ${(props) =>
          props.error ? props.theme.colors.error : props.theme.colors.primary};
      outline: none;
    }
    &[disabled] {
      opacity: 0.4;
    }
  `,
};

export default Styled;

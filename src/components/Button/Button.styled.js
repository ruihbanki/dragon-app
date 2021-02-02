import styled from "@emotion/styled";

const rootVariant = {
  default: (props) => `
    color: ${props.theme.colors.primary};
    border: 0;
    background: transparent;
  `,
  contained: (props) => `
    background: ${
      props.color === "primary"
        ? props.theme.colors.primary
        : props.theme.colors.base40
    };
    border: 0;
    color: #fff;
  `,
};

const Styled = {
  Root: styled.button`
    height: 36px;
    padding: 8px 16px;
    ${(props) => rootVariant[props.variant](props)}
  `,
};

export default Styled;

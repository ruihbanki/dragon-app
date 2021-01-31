import styled from "@emotion/styled";

const rootVariant = {
  default: (props) => `
    color: ${props.theme.colors.primary};
    border: 0;
    background: transparent;
  `,
  contained: (props) => `
    background: ${props.theme.colors.primary};
    border: 0;
    color: #fff;
  `,
};

export default {
  Root: styled.button`
    height: 36px;
    padding: 8px 16px;
    ${(props) => rootVariant[props.variant](props)}
  `,
};

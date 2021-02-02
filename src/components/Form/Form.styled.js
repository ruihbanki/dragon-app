import styled from "@emotion/styled";

const Styled = {
  Root: styled.form`
    padding: 0;
    color: ${(props) => props.theme.colors.primary};
    border: 0;
    background: transparent;
  `,
};

export default Styled;

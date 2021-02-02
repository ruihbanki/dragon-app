import styled from "@emotion/styled";

const Styled = {
  Root: styled.div`
    display: ${(props) => (props.container ? "grid" : undefined)};
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: ${(props) => props.columnGap};
    grid-row-gap: ${(props) => props.rowGap};
    grid-column: ${(props) => (props.item ? `${props.span} span` : undefined)};
  `,
};

export default Styled;

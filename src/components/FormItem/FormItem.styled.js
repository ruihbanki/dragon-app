import styled from "@emotion/styled";

export default {
  Root: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Label: styled.label`
    display: block;
    margin-bottom: 4px;
    font-size: 13px;
    color: ${(props) => props.theme.colors.primary};
  `,
  Content: styled.div``,
};

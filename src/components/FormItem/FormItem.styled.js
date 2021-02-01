import styled from "@emotion/styled";

export default {
  Root: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Label: styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 13px;
    color: ${(props) => props.theme.colors.base80};
  `,
  Content: styled.div``,
  Error: styled.div`
    height: 24px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.error};
    font-size: 13px;
  `,
};

import styled from "@emotion/styled";

const Styled = {
  Root: styled.div`
    > button {
      margin-left: 8px;
      :first-of-type {
        margin-left: 0;
      }
    }
  `,
};

export default Styled;

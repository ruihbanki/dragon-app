import React from "react";
import PropTypes from "prop-types";
import Styled from "./Alert.styled";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

function Alert(props) {
  const { visible, title, message, buttons } = props;

  if (!visible) {
    return null;
  }

  return (
    <Styled.Root>
      <Styled.Container>
        <Styled.Body>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Message>{message}</Styled.Message>
        </Styled.Body>
        <Styled.Footer>
          <ButtonGroup>
            {buttons.map((button, index) => (
              <Button
                variant="contained"
                key={index}
                onClick={button.onClick}
                color={button.color}
              >
                {button.text}
              </Button>
            ))}
          </ButtonGroup>
        </Styled.Footer>
      </Styled.Container>
    </Styled.Root>
  );
}

Alert.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  buttons: PropTypes.array,
};

export default React.memo(Alert);

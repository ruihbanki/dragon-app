import React from "react";
import PropTypes from "prop-types";
import Styled from "./DragonItem.styled";
import Button from "../../../../components/Button";
import DragonForm from "../../../../containers/DragonForm";

function DragonItem(props) {
  const { dragon, onChange, onDelete } = props;

  const [editing, setEditing] = React.useState(false);

  const handleCancel = React.useCallback(() => {
    setEditing(false);
  }, []);

  const handleSave = React.useCallback(() => {
    setEditing(false);
    onChange();
  }, [onChange]);

  const handleDelete = React.useCallback(() => {
    onDelete(dragon);
  }, [onDelete, dragon]);

  return (
    <Styled.Root editing={editing}>
      <Styled.Body>
        <Styled.Name>{dragon.name}</Styled.Name>
        <Styled.Actions>
          <Button onClick={() => setEditing(true)}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Styled.Actions>
      </Styled.Body>
      {editing && (
        <Styled.Details>
          <DragonForm
            dragon={dragon}
            onCancel={handleCancel}
            onSave={handleSave}
          />
        </Styled.Details>
      )}
    </Styled.Root>
  );
}

DragonItem.propTypes = {
  dragon: PropTypes.object,
};

export default React.memo(DragonItem);

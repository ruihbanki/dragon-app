import React from "react";
import { useMutation, useQuery } from "react-query";
import Alert from "../../components/Alert";
import DragonItem from "./components/DragonItem";
import Styled from "./DragonListPage.styled";
import { fetchDragons, deleteDragon } from "../../services/dragonServices";
import DragonForm from "../../containers/DragonForm";

function DragonListPage() {
  const { isLoading, isError, error, data, refetch } = useQuery(
    "dragonList",
    fetchDragons
  );

  const remove = useMutation(deleteDragon);

  const [dragon, setDragon] = React.useState(null);

  const [adding, setAdding] = React.useState(false);

  const handleChange = React.useCallback(() => {
    refetch();
  }, [refetch]);

  const handleSave = React.useCallback(() => {
    setAdding(false);
    refetch();
  }, [refetch]);

  const handleCancel = React.useCallback(() => {
    setAdding(false);
  }, []);

  const handleAdd = React.useCallback(() => {
    setAdding(true);
  }, []);

  const handleDelete = React.useCallback((dragon) => {
    setDragon(dragon);
  }, []);

  const handleDeleteCancel = React.useCallback(() => {
    setDragon(null);
  }, []);

  const handleDeleteConfirm = React.useCallback(() => {
    remove.mutate(dragon.id);
  }, [dragon, refetch, remove]);

  React.useEffect(() => {
    if (remove.isSuccess) {
      setDragon(null);
      refetch();
    }
  }, [remove.isSuccess, refetch]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const sorted = data.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Styled.Root>
      <Styled.Header>
        <Styled.Title>Dragons</Styled.Title>
        <Styled.Add title="Adicionar" onClick={handleAdd}>
          +
        </Styled.Add>
      </Styled.Header>
      <Styled.Content>
        {adding && (
          <Styled.NewArea>
            <DragonForm
              dragon={{}}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </Styled.NewArea>
        )}
        {sorted.map((dragon) => (
          <DragonItem
            key={dragon.id}
            dragon={dragon}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))}
        <Alert
          visible={Boolean(dragon)}
          title="Deseja realmente excluir?"
          message="Essa operação não pode ser revertida."
          buttons={[
            { text: "Cancelar", onClick: handleDeleteCancel },
            { text: "Excluir", color: "primary", onClick: handleDeleteConfirm },
          ]}
        />
      </Styled.Content>
    </Styled.Root>
  );
}

export default React.memo(DragonListPage);

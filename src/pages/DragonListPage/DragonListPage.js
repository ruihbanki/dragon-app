import React from "react";
import { useMutation, useQuery } from "react-query";
import Alert from "../../components/Alert";
import { fetchDragons, deleteDragon } from "../../services/dragonServices";
import DragonItem from "./components/DragonItem";
import Styled from "./DragonListPage.styled";

function DragonListPage() {
  const { isLoading, isError, error, data, refetch } = useQuery(
    "dragonList",
    fetchDragons
  );

  const update = useMutation(deleteDragon);

  const [dragon, setDragon] = React.useState(null);

  const handleDelete = React.useCallback((dragon) => {
    setDragon(dragon);
  }, []);

  const handleChange = React.useCallback(() => {
    refetch();
  }, [refetch]);

  const handleDeleteCancel = React.useCallback(() => {
    setDragon(null);
  }, []);

  const handleDeleteConfirm = React.useCallback(() => {
    update.mutate(dragon.id);
    setDragon(null);
  }, [dragon]);

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
        <Styled.Add title="Adicionar">+</Styled.Add>
      </Styled.Header>
      <Styled.Content>
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

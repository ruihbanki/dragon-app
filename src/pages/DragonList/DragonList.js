import React from "react";
import { useQuery } from "react-query";
import { fetchDragons } from "../../services/dragonServices";
import DragonItem from "./components/DragonItem";

function DragonList() {
  const { isLoading, isError, error, data, refetch } = useQuery(
    "dragonList",
    fetchDragons
  );

  const handleChange = React.useCallback(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const sorted = data.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      {sorted.map((dragon) => (
        <DragonItem key={dragon.id} dragon={dragon} onChange={handleChange} />
      ))}
    </div>
  );
}

export default React.memo(DragonList);

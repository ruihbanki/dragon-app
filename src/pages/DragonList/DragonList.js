import React from "react";
import { useQuery } from "react-query";
import { fetchDragons } from "../../services/dragonServices";
import DragonItem from "./components/DragonItem";

function DragonList() {
  const { isLoading, isError, error, data } = useQuery(
    "dragonList",
    fetchDragons
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      {data.map((dragon) => (
        <DragonItem key={dragon.id} dragon={dragon} />
      ))}
    </div>
  );
}

export default React.memo(DragonList);

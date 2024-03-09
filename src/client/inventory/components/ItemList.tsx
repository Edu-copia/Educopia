import React from "react";
import { ItemListView } from "./ItemListView";
import { ItemListAdd } from "./ItemListAdd";

export const ItemList: React.FC = () => {

  return (
    <div>
      <ItemListView/>
      <ItemListAdd/>
    </div>
  );
};

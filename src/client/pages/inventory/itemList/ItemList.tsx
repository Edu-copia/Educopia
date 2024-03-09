import React from "react";
import { ItemListView } from "./components/ItemListView";
import { ItemListAdd } from "./components/ItemListAdd";

export const ItemList: React.FC = () => {

  return (
    <div>
      <ItemListView/>
      <ItemListAdd/>
    </div>
  );
};

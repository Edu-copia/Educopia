import React from "react";
import { ItemListView } from "./components/ItemListView";
import { ItemListAdd } from "./components/ItemListAdd";

export const ItemList: React.FC = () => {

  return (
    <div>
      <div><ItemListView/></div>
      <div className="mt-12 text-center"><ItemListAdd/></div>
    </div>
  );
};

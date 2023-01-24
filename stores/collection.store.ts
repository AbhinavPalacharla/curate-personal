import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Collection } from "@prisma/client";

type Store = {
  collection: Pick<Collection, "id" | "name" | "icon"> | null;
  setCollection: (collection: Pick<Collection, "id" | "name" | "icon">) => void;
};

const useCollectionStore = create<Store>()(
  persist(
    (set) => ({
      collection: {
        id: "",
        name: "",
        icon: "",
      } as Store["collection"],

      setCollection: (collection: Pick<Collection, "id" | "name" | "icon">) =>
        set({ collection }),
    }),
    {
      name: "collection",
    }
  )
);

export { useCollectionStore };

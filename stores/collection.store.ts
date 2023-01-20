import { create } from "zustand";
import type { Collection } from "@prisma/client";

type Store = {
  collection: Pick<Collection, "id" | "name" | "icon"> | null;
  setCollection: (collection: Pick<Collection, "id" | "name" | "icon">) => void;
};

const useCollectionStore = create<Store>((set) => ({
  collection: null,
  setCollection: (collection: Pick<Collection, "id" | "name" | "icon">) =>
    set({ collection }),
}));

export { useCollectionStore };

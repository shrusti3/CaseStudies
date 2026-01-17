import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { UserSlice, createUserSlice } from "./slices/userSlice";
import { FileSlice, createFileSlice } from "./slices/fileSlice";
import { CommentSlice, createCommentSlice } from "./slices/commentSlice";

export type DesignHubStore =
  UserSlice &
  FileSlice &
  CommentSlice;

export const useDesignHubStore = create<DesignHubStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...createUserSlice(set),
        ...createFileSlice(set, get),
        ...createCommentSlice(set, get),
      }),
      { name: "designhub-store" }
    )
  )
);

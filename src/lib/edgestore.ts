"use client";

import { type EdgeStoreRouter } from "@/app/api/edgestore/[...edgestore]/route";
import { createEdgeStoreProvider } from "@edgestore/react";

export const { EdgeStoreProvider, useEdgeStore } =
//@ts-ignore
  createEdgeStoreProvider<EdgeStoreRouter>({
    maxConcurrentUploads: 1,
  });
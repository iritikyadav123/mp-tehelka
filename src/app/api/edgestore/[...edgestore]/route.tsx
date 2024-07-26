import { initEdgeStore } from "@edgestore/server";
import {
  CreateContextOptions,
  createEdgeStoreNextHandler,
} from "@edgestore/server/adapters/next/app";
import { z } from "zod";
let handler,es, edgeStoreRouter
try {
  es = initEdgeStore.create();

  edgeStoreRouter = es.router({
  myPublicImage: es.imageBucket(),
})

 handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
})
}catch(err) {
  console.log(err);
}
export { handler as Get, handler as POST };

export type EdgeStoreRouter = typeof edgeStoreRouter;
import { initTRPC } from "@trpc/server";
import type * as trpcExpress from "@trpc/server/adapters/express";

export interface Context
  extends Partial<trpcExpress.CreateExpressContextOptions> {}

export async function createTRPCContext(opts: Context): Promise<Context> {
  return opts;
}

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({});

export const publicProcedure = t.procedure;

import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { useNuxtApp } from "nuxt/app";
import { useDrizzle } from "~/server/utils/drizzle";

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(async ({ input }) => {
      const { db } = useDrizzle();
      const result = await db.query.users.findMany({});
      console.log(result);
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;

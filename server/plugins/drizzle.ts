import { useDrizzle } from "../utils/drizzle";

export default defineNitroPlugin(async (nitroApp) => {
  await useDrizzle().connect();
});

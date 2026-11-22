
import { z } from "zod";

const portSchema = z.coerce
  .number()
  .int()
  .min(1)
  .max(65535)
  .default(8500);

export const PORT = portSchema.parse(process.env.PORT);

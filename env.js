const z = require("zod");
const portSchema = z.coerce.number().int().min(1).max(65535).default(8500);
let PORT = portSchema.parse(process.env.PORT);

module.exports = PORT;

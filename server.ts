import express from "npm:express@4.18.2";
import type { Response, Request } from "npm:express@4.18.2";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Welcome to the Dinosaur API!");
});

app.listen(3000, () => {
  console.log("PokeAPI server listening on :3000");
});
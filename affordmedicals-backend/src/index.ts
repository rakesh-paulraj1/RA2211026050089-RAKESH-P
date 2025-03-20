import express,{Express} from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Test } from "./models/test.model";
import Testroute from "./routes/Testroute";
dotenv.config();

const app: Express = express();
const port=3001;
app.use(express.json());
app.use(express.static(__dirname + "/files", { index: false }));
app.use(cors());

Test.sync()


.then(() => console.log("All models synced with the database"))
.catch((err) => console.error("Unable to sync  all models:", err));
   
app.use(Testroute);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port!}`);
});
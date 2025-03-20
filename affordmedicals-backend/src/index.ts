import express,{Express} from "express";
import dotenv from "dotenv";
import cors from "cors";
import Allroutes from "./routes/Allroutes";
dotenv.config();

const app: Express = express();
const port=3001;
app.use(express.json());
app.use(express.static(__dirname + "/files", { index: false }));
app.use(cors());

app.use(Allroutes);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port!}`);
});
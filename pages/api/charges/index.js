import { dbConnect } from "../../../mongodb/dbConnect";

dbConnect()

export default function handler(req, res) {
  res.status(200).json("Hello charges!");
}

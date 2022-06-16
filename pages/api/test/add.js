import Test from "../../../models/testModel";
import { connectMongo } from "../../../utils/connect";

export default async function addTest(req, res) {
    

        await connectMongo()
   console.log('Conneted to db');
   const test = await Test.create(req.body)
   console.log('document created');
   res.json({test})
  }
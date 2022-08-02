import dbConnect from "../../../utils/dbcon";
import Order from "../../../models/Order";

const handler = async (req, res) =>{
    const { method } = req;

    dbConnect()

    if(method === "GET" ){
        try{
            const orders = await Order.find(req.body)
            res.status(200).json(orders)
        }catch(err){
            res.status(500).json(err)
        }
    }

    if(method === "POST" ){
        try{
            const order = await Order.create(req.body)
            res.status(201).json(order)
        }catch(err){
            res.status(500).json(err)
        }
    }
}

export default handler;
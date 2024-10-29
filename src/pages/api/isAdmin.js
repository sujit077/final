// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
    
    const response = await axios.get(`https://ikegai-dev.southindia.cloudapp.azure.com/solution-manager/v1/users/user?id=${req.body.id}`)
    const isAdmin = await response.data.data.is_admin
    

    res.status(200).json(await isAdmin);

}
  
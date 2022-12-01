import { getAddress } from "../../controller/addressController";

export default async function handler(req, res) {
  const result = await getAddress();
  res.json(result);
}

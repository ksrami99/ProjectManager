import { ApiResponse } from "../utils/api-response.js";

const heathCheck = (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "server is running" }));
};

export { heathCheck };

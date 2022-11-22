import * as functions from "firebase-functions";

export default async (request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  functions.logger.info(request, { structuredData: true });
  response.json({ message: "Hello from Firebase 2!", yourIp: request.ip });
};

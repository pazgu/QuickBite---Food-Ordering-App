import { auth } from "express-oauth2-jwt-bearer";

//middleware checks the auth and bearer token to a loggedin user
export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

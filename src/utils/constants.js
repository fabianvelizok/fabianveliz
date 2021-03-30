const PROD_URL = "https://fabianveliz.herokuapp.com";
const DEV_URL = "http://localhost:3000" ;

export const IS_PROD = process.env.NODE_ENV !== "development";
export const HOST = IS_PROD ? PROD_URL : DEV_URL;
 
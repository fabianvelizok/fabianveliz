import { from } from "@apollo/client";
import { makeSchema } from "@nexus/schema";
import * as types from "./allTypes";

export const schema = makeSchema({
  types
});

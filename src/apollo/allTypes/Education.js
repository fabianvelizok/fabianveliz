import { objectType } from "@nexus/schema";

export const Education = objectType({
  name: "Education",
  definition(t) {
    t.string("from"),
    t.string("to"),
    t.string("title"),  
    t.string("description")
  }
});
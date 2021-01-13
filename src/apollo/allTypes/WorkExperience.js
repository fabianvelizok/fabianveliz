import { objectType } from "@nexus/schema";

export const WorkExperience = objectType({
  name: "WorkExperience",
  definition(t) {
    t.string("from"),
    t.string("to"),
    t.string("title"),  
    t.string("description")
  }
});
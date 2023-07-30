import { objectType } from "@nexus/schema";

export const Course = objectType({
  name: "Course",
  definition(t) {
    t.string("name"),
    t.string("link")
  }
});
import { objectType } from "@nexus/schema";

export const Project = objectType({
  name: "Project",
  definition(t) {
    t.string("name"),
    t.string("link")
  }
});
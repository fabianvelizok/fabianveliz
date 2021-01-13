import { objectType } from "@nexus/schema";

export const Language = objectType({
  name: "Language",
  definition(t) {
    t.string("name"),
    t.string("level")
  }
});
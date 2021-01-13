import { objectType } from "@nexus/schema";

export const SocialLink = objectType({
  name: "SocialLink",
  definition(t) {
    t.id("key"),
    t.string("label"),
    t.string("link"),
    t.string("target")
  }
});
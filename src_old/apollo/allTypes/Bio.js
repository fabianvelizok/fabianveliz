import { objectType } from "@nexus/schema";
import { SocialLink } from "Apollo/allTypes";
 
export const Bio = objectType({
  name: "Bio",
  definition(t) {
    t.string("name"),
    t.string("tagline"),
    t.string("full_profile"),
    t.string("short_profile"),
    t.string("avatar"),
    t.list.field("socialLinks", {
      type: SocialLink,
      resolve: (bio) => bio.socialLinks
    });
  }
});
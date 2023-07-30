import { queryType } from "@nexus/schema";
import {
  Bio,
  Course,
  Education,
  Language,
  WorkExperience
} from "Apollo/allTypes";

// TODO: Connect to Likedin API
import data from "Apollo/data";

export const Query = queryType({
  definition(t) {
    t.string("bio", {
      type: Bio,
      resolve: () => data.bio
    });

    t.list.string("skills", {
      resolve: () => data.skills
    })

    t.list.field("courses", {
      type: Course,
      resolve: () => data.courses
    });

    t.list.field("workExperience", {
      type: WorkExperience,
      resolve: () => data.workExperience
    });

    t.list.field("education", {
      type: Education,
      resolve: () => data.education
    });

    t.list.field("languages", {
      type: Language,
      resolve: () => data.languages
    });
  }
});
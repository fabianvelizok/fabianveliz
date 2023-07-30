import { objectType } from "@nexus/schema";

export const WorkExperience = objectType({
  name: "WorkExperience",
  definition(t) {
    t.string("from"),
    t.string("to"),
    t.string("title"),  
    t.string("description"),
    t.string("logo"),
    t.list.field("projects", {
      type: "Project",
      resolve: (workExperience) => workExperience.projects
    }),
    t.list.string("technologies", {
      resolve: (workExperience) => workExperience.technologies
    })
  }
});
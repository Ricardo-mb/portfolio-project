import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from "graphql";

//Define the User type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});
//Define the Project type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    projectUrl: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //Code to get data from db/other source
        const users = [
          { id: "1", name: "John Doe", email: "john@example.com" },
          { id: "2", name: "Jane Doe", email: "jane@example.com" },
        ];
        return users.find((user) => user.id === args.id);
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //Code to get data from db/other source
        const projects = [
          {
            id: "1",
            title: "Project 1",
            description: "Project 1 description",
            imageUrl: "https://placehold.co/400",
            projectUrl: "https://example.com/project1",
          },
          {
            id: "2",
            title: "Project 2",
            description: "Project 2 description",
            imageUrl: "https://placehold.co/400",
            projectUrl: "https://example.com/project2",
          },
        ];
        return projects.find((project) => project.id === args.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        const projects = [
          {
            id: "1",
            title: "Project 1",
            description: "Project 1 description",
            imageUrl: "https://via.placeholder.com/150",
            projectUrl: "https://example.com/project1",
          },
          {
            id: "2",
            title: "Project 2",
            description: "Project 2 description",
            imageUrl: "https://via.placeholder.com/150",
            projectUrl: "https://example.com/project2",
          },
        ];
        return projects;
      },
    },
  },
});

// The GraphQL Schema
const schema = new GraphQLSchema({
  query: RootQuery,
});

export { RootQuery, UserType, ProjectType, schema };

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
} from "graphql";
import { User } from "../models/userModels.js";
import { Project } from "../models/projectModels.js";

//Define the User type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    isAdmin: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
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
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.user);
      },
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        //Code to get data from db
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //Code to get data from db/
        return User.findById(args.id);
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //Code to get data from db/other source
        return Project.findById(args.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      resolve() {
        return Project.find();
      },
    },
  },
});

// The GraphQL Schema
const schema = new GraphQLSchema({
  query: RootQuery,
});

export { RootQuery, UserType, ProjectType, schema };

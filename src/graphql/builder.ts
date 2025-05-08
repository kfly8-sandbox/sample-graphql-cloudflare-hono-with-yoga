import SchemaBuilder from '@pothos/core';
import { GQLContext } from './context';

type GQLSchema = {
  Context: GQLContext;
  // Create a Builder that makes input fields and arguments required by default
  DefaultInputFieldRequiredness: true;
};

export const builder = new SchemaBuilder<GQLSchema>({
  defaultInputFieldRequiredness: true,
});

// We create empty root query, mutation, and subscription
// because we'll define individual nodes in other files
// since those nodes can have multiple resolvers and possibly
// can lead to really large and hard to read/navigate files
builder.queryType({});
//builder.mutationType({});
//builder.subscriptionType({});

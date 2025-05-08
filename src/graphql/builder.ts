import SchemaBuilder from '@pothos/core';

export const builder = new SchemaBuilder({});

// We create empty root query, mutation, and subscription
// because we'll define individual nodes in other files
// since those nodes can have multiple resolvers and possibly
// can lead to really large and hard to read/navigate files
builder.queryType({});
//builder.mutationType({});
//builder.subscriptionType({});

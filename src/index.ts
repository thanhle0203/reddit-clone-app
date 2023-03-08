import { HelloResolver } from './resolvers/hello';
import { Post } from './entities/Post';
import { __prod__ } from './constants';
import { MikroORM } from "@mikro-orm/core";
import microConfig from "./mikro-orm.config";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    // const post = orm.em.create(Post, {title: "my first post"});
    // await orm.em.persistAndFlush(post);
    //await orm.em.nativeInsert(Post, {title: 'my first post 2'});
    // const posts = await orm.em.find(Post, {});
    // console.log(posts);
    const app = express();
    
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        })
    });

    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log('server started on localhost:4000')
    })
    
};

main().catch((err) => {
    console.error(err);
});
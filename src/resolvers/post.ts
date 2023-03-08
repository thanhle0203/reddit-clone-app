import { Post } from './../entities/Post';
import { Ctx, Query, Resolver } from "type-graphql";
import "core-js/features/reflect";
import 'reflect-metadata';

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    posts(
        @Ctx() ctx: MyContext
    ) {
        return "hello world"
    }
}
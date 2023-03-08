import { Query, Resolver } from "type-graphql";
import "core-js/features/reflect";
import 'reflect-metadata';

@Resolver()
export class HelloResolver {
    @Query(() => String)
    hello() {
        return "hello world"
    }
}
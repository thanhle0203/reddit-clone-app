"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const constants_1 = require("./constants");
const core_1 = require("@mikro-orm/core");
const main = async () => {
    const orm = await core_1.MikroORM.init({
        entities: [Post_1.Post],
        dbName: 'lireddit',
        type: 'postgresql',
        debug: !constants_1.__prod__
    });
};
main();
//# sourceMappingURL=index.js.map
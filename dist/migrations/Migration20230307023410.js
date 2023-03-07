"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230307023410 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230307023410 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "title" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    }
}
exports.Migration20230307023410 = Migration20230307023410;
//# sourceMappingURL=Migration20230307023410.js.map
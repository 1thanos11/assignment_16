"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TWITTER_LINK = exports.INSTAGRAM_LINK = exports.FACEBOOK_LINK = exports.EMAIL_PASS = exports.EMAIL_USER = exports.CLIENT_IDS = exports.IV_LENGTH = exports.ENCRYPTION_SECRET_KEY = exports.SALT_ROUND = exports.REDIS_URI = exports.DB_URI = exports.APPLICATION_NAME = exports.PORT = exports.env = void 0;
const dotenv_1 = require("dotenv");
const node_path_1 = require("node:path");
const zod_1 = __importDefault(require("zod"));
(0, dotenv_1.config)({ path: (0, node_path_1.resolve)(`./.env.${process.env.NODE_ENV}`) });
const envSchema = zod_1.default.object({
    PORT: zod_1.default.coerce.number(),
    DB_URI: zod_1.default.string(),
    REDIS_URI: zod_1.default.string(),
    SALT_ROUND: zod_1.default.coerce.number(),
    ENCRYPTION_SECRET_KEY: zod_1.default.string().min(1),
    IV_LENGTH: zod_1.default.coerce.number(),
});
exports.env = envSchema.parse(process.env);
exports.PORT = exports.env.PORT;
exports.APPLICATION_NAME = process.env.APPLICATION_NAME;
exports.DB_URI = exports.env.DB_URI;
exports.REDIS_URI = exports.env.REDIS_URI;
exports.SALT_ROUND = exports.env.SALT_ROUND;
exports.ENCRYPTION_SECRET_KEY = exports.env.ENCRYPTION_SECRET_KEY;
exports.IV_LENGTH = exports.env.IV_LENGTH;
exports.CLIENT_IDS = process.env.CLIENT_IDS;
exports.EMAIL_USER = process.env.EMAIL_USER;
exports.EMAIL_PASS = process.env.EMAIL_PASS;
exports.FACEBOOK_LINK = process.env.FACEBOOK_LINK;
exports.INSTAGRAM_LINK = process.env.INSTAGRAM_LINK;
exports.TWITTER_LINK = process.env.TWITTER_LINK;

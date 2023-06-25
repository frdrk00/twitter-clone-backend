"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const tweetRoutes_1 = __importDefault(require("./routes/tweetRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const authMiddlewares_1 = require("./middlewares/authMiddlewares");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/user', authMiddlewares_1.authenticateToken, userRoutes_1.default);
app.use('/tweet', authMiddlewares_1.authenticateToken, tweetRoutes_1.default);
app.use('/auth', authRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(3000, () => {
    console.log('Server ready at localhost:3000');
});

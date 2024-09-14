import { games } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    games.push({
        id: Math.random().toString();
        "whitePlayer": "harkirat",
        "blackPlayer": "utkarsh",
        moves: []
    })
}, 5000)

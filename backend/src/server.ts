import fastify from "fastify";
import { UserController } from "./controller/user.controller";

const app = fastify({ logger: true });

app.register(UserController);

app.listen({ port: 3333 }, (err: Error | null, address: string) => {
    if(err){
        console.error(err);
        process.exit(1);
    }

    console.log(`Server is running on ${address}`);
});
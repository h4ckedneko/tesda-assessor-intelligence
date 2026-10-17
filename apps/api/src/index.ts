import { RPCHandler } from "@orpc/server/fetch";
import { os } from "./orpc";
import { login } from "./handlers/auth";

const router = os.router({
  auth: {
    login,
  },
});

const handler = new RPCHandler(router);

export default {
  async fetch(request) {
    const { response } = await handler.handle(request, {
      prefix: "/rpc",
      context: {},
    });

    return response ?? new Response("Ewan ko sayo", { status: 404 });
  },
} satisfies ExportedHandler;

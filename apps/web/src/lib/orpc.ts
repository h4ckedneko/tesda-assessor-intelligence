import type { RouterContractClient } from "@orpc/contract";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { contract } from "@tarsier/orpc";

const link = new RPCLink({
  origin: "http://localhost:5174",
  url: "/rpc",
});

export const orpc: RouterContractClient<typeof contract> = createORPCClient(link);

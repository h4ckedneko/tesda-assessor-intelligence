import { oc } from "@orpc/contract";
import * as z from "zod";

export const login = oc
  .input(
    z.object({
      email: z.email().nonempty(),
      password: z.string().nonempty(),
    }),
  )
  .output(
    z.object({
      token: z.string(),
    }),
  )
  .errors({
    UNAUTHORIZED: {
      message: "Incorrect email or password",
    },
  });

export const auth = {
  login,
};

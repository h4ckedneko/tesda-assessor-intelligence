import { os } from "../orpc";

export const login = os.auth.login
  .handler(async ({ input, errors }) => {
    console.log(input);
    throw errors.UNAUTHORIZED();
  });

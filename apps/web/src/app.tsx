import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router";
import { Theme } from "@astryxdesign/core/theme";
import { theme } from "./theme";
import { AppRoutes } from "./routes";

const queryClient = new QueryClient();

export function App() {
  return (
    <Theme theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </Theme>
  );
}

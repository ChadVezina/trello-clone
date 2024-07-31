"use client";

import { useEffect, useState } from "react"; //
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

    /*
  useEffect(() => {
    return () => {
      queryClient.clear();
    };
  }, [queryClient]);
    */

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

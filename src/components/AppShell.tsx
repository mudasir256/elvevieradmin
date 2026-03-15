"use client";

import { usePathname } from "next/navigation";
import { AuthProvider } from "../context/AuthContext";
import { AuthGuard } from "./AuthGuard";
import { ReduxProvider } from "../store/ReduxProvider";
import { Sidebar } from "./Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <AuthProvider>
      <ReduxProvider>
        <AuthGuard>
          {isLoginPage ? (
            children
          ) : (
            <>
              <Sidebar />
              <main className="ml-64 min-h-screen">{children}</main>
            </>
          )}
        </AuthGuard>
      </ReduxProvider>
    </AuthProvider>
  );
}

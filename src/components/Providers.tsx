"use client";

import { RegistrationModal } from "./RegistrationModal";
import { RegistrationModalProvider } from "./RegistrationModalContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RegistrationModalProvider>
      {children}
      <RegistrationModal />
    </RegistrationModalProvider>
  );
}

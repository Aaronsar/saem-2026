"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type RegistrationModalContextValue = {
  open: boolean;
  source: string;
  openModal: (source?: string) => void;
  closeModal: () => void;
};

const RegistrationModalContext =
  createContext<RegistrationModalContextValue | null>(null);

export function RegistrationModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("popup");

  const openModal = useCallback((nextSource = "popup") => {
    setSource(nextSource);
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeModal]);

  const value = useMemo(
    () => ({ open, source, openModal, closeModal }),
    [open, source, openModal, closeModal],
  );

  return (
    <RegistrationModalContext.Provider value={value}>
      {children}
    </RegistrationModalContext.Provider>
  );
}

export function useRegistrationModal() {
  const ctx = useContext(RegistrationModalContext);
  if (!ctx) {
    throw new Error("useRegistrationModal must be used within RegistrationModalProvider");
  }
  return ctx;
}

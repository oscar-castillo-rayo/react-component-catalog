import { create } from "zustand";
import { useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

type SidebarStore = {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
  toggleIsMobile: () => void;
};

// Creación del store básico de Zustand
const useCheckMobileStore = create<SidebarStore>()((set) => ({
  isMobile: true,
  setIsMobile: (isMobile: boolean) => set({ isMobile }),
  toggleIsMobile: () => set((state) => ({ isMobile: !state.isMobile })),
}));

// Hook personalizado que combina el store con la detección de dispositivos
export function useMobileDetection() {
  const isMobileQuery = useMediaQuery("(max-width: 767px)");
  const { setIsMobile } = useCheckMobileStore();
  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery, setIsMobile]);

  return useCheckMobileStore();
}

export default useCheckMobileStore;

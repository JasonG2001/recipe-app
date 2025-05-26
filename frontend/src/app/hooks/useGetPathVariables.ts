import { usePathname } from "next/navigation";

export const useGetPathVariables = () => {
  const curPathName = usePathname();

  const pathVariables = curPathName.split("/").filter(Boolean);

  return { pathVariables };
};

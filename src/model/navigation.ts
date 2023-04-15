import { ReactNode } from "react";

export type Route = {
  name: string;
  layout: string;
  component: ReactNode;
  icon: ReactNode | string;
  secondary?: boolean;
  path: string;
};

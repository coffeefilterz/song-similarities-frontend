import type { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {
  return <article className="page">{children}</article>;
};

export default Page;

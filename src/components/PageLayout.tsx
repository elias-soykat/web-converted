import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <main>
      <section className="container py-6">{children}</section>
    </main>
  );
}

import { LayoutProps } from "@/interfaces";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  );
}

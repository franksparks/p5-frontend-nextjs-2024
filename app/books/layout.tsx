type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-row items-stretch">
      <div>{children}</div>
    </div>
  );
}

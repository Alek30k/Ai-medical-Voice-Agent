import AppHeader from "./_components/AppHeader";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <AppHeader />
      {children}
    </div>
  );
};

export default DashboardLayout;

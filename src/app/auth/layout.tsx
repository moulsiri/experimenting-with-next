export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen bg-slate-50 flex justify-center">
      {children}
    </div>
  );
}

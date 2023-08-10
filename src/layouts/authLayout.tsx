export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-primaryContrast"></div>
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
}

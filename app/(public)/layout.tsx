import React from "react";

export default function PublicLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-screen w-screen">
      <main className="flex h-full w-full">
        <div className="hidden h-full w-full bg-foreground md:block"></div>
        <div className="flex h-full w-full max-w-[680px]">{children}</div>
      </main>
    </div>
  );
}

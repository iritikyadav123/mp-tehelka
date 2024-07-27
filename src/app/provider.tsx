"use client"
import { EdgeStoreProvider } from "@/lib/edgestore";
import { RecoilRoot } from "recoil"



export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <RecoilRoot>
      <EdgeStoreProvider>
        {children}
      </ EdgeStoreProvider>
    </RecoilRoot>

  )
}
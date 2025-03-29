import { PropsWithChildren } from "react";


export function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <div className="text-white text-center my-4 bg-[#d65e5e] font-bold p-3 uppercase rounded-md">{ children }</div>
  )
}

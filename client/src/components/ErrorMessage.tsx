import { PropsWithChildren } from "react";


export function ErrorMessage({ children }: PropsWithChildren) {
  return (
    <div className="text-white text-center my-4 bg-red-600 font-bold p-3 uppercase">{ children }</div>
  )
}

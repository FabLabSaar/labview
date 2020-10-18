import * as React from "react";
import { Filament } from "../models/filament";

export interface IFilamentView {
   filament: Filament;
}

export default function FilamentView(props: IFilamentView) {
  return (
    <div className="text-gray-700 text-center bg-gray-400 p-2">
      {props.filament.name}
    </div>
  )
}
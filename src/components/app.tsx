import * as React from "react";
import FilamentView from "./filamentView";
import { Filament } from "../models/filament";

export interface IAppProps {}

export default function IApp(props: IAppProps) {
  let fs: Filament[] = [
    new Filament(),
    new Filament(),
    new Filament(),
    new Filament(),
    new Filament()
  ];
  return (
    <div>
      <h1>Hello React Typescript!</h1>
      <FilamentView filaments={fs} />
    </div>
  );
}
import * as React from "react";
import FilamentView from "./filamentView";
import { Filament } from "../models/filament";

export interface IAppProps {}

export default function IApp(props: IAppProps) {
  let fs: Filament[] = []
  fetch('http://localhost:8080/filaments')
    .then(response => response.json())
    .then(data => data.forEach(e => {
      let f = new Filament()
      f.id = e.id;
      f.name = e.name;
      fs.push(f);
    }));
  return (
    <div>
      <h1>Hello React Typescript!</h1>
      <FilamentView filaments={fs} />
    </div>
  );
}
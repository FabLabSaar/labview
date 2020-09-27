import * as React from "react";
import { Filament } from "../models/filament";

export interface IFilamentView {
   filaments: Filament[];
}

export default function FilamentView(props: IFilamentView) {
  let items = props.filaments.map((f: Filament) => <li>{f.id}</li>);
  return (
    <div>
        <ul>{items}</ul>
    </div>
  )
}
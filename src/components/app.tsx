import * as React from "react";
import FilamentView from "./filamentView";
import { Filament } from "../models/filament";

export interface IAppProps {}

export default function IApp(props: IAppProps) {
  const [data, setData] = React.useState(new Array<Filament>());

  React.useEffect(() => {
    const fetchFilaments = async () => {
        let filaments = await fetch('http://localhost:8080/filaments')
          .then(response => response.json())
          .then(data => data.map((e: any) => {
                let f = new Filament();
                f.id = e.id;
                f.name = e.name;
                return f;
            }
          ));
        setData(filaments);
    };
    fetchFilaments();
  }, []);

  let items = data.map((f: Filament) => <FilamentView filament={f} />)

  return (
    <div>
      <h1>Hello React Typescript!</h1>
      <div>
        {items}
      </div>
    </div>
  );
}
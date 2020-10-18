class Filament {
    id: number;
    name: string;
    type: FilamentType;
    manufacturer: string;
    amount: [number, number];

    constructor() {
        this.id = 0;
        this.name = "";
        this.type = FilamentType.PLA;
        this.manufacturer = "";
        this.amount = [0,1000];
    }
}

enum FilamentType {
    PLA,
    PETG,
    ABS
}

export { Filament, FilamentType };
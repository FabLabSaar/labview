class Filament {
    id: number;
    name: string;
    type: FilamentType;
    manufacturer: string;
    amount: [number, number];

    constructor() {
    }
}

enum FilamentType {
    PLA,
    PETG,
    ABS
}

export { Filament, FilamentType };
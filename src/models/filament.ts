import { v4 } from 'uuid';

class Filament {
    id: string;
    type: FilamentType;
    manufacturer: string;
    amount: [number, number];

    constructor() {
        this.id = v4();
    }
}

enum FilamentType {
    PLA,
    PETG,
    ABS
}

export { Filament, FilamentType };
/**stucture of columns of table */
export class Column {
    private _name: string;
    private _field: string;
    private _type: string; // type enum

    constructor(name: string, field: string, type: string) {
        this._name = name;
        this._field = field;
        this._type = type;
    }

    set name(name: string) {
        this._name = name;
    }

    set field(field: string) {
        this._field = field;
    }

    set type(type: string) {
        this._type = type;
    }

    get name() {
        return this._name;
    }

    get field() {
        return this._field;
    }

    get type() {
        return this._type;
    }
}

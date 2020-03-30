export class KisMatTableOptions {

    private _hoverColor: string;
    private _rowTextColor: string;
    private _rowHighLightedColor: string;
    private _checkboxSelection: boolean;
    private _ratioButtonSelection: boolean;
    private _columnContainImage: boolean;

    constructor() {
        this._hoverColor = null;
        this._rowTextColor = null;
        this._rowHighLightedColor = null;
        this._checkboxSelection = null;
        this._ratioButtonSelection = null;
        this._columnContainImage = null;

    }

    set checkboxSelection(checkboxSelection: boolean) {
        if (this._ratioButtonSelection && checkboxSelection) {
            console.error('ratioButtonSelection is also defined at true, set ratioButtonSelection at false');
        } else {
            this._checkboxSelection = checkboxSelection;
        }
    }
    set hoverColor(hoverColor: string) {
        this._hoverColor = hoverColor;
    }
    set ratioButtonSelection(ratioButtonSelection: boolean) {
        if (this._checkboxSelection && ratioButtonSelection) {
            console.error('checkboxSelection is also defined at true, set checkboxSelection at false');
        } else {
            this._ratioButtonSelection = ratioButtonSelection;
        }

    }
    set rowHighLightedColor(rowHighLightedColor: string) {
        this._rowHighLightedColor = rowHighLightedColor;
    }
    set rowTextColor(rowTextColor: string) {
        this._rowTextColor = rowTextColor;
    }

    set columnContainImage(columnContainImage: boolean) {
        this._columnContainImage = columnContainImage;
    }


    get checkboxSelection() {
        return this._checkboxSelection;
    }
    get hoverColor() {
        return this._hoverColor;
    }
    get ratioButtonSelection() {
        return this._ratioButtonSelection;
    }
    get rowHighLightedColor() {
        return this._rowHighLightedColor;
    }
    get rowTextColor() {
        return this._rowTextColor;
    }

    get columnContainImage() {
        return this._columnContainImage;
    }

}

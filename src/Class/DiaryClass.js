export default class DiaryClass {


    constructor(title, date, content) {
        this._title = title;
        this._date = date;
        this._content = content;
    }


    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get date() {
        return this._date;
    }

    set date(value) {
        this._date = value;
    }

    get content() {
        return this._content;
    }

    set content(value) {
        this._content = value;
    }
}
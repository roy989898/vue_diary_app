export default class DiaryClass {


    constructor(id, title, date, content) {
        this._title = title;
        this._date = date;
        this._content = content;
        this._id = id;
    }


    get id() {
        return this._id;
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
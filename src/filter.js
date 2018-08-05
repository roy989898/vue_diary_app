import dateFormat from 'dateformat'

let dateFormatFilter = function (value) {
    // let showDate = value.getFullYear() + "/" + (value.getMonth() + 1) + "/" + value.getDate();
    // 1980-01-01
    return dateFormat(value, 'yyyy-mm-dd');
}


export {
    dateFormatFilter,
}
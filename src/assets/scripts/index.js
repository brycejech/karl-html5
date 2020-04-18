function leftPad(str, len, pad) {
    if (str.length < len) {
        while (str.length < len) {
            str = pad + str;
        }
    }
    return str;
}

(function () {
    var d = new Date();

    var day = d.getDate().toString(),
        month = (d.getMonth() + 1).toString(),
        year = d.getFullYear();

    document.write('<p>Last Updated: ' + [leftPad(month, 2, '0'), leftPad(day, 2, '0'), year].join('/') + '</p>');
})();
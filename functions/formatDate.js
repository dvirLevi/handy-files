const formatDate = {
  dateV(date) {
    var month = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי",
      "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
    ];
    var d = new Date(date);
    return d.getDate() + " " + "ב" + month[d.getMonth()] + " " + d.getFullYear()
  },
  date(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return day + '/' + month + '/' + year;
  },
  time(date) {
    let d = new Date(date);
    return this.addZero(d.getHours()) + ":" + this.addZero(d.getMinutes())
  },
  addZero(n) {
    return (n.toString().length <= 1) ? "0" + n : n;
  }
}


export default formatDate
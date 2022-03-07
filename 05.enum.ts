//numeric enum
enum Month1 {
  JAN = 1,
  FEB, //otomatis jadi 2
  MAR,
}
console.info(Month1);
console.info(Month1.JAN);
console.info(Month1.FEB);

//string enum
enum Month2 {
  JAN = "januari",
  FEB = "febuari",
  MAR = "maret",
}
console.info(Month2);
console.info(Month2.JAN);
console.info(Month2.FEB);

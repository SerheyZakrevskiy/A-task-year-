const yearsCount = (year) => {
  let years;
  const yearsLastNumber = year % 10;
  if (year === 11 || year === 12 || year === 13 || year === 14) {
    years = "Років";
  } else if (yearsLastNumber === 1 && year !== 11) {
    years = "Рік";
  } else if (
    (yearsLastNumber === 2 || yearsLastNumber === 3 || yearsLastNumber === 4) &&
    (year !== 12 || year !== 13 || year !== 14)
  ) {
    years = "Роки";
  } else if (
    yearsLastNumber === 5 ||
    yearsLastNumber === 6 ||
    yearsLastNumber === 7 ||
    yearsLastNumber === 8 ||
    yearsLastNumber === 9
  ) {
    years = "Років";
  }
  return years;
};
console.log(yearsCount(1));
console.log(yearsCount(2));
console.log(yearsCount(3));
console.log(yearsCount(4));
console.log(yearsCount(5));
console.log(yearsCount(6));
console.log(yearsCount(7));
console.log(yearsCount(8));
console.log(yearsCount(9));
console.log(yearsCount(12));
console.log(yearsCount(14));
console.log(yearsCount(33));
console.log(yearsCount(44));
console.log(yearsCount(41));
console.log(yearsCount(77));
console.log(yearsCount(312));
console.log(yearsCount(4423432));

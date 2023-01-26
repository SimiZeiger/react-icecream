

const numArray = [437, 10, 30, 582];

const newArray = numArray.map((num, Index) => {
    console.log(`Index: ${Index + 1}`);
  return num + 1;
});
console.log(newArray);
const allTags = [
  "short sleeve top",
  "long sleeve top",
  "short sleeve outwear",
  "long sleeve outwear",
  "vest",
  "sling",
  "shorts",
  "trousers",
  "skirt",
  "short sleeve dress",
  "long sleeve dress",
  "vest dress",
  "sling dress",
];

export function decode(str) {
  var arr = [];
  for (let i = 0; i < 13; i++) {
    if (str[i] === "1") {
      arr.push(allTags[i]);
    }
  }
  console.log(arr);

  return arr;
}


export const createExcerpt = (string, from, to) => {
  let regex = /(<([^>]+)>)/ig;
  let removedHtml = string.replace(regex, "");
  let createArrayFromString = removedHtml.split("");
  let reduceArrayLength = createArrayFromString.splice(from, to);
  let arrayToString = reduceArrayLength.join('');
  return arrayToString + '...';
}

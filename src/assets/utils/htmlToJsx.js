

export function(data) {
  var regex = /(<([^>]+)>)/ig;
  data.replace(regex, "");
}

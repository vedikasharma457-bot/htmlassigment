function cleanFormText(value) {
  if (typeof value !== "string") return "";
  return value.normalize("NFKC").trim().replace(/\s+/g, " ");
}
function cleanEmail(value) {
  return cleanFormText(value).toLowerCase();
}
function cleanName(value) {
  return cleanFormText(value).replace(/[^\p{L} .'’-]/gu, "");
}
console.log(cleanFormText("  Vedika    Sharma  "));
console.log(cleanEmail("  VEDIKA@EXAMPLE.COM "));
console.log(cleanName("Vedika123 Sharma!"));

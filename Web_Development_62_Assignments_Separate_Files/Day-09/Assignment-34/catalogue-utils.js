const fs = require("node:fs");
const data = JSON.parse(fs.readFileSync("../Assignment-33/catalogue.json", "utf8"));
function validateCatalogue(value) {
  return value && Array.isArray(value.catalogue) &&
    value.catalogue.every(p => Number.isInteger(p.id) && typeof p.name === "string" &&
      typeof p.category === "string" && Number.isFinite(p.price) && typeof p.inStock === "boolean");
}
if (!validateCatalogue(data)) throw new Error("Invalid catalogue data.");
console.log("Catalogue valid. Products:", data.catalogue.length);
console.log("In stock:", data.catalogue.filter(p=>p.inStock));

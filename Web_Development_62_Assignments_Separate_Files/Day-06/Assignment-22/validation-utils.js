function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function isValidEmail(email) {
  if (!isNonEmptyString(email)) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
function isPositiveNumber(value) {
  return typeof value === "number" && Number.isFinite(value) && value > 0;
}
function isInRange(value, min, max) {
  if (typeof value !== "number" || !Number.isFinite(value)) return false;
  return value >= min && value <= max;
}
function requireFields(data, fields) {
  if (!data || typeof data !== "object") return false;
  return fields.every(field => isNonEmptyString(String(data[field] ?? "")));
}
module.exports = { isNonEmptyString, isValidEmail, isPositiveNumber, isInRange, requireFields };

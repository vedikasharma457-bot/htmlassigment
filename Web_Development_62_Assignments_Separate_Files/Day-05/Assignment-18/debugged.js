// Corrected JavaScript: calculate average and report pass/fail.
function calculateResult(marks) {
  if (!Array.isArray(marks) || marks.length === 0) {
    throw new Error("Provide a non-empty marks array.");
  }
  if (marks.some(mark => typeof mark !== "number" || mark < 0 || mark > 100)) {
    throw new Error("Every mark must be a number from 0 to 100.");
  }
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  return { total, average, status: average >= 40 ? "Pass" : "Fail" };
}
console.log(calculateResult([78, 85, 69, 91]));

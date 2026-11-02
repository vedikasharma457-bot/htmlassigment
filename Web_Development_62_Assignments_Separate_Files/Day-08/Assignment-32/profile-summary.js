const profile = {
  name: "Vedika Sharma",
  course: "BCA Artificial Intelligence",
  skills: ["HTML", "CSS", "Java", "Python"],
  location: "Bareilly",
  social: { github: "vedikasharma457-bot" }
};
function createProfileSummary(data) {
  const { name = "Student", course = "Not specified", skills = [], location = "Not specified" } = data;
  return `${name} is studying ${course}. Skills: ${skills.join(", ") || "Not added"}. Location: ${location}.`;
}
console.log(createProfileSummary(profile));
console.log("Keys:", Object.keys(profile));
console.log("Values:", Object.values(profile));
console.log("Entries:", Object.entries(profile));

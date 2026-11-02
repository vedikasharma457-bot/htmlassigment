# Bug Log
| Issue | Cause | Fix | Verification |
|---|---|---|---|
| Blank tasks added | Input not trimmed | Trim and validate title | Empty/space-only input rejected |
| Tasks disappear after refresh | State not persisted | Save JSON to localStorage | Refresh retains tasks |
| User text interpreted as markup | Unsafe HTML insertion | Use textContent and createElement | Text displays literally |
| Filter shows wrong items | Filter condition incorrect | Match status explicitly | Active/completed tests pass |

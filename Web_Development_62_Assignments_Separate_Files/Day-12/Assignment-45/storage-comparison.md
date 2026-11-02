# localStorage vs sessionStorage
| Feature | localStorage | sessionStorage |
|---|---|---|
| Lifetime | Persists until cleared | Ends when the tab/session closes |
| Scope | Same origin across tabs | Same origin and tab |
| Capacity | Browser-dependent, commonly several MB | Browser-dependent, commonly several MB |
| API | `setItem`, `getItem`, `removeItem`, `clear` | Same API |
| Data type | Strings; use JSON for objects | Strings; use JSON for objects |
| Suitable for | Theme preference, persistent tasks | Temporary per-tab state |

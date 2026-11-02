# Contact Form Validation Test Matrix
| Test | Input | Expected result |
|---|---|---|
| Empty name | blank | Browser blocks submission |
| Invalid email | `abc` | Browser blocks submission |
| Valid email | `a@example.com` | Accepted |
| Empty message | blank | Browser blocks submission |
| Whitespace-only name | spaces | Application should reject after trimming |
| Valid all fields | valid values | Summary is displayed |

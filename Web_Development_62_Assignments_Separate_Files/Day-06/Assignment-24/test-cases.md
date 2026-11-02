# Practical Test Cases
| Function | Input | Expected |
|---|---|---|
| isNonEmptyString | `" hello "` | true |
| isNonEmptyString | `"   "` | false |
| isValidEmail | `"a@example.com"` | true |
| isValidEmail | `"invalid"` | false |
| isPositiveNumber | `10` | true |
| isPositiveNumber | `-2` | false |
| mergeSettings | `{a:1}`, `{b:2}` | `{a:1,b:2}` |

Reflection: Guard clauses validate inputs early and keep the main logic easier to read.

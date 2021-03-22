# validate-branch-name

This action ensures that a branch name conforms to a specific pattern.

## Inputs

### `pattern`

**Required** Regex pattern that the branch name should match. Default `"^[a-z\-]+$"`.

## Example usage

```yml
uses: goshencollege/validate-branch-name@v1.0.0
with:
  pattern: "^[a-z-]+$" # regex pattern forces the branch name to have letters or a hyphen
```

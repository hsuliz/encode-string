# Encode string action

This action prints encodes to base64 given string. It's useful for take secrets from GitHub Repository if needed.

## Inputs

### `string-to-encode`

**Required** String to encode.

## Outputs

### `encoded-string`

Encoded string. Can be decoded using **double** base 64 like this:
```shell
echo "<encoded-string>" | base64 -d | base64 -d
```

## Example usage

```yaml
uses: hsuliz/encode-string@main
with:
  string-to-encode: Very secret string
```

# Encode string action

This action prints encodes to base64 given string. It's useful for take secrets from GitHub Repository if needed.

## Inputs

### `string-to-encode`

**Required** String to encode.

## Outputs

### `encoded-string`

Encoded string

## Example usage

```yaml
uses: hsuliz/encode-string@main
with:
  string-to-encode: Very secret string
```

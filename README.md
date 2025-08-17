
# Interactive Input Field
A customizable input component with built-in validation states, multiple variants, and optional features like a clear button, password toggle, and theme support.

## Features

✅ Text input with label, placeholder, helper text, and error message

🎭 States: disabled, invalid, loading

🎨 Variants: filled, outlined, ghost

📏 Sizes: small, medium, large

🔄 Optional utilities: clear button, password toggle

🌗 Light & dark theme support


## Installation

Install my-project with npm

```bash
  npm install Interactive-Table
  
```
    
## Usage/Examples

```javascript
import { Input } from "@your-org/flexible-input";

export default function App() {
  return (
    <Input
      label="Email"
      placeholder="Enter your email"
      helperText="We'll never share your email."
    />
  );
}

```


##  Props


| Prop             | Type                                | Default      | Description                                |
| ---------------- | ----------------------------------- | ------------ | ------------------------------------------ |
| `label`          | `string`                            | —            | Label above the input                      |
| `placeholder`    | `string`                            | —            | Placeholder text                           |
| `helperText`     | `string`                            | —            | Supporting text below input                |
| `errorMessage`   | `string`                            | —            | Error message shown when `invalid` is true |
| `variant`        | `"filled" \| "outlined" \| "ghost"` | `"outlined"` | Input style                                |
| `size`           | `"small" \| "medium" \| "large"`    | `"medium"`   | Input size                                 |
| `disabled`       | `boolean`                           | `false`      | Disables input                             |
| `invalid`        | `boolean`                           | `false`      | Marks input as invalid                     |
| `loading`        | `boolean`                           | `false`      | Shows loading state                        |
| `clearable`      | `boolean`                           | `false`      | Adds a clear button                        |
| `passwordToggle` | `boolean`                           | `false`      | Adds a password visibility toggle          |
| `theme`          | `"light" \| "dark"`                 | `"light"`    | Theme mode                                 |

## Setup Instructions

To deploy this project run

```bash
# Install dependencies
    npm install

# Run application
    npm run dev

# Run tests
    npm test

```


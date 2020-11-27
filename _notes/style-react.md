There are several ways to style React elements:
• Regular CSS files, including CSS-modules.
```
<div className="styled">React element</div>
```

• Manually specifying element style property.
```
<div style={{ backgroundColor: "red" }}>Styled element</div>
```
A better practice is to define styles in a separate constant:
```
import React from "react"

const buttonStyles: React.CSSProperties = {
  backgroundColor: "#5aac44",
  borderRadius: "3px",
  border: "none",
  boxShadow: "none"
}
```
• Using external styling libraries.

```
  npm i styled-components @types/styled-components
```

```
import styled from "styled-components"


const Button = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  `



<Button>Click me</Button>

```

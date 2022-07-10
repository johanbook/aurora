### Usage

Buttons should be classified as primary, secondary and tertiary depending on how
much focus they should take from the user. Primary buttons take the most focus
and there should seldom be more than 1-2 primary buttons on the same page.

```jsx padded
<Button style={{margin: 10}} variant="contained">Primary</Button>
<Button style={{margin: 10}} variant="outlined">Secondary</Button>
<Button style={{margin: 10}} variant="text">Tertiary</Button>
```

#### Colors

Buttons also come in different colors

```jsx padded
<Button style={{margin: 10}} color="success" variant="contained">Primary</Button>
<Button style={{margin: 10}} color="success"  variant="outlined">Secondary</Button>
<Button style={{margin: 10}} color="success"  variant="text">Tertiary</Button>

<br />

<Button style={{margin: 10}} color="error" variant="contained">Primary</Button>
<Button style={{margin: 10}} color="error"  variant="outlined">Secondary</Button>
<Button style={{margin: 10}} color="error"  variant="text">Tertiary</Button>
```

#### Navigation

Buttons should not be used for navigation. Then links should be used.

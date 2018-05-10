Buttons:

```jsx

<Button 
  type="primary"
  onClick={() => setState({ clicked: true })}
  text="Submit a form"
/>

<Button 
  type="primary-inverted"
  onClick={() => setState({ clicked: true })}
  text="Open Modal"
/>
```

ButtonGroup:

```jsx

const petTypes = [
  { name: 'dog', type: 'image', content: dog },
  { name: 'cat', type: 'image', content: cat },
  { name: 'all', type: 'text', content: 'both' }
];

<ButtonGroup
  label="Pet Type"
  onChange={() => {}}
  selected={petTypes[1]}
  options={petTypes}
/>
```
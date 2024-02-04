`<FormRenderer />` is a component that will automatically render a collection of form fields based on its `fields` prop

```jsx
import FormRenderer from './FormRenderer';

const SomeForm = () => (
  <FormRenderer
    fields={[
      {
        type: 'text',
        name: 'user_name',
        label: 'User Name',
      },
      {
        type: 'number',
        name: 'user_age',
        label: 'User Age',
      },
    ]}
  />
);
```

## Main Recomendations

When possible, `fields` and `logic` props should be provided from the backend.

`FormRenderer` works like a library, when importing React components and types, only elements from `FormRenderer/index.ts` should be used.
The rest of components are meant to be used internally.

## State

`FormRenderer` has its own state with a State.Provider, to internally handle field values, errors, track touched fields etc.
Apart from that, `FormRenderer` should be state agnostic, **it should not be connected to external states** to avoid external dependencies.

## Fields with choices

Some Fields will offer a few choices to be selected by the user, like `SelectField` or `RadioGroupField`.

The set of choices can be provided directly on Field properties
This option is recommended when choices are a short list and values are always the same.

```jsx
import FormRenderer from './FormRenderer';

const SomeFormWithChoices = () => (
  <FormRenderer
    fields={[
      {
        type: 'dropdown',
        name: 'chamber',
        label: 'Chamber',
        choices: [
          { value: 'chamber_house', label: 'House' },
          { value: 'chamber_senate', label: 'Senate' },
          { value: 'chamber_both', label: 'Both' },
        ],
      },
    ]}
  />
);
```

However, sometimes the list of choices is already on the view (like all users list) or will mutate based on external conditions.
For those cases, it is recommended to use `choicesCollection` prop.

```jsx
import FormRenderer from './FormRenderer';

const SomeFormWithChoices = () => (
  <FormRenderer
    fields={[
      {
        type: 'dropdown',
        name: 'drafter',
        label: 'Drafter',
        // it should match an option key at choicesCollection
        choicesRef: 'drafters',
      },
    ]}
    choicesCollection={{
      drafters: [
        { value: 'user_a', label: 'User AAA' },
        { value: 'user_b', label: 'User BBB' },
        { value: 'user_c', label: 'User CCC' },
        // and more ...
      ],
    }}
  />
);
```

## Styles

To stype the form, use:

- `sxForm`: Styles to apply to from wrapper component

Fields could be styled using multiple props.
These props, sorted from lower to higher [specificity](https://www.w3schools.com/css/css_specificity.asp) are:

- `sxFields`: Styles to apply to ALL fields
- `sxFieldsByType`: Styles to apply to fields based on field type.
- `sxFieldsByName`: Styles to apply to fields based on field name.

## TODO

- Add readOnly mode on fields. Similar to disabled but with different UI
- Add onReset action to form
- Add unit testing
- Attachment field: Check functionallity

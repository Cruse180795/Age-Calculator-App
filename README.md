# Age-Calculator-App

## A responsive age calculator built with React, TypeScript and Tailwind CSS. Enter a date of birth and it shows your exact age in years, months and days.

- Validates on submit: required fields, valid day/month/year ranges, impossible dates (e.g. 31/02) and future dates
- Shows an error message under each invalid field, with the layout kept aligned using CSS subgrid
- Accessible: labelled inputs, aria-invalid/aria-describedby error wiring and a live region for results
- Reusable form components (FormLabel, FormInput, FormError, DisplayOutputString)

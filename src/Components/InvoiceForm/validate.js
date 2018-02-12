const validate = values => {
  console.log(values);
  const errors = {}
  if (!values.clubName) {
    errors.clubName = 'Required'
  }
  if (!values.items || !values.items.length) {
    errors.items = { _error: 'At least one item must be entered' }
  } else {
    const itemsArrayErrors = [];
    values.items.forEach((item, itemIndex) => {
      const itemErrors = {}
      if (!item || !item.contractor) {
        itemErrors.contractor = 'Required'
        itemsArrayErrors[itemIndex] = itemErrors
      }
      if (!item || !item.invoiceNumber) {
        itemErrors.invoiceNumber = 'Required'
        itemsArrayErrors[itemIndex] = itemErrors
      }

      if (!item || !item.vat || item.vat > 100) {
        itemErrors.vat = 'Required'
        itemsArrayErrors[itemIndex] = itemErrors
      }

    })
    if (itemsArrayErrors.length) {
      errors.items = itemsArrayErrors
    }
  }
  return errors
}

export default validate

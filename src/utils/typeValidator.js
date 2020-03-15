export const typeValidator = (key, types, componentName) => {
  return {
    [key]: {
      default: types[0],
      type: String,
      validator(value) {
        const isValid = types.includes(value);
        if (!isValid) {
          const message = `[Vue warn]: <${componentName}> ${key} "${value}", is not a valid ${key}`;
          console.error(message);
        }

        return isValid;
      }
    }
  };
};

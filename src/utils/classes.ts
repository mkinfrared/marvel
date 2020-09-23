type ClassName = string | undefined;

const classes = (...args: ClassName[]) => {
  const classNames = args.filter((arg) => !!arg);

  return classNames.join(" ");
};

export default classes;

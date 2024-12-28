const Text = (props) => {
  return (
    <p as={props.as} className={`text-base lg:text-xl ${props.className}`}>
      {props.children}
    </p>
  );
};

const H1 = (props) => {
  return (
    <h1
      as={props.as}
      className={`text-2xl lg:text-3xl font-bold ${props.className}`}
    >
      {props.children}
    </h1>
  );
};

const P = (props) => {
  return <Text {...props} />;
};

export default Text;
export { H1, P };

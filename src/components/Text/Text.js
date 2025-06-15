const Text = (props) => {
  const Component = props.as || "p";
  return (
    <Component
      as={props.as}
      className={`text-base lg:text-xl ${props.className ?? ""}`}
    >
      {props.children}
    </Component>
  );
};

const Heading = (props) => {
  const Component = props.as || "h2";
  return (
    <Component
      className={`text-2xl lg:text-3xl font-bold ${props.className ?? ""}`}
    >
      {props.children}
    </Component>
  );
};

const P = (props) => <Text {...props} />;

const H1 = (props) => <Heading as="h1" {...props} />;

const H2 = (props) => <Heading as="h2" {...props} />;

export default Text;
export { H1, H2, P };

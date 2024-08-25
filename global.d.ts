interface RootComponentProps {
  rootComponentProps: { hello: string };
}

declare global {
  interface Window {
    custom: {
      data: RootComponentProps;
    };
    externals: Record<string, unknown> & {
      React: typeof import("react");
      ReactDOM: typeof import("react-dom");
    };
  }

  declare module "*.module.css" {
    const classes: Record<string, string>;
    export default classes;
  }
}

export { RootComponentProps };

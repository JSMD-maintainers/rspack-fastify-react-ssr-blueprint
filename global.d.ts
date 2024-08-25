declare global {
  interface Window {
    custom: {
      data: {
        rootComponentProps: Record<string, unknown>;
      };
    };
    externals: Record<string, unknown> & {
      React: typeof import("react");
      ReactDOM: typeof import("react-dom");
    };
  }
}

declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

export {};

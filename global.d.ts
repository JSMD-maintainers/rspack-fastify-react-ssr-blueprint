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

export {};

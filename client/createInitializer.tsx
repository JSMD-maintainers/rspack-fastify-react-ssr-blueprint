import React, { ComponentType, JSX } from "react";
import { hydrateRoot } from "react-dom/client";
import { fragmentContext } from "./context";

export function createInitializer(RootComponent: ComponentType): {
  init: (rootElement: Element) => Promise<void>;
  Fragment: ({
    rootComponentProps,
  }: {
    rootComponentProps: Record<string, unknown>;
  }) => React.JSX.Element;
} {
  const Fragment = ({
    rootComponentProps,
  }: {
    rootComponentProps: Record<string, unknown>;
  }) => {
    return (
      <fragmentContext.Provider value={{ ...rootComponentProps }}>
        <RootComponent {...rootComponentProps} />
      </fragmentContext.Provider>
    );
  };

  async function init(rootElement: Element): Promise<void> {
    const { rootComponentProps } = window?.custom?.data;

    if (!rootElement) {
      throw new Error(
        `Could not initialize Fragment because no valid container element was given. Got: ${rootElement}`,
      );
    }

    hydrateRoot(
      rootElement,
      <Fragment rootComponentProps={rootComponentProps} />,
    );
  }

  return { Fragment, init };
}

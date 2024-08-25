import React, { ComponentType } from "react";
import { hydrateRoot } from "react-dom/client";
import { fragmentContext } from "./context";
import { RootComponentProps } from "../global";

export function createInitializer(
  RootComponent: ComponentType<RootComponentProps["rootComponentProps"]>,
): {
  init: (rootElement: Element) => Promise<void>;
  Fragment: ({ rootComponentProps }: RootComponentProps) => React.JSX.Element;
} {
  function Fragment({ rootComponentProps }: RootComponentProps) {
    return (
      <fragmentContext.Provider value={{ ...rootComponentProps }}>
        <RootComponent {...rootComponentProps} />
      </fragmentContext.Provider>
    );
  }

  async function init(rootElement: Element): Promise<void> {
    const { rootComponentProps } = window?.custom?.data!;

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

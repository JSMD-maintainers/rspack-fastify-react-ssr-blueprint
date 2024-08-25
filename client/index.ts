import { App } from "./App";
import { createInitializer } from "./createInitializer";

const { Fragment, init } = createInitializer(App);
export { Fragment, init };

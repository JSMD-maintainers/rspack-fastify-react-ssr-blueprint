import React, { JSX, useState } from "react";
import { JSLogo } from "./JSLogo";

function App(props: Record<string, unknown>): JSX.Element {
  const [number, setNumber] = useState(7);

  return (
    <div>
      <header>
        <JSLogo />
        <p>
          Hey ho <code>welcome</code> to JSMDs blueprint setup. These are my
          passed props {JSON.stringify(props)}
        </p>
        <button
          onClick={() => {
            setNumber(number + 1);
          }}
        >
          Increment number
        </button>
        <br />
        <br />
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Bump your lucky number {number}
        </a>
      </header>
    </div>
  );
}

export { App };

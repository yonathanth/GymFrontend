

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false;

import Login from "./Login/page";
export default function Home() {
  return (
    <body>
      <main>
        <Login />
      </main>
    </body>
  );
}

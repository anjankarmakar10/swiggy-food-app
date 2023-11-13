import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../toolkit/store";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering header", () => {
  // Load Header

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");

  // Check if logo is loaded
  expect(logo.src).toBe("http://localhost/dummy.png");
});

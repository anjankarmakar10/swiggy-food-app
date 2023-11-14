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
  expect(logo.src).toBe("http://localhost/dummyLogo.png");

  const online = header.getByTestId("online-status");
  expect(online.className).toBe("online");
});

test("Online status should be online on rendering header", () => {
  // Load Header

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.className).toBe("online");
});

test("Cart should have 0 items on rendering header", () => {
  // Load Header

  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");

  expect(cart.children.length).toBe(1);
});

import { render, screen } from "@testing-library/react";
import MainScreen from "../helperFunctions/renderComponents/MainScreen";

const setup = () => {
  const utils = render(<MainScreen />);
  const input = screen.getByLabelText("cost-input");
  return {
    input,
    ...utils,
  };
};
//recommended by maintainer to combine tests especially with shared variables
test.skip("expects search bar to load in Header.tsx", () => {
  const {} = setup();
  const searchBarElement = screen.getByTestId("search-bar");

  expect(searchBarElement).toBeInTheDocument();
  expect(searchBarElement).toHaveAttribute("placeholder", "Find a quote now");
});

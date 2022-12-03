import React from "react";
import '@testing-library/jest-dom'

import { render, screen, cleanup } from "@testing-library/react";

import Frontpage from "../Home/container/Frontpage";

describe("check heading", () => {
  afterEach(cleanup);

  test("show heading", () => {
    render(<Frontpage />);

    const name1 = screen.getByText(
      /the protecting wildlife program is one of singapore largest wildlife protection organisation, delivering and influencing effective conservation platform for more than 10 million people in singapore\./i
    );

    expect(name1).toBeInTheDocument();

  });
});

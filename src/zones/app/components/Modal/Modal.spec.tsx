import React from "react";
import {render} from "@testing-library/react";
import Modal, {Props} from "./Modal";

function renderModal(props: Props) {
  return render(<Modal {...props}/>);
}

describe("<Modal />", () => {
  test("should display a modal overlay and a modal content wrapper", async () => {
    // ???
  });
});

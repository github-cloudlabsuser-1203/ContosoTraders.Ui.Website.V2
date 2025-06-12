import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WelcomePopup from "./WelcomePopup";

describe("WelcomePopup", () => {
  test("renders welcome message and close button", () => {
    render(<WelcomePopup />);
    expect(screen.getByText(/WELCOME/i)).toBeInTheDocument();
    expect(screen.getByText(/TO/i)).toBeInTheDocument();
    expect(screen.getByText(/The DevSecOps Day 2 Hackathon!/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Get Started/i })).toBeInTheDocument();
  });

  test("closes modal when 'Get Started' button is clicked", () => {
    render(<WelcomePopup />);
    const closeButton = screen.getByRole("button", { name: /Get Started/i });
    fireEvent.click(closeButton);
    expect(screen.queryByText(/WELCOME/i)).not.toBeInTheDocument();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "./login";

describe("Login page", ()=>{
    it("should render the login page", () => {
       render(<Login/>);
       // getBy -> throws an error
       //  queryBy -> returns null
       // findBy -> Async
       expect(screen.getByText(/Sign in/)).toBeInTheDocument();
       expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
       expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
       expect(screen.getByRole('button', {name:'Log in'})).toBeInTheDocument();
       expect(screen.getByRole('checkbox', {name:'Remember me'})).toBeInTheDocument();

      
    })
})
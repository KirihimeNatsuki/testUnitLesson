// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
  rest.get(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      return res(
        ctx.json({
          results:[
            {
              gender: "female",
              name:{
                title: "Miss",
                first: "Lenice",
                last: "da Rosa"
              },
              location:{
                street:{
                    number:5294,
                    name:"Rua dos Camargos"
                },
                city:"São Paulo",
                state:"São Paulo",
                country:"Brazil",
                postcode:85852,
              },
              email:"lenice.darosa@example.com",
              login:{
                username:"goldenleopard874",
                password:"lucas",
                salt:"ZqQXQZqQ",
                md5:"c8f9f8f8f8f8f8f8f8f8f8f8f8f8f8f8",
                sha256:"c8f9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8",
              },
              picture:{
                large:"https://randomuser.me/api/portraits/women/49.jpg",
                medium:"https://randomuser.me/api/portraits/med/women/49.jpg",
                thumbnail:"https://randomuser.me/api/portraits/thumb/women/49.jpg",
              }
            }
          ]
          
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

//load random user
test("load random user mock", async () => {
    const { container } = render(<App />);
    await waitFor(() => screen.getByText(/Utilisateur/i));
    expect(container.getElementsByTagName("img")[0].src).toBe("https://randomuser.me/api/portraits/thumb/women/49.jpg")
    expect(container.getElementsByTagName("p")[1]).toHaveTextContent("Miss Lenice da Rosa");
});

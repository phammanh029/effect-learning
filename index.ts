import { Effect } from "effect";

// function that divide 2 number

const divide = (a: number, b: number): Effect.Effect<number, Error, never> => {
  if (b === 0) {
    return Effect.fail(new Error("Cannot divide by zero"));
  }
  return Effect.succeed(a / b);
};

// console.log(divide(10, 2))
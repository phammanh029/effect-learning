import { Effect } from "effect"

const divide = (a: number, b: number) =>
  b === 0
    ? Effect.die(new Error("Cannot divide by zero"))
    : Effect.succeed(a / b)

//      ┌─── Effect<number, never, never>
//      ▼
const program = divide(1, 0)

Effect.runPromise(program).catch(console.error)
/*
Output:
(FiberFailure) Error: Cannot divide by zero
  ...stack trace...
*/
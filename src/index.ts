import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.on("click", (arr: number[]): void => {
  const sumOfNumbers = arr.reduce((a, b) => a + b, 0);
  console.log("Sum of the Values is:", sumOfNumbers);
});

setTimeout(() => {
  emitter.emit("click", [1, 2, 3, 4, 5]);
}, 2000);

emitter.emit("click", [1, 2, 3, 4]);

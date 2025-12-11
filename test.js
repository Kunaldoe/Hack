// This file is for testing the PR bot

function testBot() {
  // Rule violation: no-console
  console.log("Hello, world!");

  // Rule violation: no-todo
  // TODO: Refactor this function
  const x = 1;
  return x;
}

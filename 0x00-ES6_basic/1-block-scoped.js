export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let innerTask = true; // Declare a new variable with 'let'
    let innerTask2 = false; // Declare a new variable with 'let'
    return [innerTask, innerTask2]; // Return the inner variables
  }

  return [task, task2];
}

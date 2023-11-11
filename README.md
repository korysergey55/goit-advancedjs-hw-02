Task 1. Color switcher

- Write a script that, after pressing the "Start" button, changes the background
  color of <body> to a random value once per second, using an inline style.
- By pressing the "Stop" button, the background color should stop.

Task 2. Countdown timer

- Write a timer script that counts down to a certain date. Such a timer can be
  used in blogs and online stores, event registration pages, during maintenance,
  etc.
- If the user has chosen a date in the past, show alert() with the text "Please
  choose a date in the future".To display messages to the user, use the iziToast
  library.
- the number of days can be more than two digits.
- The timer should stop when it reaches the end date, ie 00:00:00:00.
- If the timer is running, in order to select a new date and restart it, you
  need to reload the page.

Task 3. Generator of promises

- Write a script that, at the time of submitting the form, calls the
  createPromise(position, delay) function as many times as entered in the amount
  field.
- During each call, pass it the number of the position being created and the
  delay, taking into account the first delay entered by the user and the step.
- To display messages to the user, instead of console.log(), use the iziToast
  library.

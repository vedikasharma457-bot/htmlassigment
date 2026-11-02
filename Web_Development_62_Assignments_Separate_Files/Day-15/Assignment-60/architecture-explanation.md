# Working Challenge and Architecture
Project: Student Task Planner.
The application uses a single task array as its state. Form events validate and update the array. The `persist()` function serializes the array into localStorage. The `render()` function rebuilds the list from the current state using DOM methods and `textContent`. Filter buttons select which tasks are visible. This separation keeps data, storage and display responsibilities clear.

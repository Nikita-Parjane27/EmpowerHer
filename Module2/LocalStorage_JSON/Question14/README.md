# Enhanced Todo List (With Search + localStorage)

## Features
- Add new tasks
- Mark tasks as completed (click on a task)
- Delete tasks
- Real-time search filter
- All tasks stored in **localStorage** as a JSON array
- Each task has:
  - A unique ID
  - Task text
  - Completion status

## localStorage Structure
The tasks are saved as:

```json
[
  {
    "id": 123456789,
    "text": "Sample Task",
    "completed": false
  }
]

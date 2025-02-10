
# Command Line Todo App

A simple and interactive command-line todo list application built with Node.js. This application allows users to manage their tasks through an easy-to-use terminal interface.

## Features

- Add new tasks to your todo list
- View all existing tasks
- Simple numbered menu interface
- Clean and intuitive user experience

## Requirements

- Node.js installed on your system
- Terminal/Command Prompt access

## Installation

1. Clone this repository to your local machine:
```bash
git clone https://github.com/yourusername/todo-cli-app.git
```

2. Navigate to the project directory:
```bash
cd todo-cli-app
```

3. Install dependencies:
```bash
npm install
```

## Usage

1. Start the application:
```bash
node index.js
```

2. You will be presented with the following menu options:
   - 1: Add a Task
   - 2: View Tasks
   - 3: Exit

3. Choose an option by entering the corresponding number:
   - To add a task, press `1` and enter your task description
   - To view all tasks, press `2`
   - To exit the application, press `3`

## How It Works

The application uses Node.js's built-in `readline` module to create an interactive command-line interface. Tasks are stored in memory during the session and managed through simple array operations.

Key components:
- `readline` interface for handling user input
- Array-based storage for tasks
- Menu-driven interface with input validation

## Code Structure

```javascript
const readline = require('readline');
// ... rest of your application code
```

The application is structured around three main functions:
- `showMenu()`: Displays the main menu options
- `handleInput()`: Processes user input and executes corresponding actions
- Task storage using a simple array implementation

## Contributing

Feel free to fork this repository and submit pull requests to contribute to this project. You can also open issues for any bugs found or feature suggestions.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Shivam Mankar

## Acknowledgments

- Node.js documentation
- readline module documentation





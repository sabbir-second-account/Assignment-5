# Assignment-5

## Project Overview

- **Project Name:** Assignment-5
- **Description:** Assignment-5 is a responsive React-based web application that allows users to explore and select different technologies and manage their selected technologies in a dedicated sidebar.

## Technologies Used

- React.js
- Tailwind CSS, DaisyUI
- TypeScript / JavaScript (ES6+)
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)

## Key Features

1. You can select different technologies according to your liking.
2. Selected technologies appear in a separate sidebar with their icons. You can add more, remove them one by one, or click **"Remove All"** to clear all selected technologies.
3. The project is responsive and works on desktop, mobile, and tablet devices.

## Questions and Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX is a React syntax that allows users to write JavaScript and HTML-like markup in the same file.

### 2. What is the difference between props and state?
**Answer:** Props are information, arrays, functions, or anything passed from a parent component to a child component. State is the memory that a component keeps internally.

### 3. What does the useState hook do, and where did you use it in this project?
**Answer:** useState takes a variable with an initial value and a function to update that value. It is used in components that need to manage and update their data.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
**Answer:** useEffect runs code after a component renders. It was needed to load JSON data because fetching data takes some time.

### 5. Why does every item in a .map() list need a unique key prop?
**Answer:** A unique key helps React identify exactly which item is being rendered and makes updates more efficient and accurate.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means rendering a part of a component only when a specific condition is met.

Example:


{isLoggedIn ? <p>Welcome!</p> : <p>Please log in.</p>}


### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:** A parent can pass data, arrays, or functions to a child via props, such as `<Child name={userName} />`. The child can send data back by accepting a callback function as a prop and calling it with the data.


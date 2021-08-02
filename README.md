# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot
![Screenshot (2)](https://user-images.githubusercontent.com/44214523/127934472-140ed381-c7ca-4f8d-b23a-76ae2766e165.png)


### Links

- Solution URL: [view codes](https://github.com/Johnpaul-Attamah/todo-app-frontendmentors)
- Live Site URL: [Go live](https://zen-clarke-982f84.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

# CSS
- Theming and dark mode switch with styled components
- Styling SVGs (scaling using viewBox)
- responsive design practices
- using styled-component themeContext and useContext hook
- passing styles through props
- rendering different backgrounds for different viewport
- etc.


```css
.proud-of-this-css {
    ...

   &.dragging {
            opacity: 0.5;
        }

        &.target {
            border-style: double;
        }

        &:hover div:first-child {
            border: none;

    ...

```
## Javascript
- setting up theme objects for styled components
- implementing night mode switch with hooks
- lifting up state
- drag and drop without library
- using ref with useRef hooks
- enumerating a function inside useEffect hook using useCallBack hook
- persisting data in local storage
- filtering data
- separation of concerns
- etc.

```js
...
export const lightTheme = {
    bgImageMb: `url(${mobileBgLight})`,
    bgImageDsk: `url(${desktopBgLight})`,
    bgColor: 'hsl(0, 0%, 98%)',
    icon: <NightModeIcon />,
    todoBg: 'hsl(0, 0%, 98%)',
    ...

    ...
    
        if(oldTodo) setTodo(JSON.parse(oldTodo));
    },[]);

    useEffect(() => {
        handleTodoFilter();
        localStorage.setItem('todo', JSON.stringify(todo));
    },[handleTodoFilter, todo])


    const handleSubmit = (e) => {
        e.preventDefault();
        ...
```

### Useful resources

- [CSS in Js with styled components](https://styled-components.com/docs/advanced) - Styled components makes it easy to work with css in React. Everything flows like normal javascript

- [React js with hooks and ref](https://reactjs.org/) - React makes the job simpler, you can easily put up great work in few lines.

- [Drag and Drop with Vanilla js](https://www.digitalocean.com/community/tutorials/js-drag-and-drop-vanilla-js) - Drag and drop features makes interaction easy. you can achieve a lot in few lines

- [css Tricks](https://css-tricks.com/gradient-borders-in-css/) - Gradient Borders


## Author

- Website - [Johnpaul Attamah](https://github.com/Johnpaul-Attamah)
- Frontend Mentor - [Johnpaul-Attamah](https://www.frontendmentor.io/profile/Johnpaul-Attamah)
- LinkedIn - [Johnpaul](https://www.linkedin.com/in/johnpaul-attamah-4b265983/)


## Acknowledgments

A big thank you to [Gautham Vijayan](https://dev.to/gautham495) - [How to persist data in localstorage](https://dev.to/gautham495/how-to-persist-data-to-localstorage-in-react-with-hooks-6ma) using useEffect hook

[Drag an drop with vanilla js](https://www.digitalocean.com/community/tutorials/js-drag-and-drop-vanilla-js)

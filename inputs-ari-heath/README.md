📚 User Stories

- As a user, I can see a landing page with heading and a text input.
- As a user, I see titles of three robots waiting for my text.
- As a user, I see my "Good Robot" repeating exactly what I type in real time.
- As a user, I see my "Bad Robot" saying "BLABLA....." One character for every character I type in real time.
- As a user, I see a third robot that modifies the input as per the developer's choice in real time.

-- App.js should display an <h1> and an <input>
-- Make 3 components for our three robots:

- Good Robot - Repeats user input exactly in real time.
- Bad Robot - Replace user input with "BLA" in real time.
- Third Robot - Replace user input with "im kind of watching" in real time

GOOD ROBOT

- Set state for [userInput, setUserInput] = useState("")
- Create function: handleChange
  - parameter: 1, event (e)
  - input: user string
  - output: user string
  - Function will take in event data, and
    return setUserInput(e.target.value)
- Create an input field, type="text" value={userInput} onChange={handleChange}

BAD ROBOT:

- Access to userInput, which will be a string.
- String does not have a predetermined length, cant just change index
- Try .replaceAll() and .toUpperCase

🏔 Stretch Goals

- As a user, I see a fourth robot that modifies the input as per the developer's choice in real time.
- As a user, I can see pleasant stylings on the application.

👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application deployed as a live website.

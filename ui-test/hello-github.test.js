// Start by going to a web page first, like this:
I.goTo("https://github.com/login")

// Perhaps perform login?
I.fill("Username", "johndoe")
I.fill("Password", "supersecretpassword")
I.click("Sign in")

// Most importantly, every test needs to have an assertion
// Use I.see to look for an expected text or element on the screen
I.see("Incorrect username or password.") 

// Check out our docs to learn more: https://docs.uilicious.com
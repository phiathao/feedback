# Redux Feedback Loop

## DEPENDENCY

Express
Postgres
Material-UI
Axio
React
React-Redux
Redux


### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

### ADD NEW FEEDBACK

> NOTE: As a baseline requirement, you must use Redux to store your data across views.

Create a multi-part form that allows users to leave feedback for today. 
There will be 4 views for the form parts.
The parts:
- How are you feeling today?
![feeling](wireframes/page-one.png)
- How well are you understanding the content?
![understanding](wireframes/page-two.png)
- How well are you being supported?
![support](wireframes/page-three.png)
- Any comments you want to leave?
![comments](wireframes/page-four.png)

While there is no nav bar, each part of the form should be at its own route. Clicking next should move the user to the appropriate step in the process.


## THE REVIEW COMPONENT

In addition to the multi-step form, the app needs to display the results of each step clearly and at all times. The simplest could be another component on the DOM which shows the results of the current survey and a Submit button.

### Incomplete, Submit button is disabled:

![comments](wireframes/review-component-inactive.png)

### Survey complete, Submit button is active:

![comments](wireframes/review-component-active.png)

## SUBMIT THE FEEDBACK

The `Review` portion needs a submit button which will be clicked on to actually submit the completed feedback to the server. This submit button should only be active when all of the survey steps are complete.

When the submit button is clicked, save the submission in the database. The user should see a submission success page.

![understanding](wireframes/page-five.png)



## STRETCH GOALS

> NOTE: These stretch goals are intended to be completed in order.

### ADMIN SECTION

Display all of the existing feedback at the route `/admin`. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.

![display feedback](wireframes/admin.png)

### OTHER FEATURES

- Update this README.md to describe the project in your own words
- Improve the styling of the app using Material-UI theme, cards, snackbars, buttons, nav bar, and icons, and anything else you'd like.
- Add the ability to flag an existing feedback entry for further review on the /admin view
- Deploy your project to Heroku -- you'll need to read the special instructions for building and deploying with these apps! 

# Redux Feedback Loop

### DEPENDENCY

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

### ADD NEW FEEDBACK FEATURES

- [x] Multi-part form that allows users to leave feedback for today. 
- [x] Review Component.
- [x] Display result of each feedback at all time.
- [x] Submit result.
- [x] Incomplete result does not allow submit.
- [x] Submit button is active when survey is complete.
- [x] Allow user to go back and change the response.
- [x] Save submission in the data base.
- [x] See a submission success page


## Next Steps

### ADMIN SECTION / OTHER FEATURES

- [x] Create an admin section / view.
- [x] Display all of the existing feedback at the route /admin ```set up as /123admin on this project```.
- [ ] Most recently added feedback should display at the top of the list
- [x] Allow admin to delete existing feedback from database
- [ ] Add prompt to deleting feedback
- [ ] Add an authorization or login for the admin/user
- [ ] Deploy on Heroku
- [ ] Flag an existing feedback entry for further review on the admin cview
- [ ] Improve styling


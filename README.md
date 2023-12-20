REST-Rant is an app where users can review restaurants.

Method | Path | Purpose
--- | --- | ---
GET | / | Home Page
GET | /places | Places Index Page
POST | /places | Create New Place
GET | /places/:id | Form Page For Creating a New Place
GET | /places/:id | Details About a Particular Place
PUT | /places/:id | Update a Particular Place
GET | /places/:id/edit | Form Page For Editing an Existing Place
DELETE | /places:id | Delete a Particular Place
POST | /places/:id/rant | Create a rant(comment) About a Particular Place
DELETE | /places/:id/rant/:rantId | Delete a rant(comment About a Particular Place
GET | * | 404 page (matches any route not defined above)

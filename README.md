kevbudmik


# Installing:
1.	Download the repository
```
git clone git@github.com:codecrusher06/kevbudmik.git
```
2.	Open the Terminal and change directory to the project folder.
3.	Type ‘npm install’ in the Terminal and press Enter. All the dependencies would be installed.
4.	Go back to the Terminal and be sure that you are pointing inside the project folder. To open the application, type ‘node app.js’ and press Enter.
5.	The application should be live on the local port 3000.  
6.	Type http://localhost:3000/ into a browser.
7.	To login use the username:  and the password:
8.	Now you should be inside the application


Folder | Content | Responsibility
------|-----|--------
/public	| |	Contains the public files, such as CSS, fonts and scripts.
/routes	| |	Manage the HTTP requests. Is divided into smaller modules responsible for disjoint tasks.
.	|/app.js| 	Renders dashboard page
.	|/disease.js| 	Responsible for diseases
.	|/login.js|	Responsible for logging in
.	|/patients.js|	Responsible for patients
.	|/rooms.js|	Responsible for rooms
.	|/settings.js|	Renders settings page
.	|/users.js|	Add new users and logout
/server	| |	Defines the database and Schemas
.	|/db/mongoose.js| 	Database settings
.	|/models| 	Defines Schemas
/views		| |Render pages
.	|/layouts|	The core layout; each page is rendered inside the layout
.	|/(other files)|	Contains specific visual changes for every page

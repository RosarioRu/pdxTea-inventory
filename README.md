# _Pdx Tea Tracker_

#### By _**Rosario Ruvalcaba**_

#### _A React web app to track the tea inventory of a fictional small business, 'Forest Park Tea'._

## Technologies Used
* _JavaScript_
* _React_
* _Node.js_
* _HTML_
* _JSX_
* _CSS_
* _Bootstrap_
* _Webpack_

## Description

_Application for a local tea shop to keep track of loose leaf tea inventory with Create, Read and Update functionality. User can view a list of all tea varieties in stock as well as add a new tea. Specific teas can be clicked in order to view details for that tea._

_User can update the inventory information for a particular tea. Three purchase options for 1oz, 3oz, and 10oz of tea can be selected in the tea details component. These trigger state change for both oz of that tea remaining and oz sold._

_Site is rerendered using React, of course, so when updates occur, the user sees the changes in on their browser. State resides in 'TeaInventoryControl.js' file._

## App Component Diagram

![Alt text](./PlanningApp2.png?raw=true "Optional Title")



## Setup/Installation Requirements

* _Clone repository from Github and save a copy on own computer_

* _Navitage to root directory of project on your computer_

* _In the terminal, enter: $ npm install. This will install the dependencies required for this project. It will also create the nodes_modules directory which will contain the actual packages and dependencies, as well as a list of these downloads in the package-lock.json file._

* _Next enter the command $ npm run build to bundle all the code and create a build directory_

* _You may also enter the command $ npm run start, which will open a webpack dev server and create and build the build directory at the same time. To exit this command in the terminal press Ctrl+C._

* _The live-server shoud now be ready to view and interact with in order to dynamically render the site as new user input is entered._

## Known Bugs

* _Application has not been refactored, in particulal, the methods in TeaInventoryControl.js that decrement the ounces of tea when a purchase occurs could be consolidated into one._

* _When a tea crate is updated, the old version of the tea is filtered out of the mainTeaList and the updated version is concatenated to the updatedMainTeaList. This results in the updated tea being at the bottom of the list of teas. Can be fixed with splicing the array somehow._

* _Alerting the user with a pop-up that the there is not enough tea for a purchase is not ideal. Adding another component which displays this message will be better._

## License

MIT License

Copyright (c) _Octobe_2022_ _Rosario Ruvalcaba Harwood_
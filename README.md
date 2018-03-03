##SCHDLR

Schdlr is a web app to help Darmtouth students pick their classses. It serves the same process as banner student, but also allows you to look up classes by distributive and world culture requirements. It is developed with react-redux and an express server hosted on herokuapp. It was created over one weekened 

##API

####/getForms
This route is triggered when a user submits the timeslot, distributive, and world culture requirement for a class. A post request is made to this route with a json blob containing the timeslot, distributive, and world culture requirement. The API then parses this json blob to return a set of classes that match the parameters. 
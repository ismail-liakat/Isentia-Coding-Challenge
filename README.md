# Isentia-Coding-Challenge

      
## Code Organization:
There are two base folders 
       

 
### /Server - Holds the complete server code.
Run `npm install` inside Server folder to install the back end server
Run `node app.js` to start the server
Server runs at `localhost:8080`
APIs:
- Get the unfiltered public feed -  http://localhost:8080/getPictures 
- Get the posts filtered based on a tag  -  http://localhost:8080/getPictures/[Tag]
- Get the posts filtered based on a multiple tags  -  http://localhost:8080/getPictures/[Tag1+Tag2+Tag3]


### /Client - Holds the complete client code.
- Run `npm install` inside the "/client/flickr-viewer" folder to install the client app
- Run `ng serve` to run the application
- Application runs at ` http://localhost:4200/`

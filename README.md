# Basic Node API

This project contains all code related to the API for the base framework.

### 1)  Dependencies 
<br/>

You must have available in your environment node with the minimum version `v12`.
<br/><br/>
As soon as you clone the project from the repository you must run `npm i` in order to download the dependencies of tools used in the app.
<br/><br/>

### 2) Configuring the application
<br/>

If you just cloned the project you're going to note a file in the root of the project called `sample.env`. 

- Create a **copy** of this file and rename the copied file to `.env`; <br/><br/>
- After doing this you can fill the environmental attributes for the base API. 

The options in the environment file are:
<br/>

|   KEY 	    |  DESCRIPTION  	                                      |  EXAMPLE 	                                          |
|---	        |---	                                                  |---	                                                |
|  PORT 	    | Port in which the application will be running         |  9054 	                                            |
|  HOST 	    | Hostname in which the application will be running  	  |  https://base.com	                                  |
|  LOG_PATH 	|  Path to the location where the logs must be stored 	|  /home/user/base/logs 	                              |
|  LOG_LEVEL 	|  Minimal log level to be persisted 	                  |  TRACE or DEBUG or INFO or WARN or ERROR or FATAL 	|

<br/>

### 3) Running the app
<br/>

If you want to run it locally you must execute `npm start` or `npm run watch`.

<br/>

In order to build the application to deploy you just need to run `npm run build`.

### 4) Executing test suite
<br/>

To run the test suite you just need to execute `npm run test`. If you're working in the tests you might want to stay watching changes in the spec files. In this case, you'll use `npm run test:watch`. 

<br/>

To check the test coverage execute `npm run test:coverage`.

#   b a s i c - n o d e - a p i  
 
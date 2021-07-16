# Node API Boilerplate

This project contains all code related to the API for the base framework.

### 1)  Dependencies  

You must have available in your environment node with the minimum version `v12`.

As soon as you clone the project from the repository you must run `npm i` in order to download the dependencies of tools used in the app.
 
### 2) Configuring the application
 
If you just cloned the project you're going to note a file in the root of the project called `sample.env`. 

- Create a **copy** of this file and rename the copied file to `.env`; 
- After doing this you can fill the environmental attributes for the base API. 

The options in the environment file are:
 

|   KEY 	    |  DESCRIPTION  	                                      |  EXAMPLE 	                                          |
|---	        |---	                                                  |---	                                                |
|  PORT 	    | Port in which the application will be running         |  9054 	                                            |
|  HOST 	    | Hostname in which the application will be running  	  |  https://base.com	                                  |
|  LOG_PATH 	|  Path to the location where the logs must be stored 	|  /home/user/base/logs 	                              |
|  LOG_LEVEL 	|  Minimal log level to be persisted 	                  |  TRACE or DEBUG or INFO or WARN or ERROR or FATAL 	|

 

### 3) Running the app
 
If you want to run it locally you must execute `npm start` or `npm run watch`.

In order to build the application to deploy you just need to run `npm run build`.

### 4) Executing test suite

To run the test suite you just need to execute `npm run test`. If you're working in the tests you might want to stay watching changes in the spec files. In this case, you'll use `npm run test:watch`. 

To check the test coverage execute `npm run test:coverage`.

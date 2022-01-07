# Welcome to the test-case for Cognizant!

This app contains three main parts;
- Backend .NET Core API Project is located in *CognizantGallery.Web.Api* folder.
- Frontend React Project is located in *cognizantgallery-web-client* folder.
- Database MongoDB is located on atlas cloud service of mongoDB. (connection string is located in *CognizantGallery.Web.Api\appsettings.json*)

# Requirements
  - dotnet runtime for API project
  - npm for React project
  - an internet connection for db

- clone the project

# To run the Backend .NET Core API Project,
  
  ## If you have visual studio  
  - find and open the solution(.sln file) in *CognizantGallery.Web.Api* folder folder
  - hit f5 to run the project

  ## If you want to use terminal
  - open a terminal
  - cd *CognizantGallery.Web.Api*
  - dotnet publish
  - dotnet .\CognizantGallery.Web.Api\bin\Debug\net5.0\publish\CognizantGallery.Web.Api.dll

# To run the Frontend React Project,
 - open a terminal
 - cd *cognizantgallery-web-client*
 - npm start

# If you want to self-host the DB,
 - dummy data that i used is located in *sampleData* folder.
 - just import the .json file to a mongoDB
 - update the connection string located in *CognizantGallery.Web.Api\appsettings.json* 

# Injury Tracker
link- https://lief-sub.vercel.app/

Task Completed- <br/>
Auth0 Autentication , BodyMapping , Injury Description saved with mapping , Table of Reports , Reports Viewable

<br/>
You need to login with auth0 as all pages are path protected.
The next app uses pages router for routing between two main pages - create report and view report . 
Create report lets you annotate on the body map and give description of each annotated injury.
then you can submit with a report title . the body mapped annoation along with detail of injury is stored as a custom 
data type provided by a react hook. 
View report lets you view table of report on top of the page and show you the report at bottom when you click on it.

regarding backend- I am unable to fetch data with graphql as it is not accepting un-parsed json . and I am unable to model
the full schema of annotation object as few data types are not supported by graphql like (scalar array of decimal).
So currently the app only use useContext data .

for local deployment -

clone app then go to auth0 and make your project , make a .env file and add the required fields available in your project on auth0 .
reffer - https://auth0.com/docs/quickstart/webapp/nextjs/01-login

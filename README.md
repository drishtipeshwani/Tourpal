<p align="center">
  <img src="https://github.com/drishtipeshwani/Tourpal/blob/master/logo.png" alt="Appwrite logo"/>
</p>


## Tourpal
Tourpal is a journalling app in which you can store all your travelling experiences at one place. The project is build with ReactJS and appwrite.

## App Demo




https://user-images.githubusercontent.com/65016769/139042646-6928f236-e887-4803-a6a6-709166c721fa.mp4





## Run Locally
<ul>
  <li>Install Appwrite by following the https://appwrite.io/docs/installation</li>
  <li>Open the appwrite console and create a new project.</li>
  <li>Navigate to <strong>Users</strong> and in settings and enable Google Authentication. </li>
  <li>Navigate to <strong>Database</strong> and add a new Collection to your project.</li>
  <li>Add the following rules and permissions to your collection.</li>
  </ul>
  
 #### Collection rules
 <table>
  <tr>
  <th>Label</th>
   <th>Key</th>
   <th>Rule Type</th>
  </tr>
   <tr>
  <th>date</th>
   <th>date</th>
   <th>Text</th>
       <th>Required</th>
  </tr>
   <tr>
  <th>location</th>
   <th>location</th>
   <th>Text</th>
       <th>Required</th>
  </tr>
   <tr>
  <th>experience</th>
   <th>experience</th>
   <th>Text</th>
       <th>Required</th>
  </tr>
  </table>
 
 
 #### Permissions
 1. Read access - <code>role:member</code>
 2. Write access - <code>role:member</code>


<ul>
  <li>After setting up the project in the appwrite console, clone this github repo using -</li>
  <li><code>git clone git@github.com:drishtipeshwani/Tourpal.git
      </code></li>
    <li><code>cd Tourpal
      </code></li>
   <li>Install all the dependencies using <code>npm install
      </code></li>
  <li>Now add your <strong>ProjectId, Project endpoint and Collection Id </strong> to the appwrite.js file.</li>
  <li>Run <code>npm start</code> to start the app on local server. </li>
  </ul>
 

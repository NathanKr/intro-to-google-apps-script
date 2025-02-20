<h1>Project Name</h1>
Introduction to google apps script



<h2>Project Description</h2>
Simple google apps script project with function that print 'hello world' to the console on demand and with timer

<h2>Motivation</h2> I needed a reliable way to keep my inbox fresh by moving emails older than 24 hours to a separate folder. Initially, I used a Digital Ocean droplet, Gmail API, and authentication to handle this task, and it worked for a few years. However, I recently faced issues when updating to a newer node version. Google Apps Script seems like a suitable alternative to accomplish this task seamlessly, but first, I need to explore this technology.


<h2>Installation</h2>
No installation is required but you do need Gmail account


<h2>Usage</h2>
<p>The usage here includes the following steps:</p>
<ul>
    <li>Create Project</li>
    <li>Create Function</li>
    <li>Run Selected Function</li>
    <li>Add Trigger</li>
    <li>Run Selected Function with Trigger</li>
</ul>
<p>For detailed steps, please refer to the <strong>Demo</strong> section below.</p>


<h2>Code Structure</h2>
The invoked function 

```js
function helloWorld() {
  Logger.log("Hello, World!");
}
```

<h2>Demo</h2>

<h3>Dashboard screen</h3>

click <a href='https://script.google.com'>https://script.google.com</a> for the google apps script dashboard and you will see it in the following image. Notice 'My Projects' and 'My Triggers' circled in red

<img src='./figs/dashboard.png'>

<h3>Create new project</h3>
Create new project by clicking on the button 'New project' as shown in the image
<img src='./figs/create-new-project.png'/>

You should also save the project

<h3>Created project</h3>
The function HelloWorld  (circled in red) was add to the new project. Click on the Run button (circled in red) to invoke it and see the result in the 'Execution log' below

<img src='./figs/created-hello-world-project.png'>

<h3>Add trigger</h3>

From the 'hello world' project navigate to Triggers , pick your parameters and click 'Add trigger'

<img  src='./figs/add-trigger-for-hello-world-project.png'/>

You can later edit the trigger parameters as shown here in red circle

<img src='./figs/edit-trigger.png' />

<h3>Executions</h3>
You can nicely see all the project's functions execution from the project dashboard by clicking on Executions as shown in the following image


<img  src='./figs//ecexutions.png'/>

Following time driven trigger you will see

<img src='./figs/time-driven-execution.png'/>

<h2>Points of Interest</h2>
<ul>
    <li><a href='https://www.npmjs.com/package/@google/clasp'>Clasp</a></li>
    <li>only google account is required here but if this google account belong to a google workspace you get more benefits e.g. more quota</li>
</ul>

<h2>References</h2>
<ul>
    <li><a href='https://developers.google.com/apps-script'>Official docs</a></li>
</ul>


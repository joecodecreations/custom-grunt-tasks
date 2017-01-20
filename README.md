# Custom Grunt Tasks
## Allows you to add in multiple grunt tasks 

Insert this into your `Gruntfile.js` to use: 

Checks to see if the tasks exists, then runs them in the order you give htem. 

Use: Run `grunt custom:task1,task2,task3` in your console. Where task1 task2 and task3 represent where you will add in your own task names. 

*** Use:
Copy the contents of custom_tasks.js into your `Gruntfile.js` or include it by requiring it `require('./custom_tasks.js')`

*** Requirements:
* At least one grunt task to be used. 
* Referenced tasks have to be already created.

*** Success Outputs
If the task you entered is found it will show `[Success] Registering task: Task1` in the console as it's loading it. 


*** Error Outputs
If the name is not found an output in the console will show `[Error] could not find grunt task: task77` where task77 will show be replaced wth the actual task you tried using. 

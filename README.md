# Custom Grunt Tasks
## Run multiple grunt tasks in the order you specify. 
This will allow you to call custom grunt tasks in the order you specify and from the command line using comma separated lists. Add as many custom tasks as you'd like!

### Use: 
1. Copy the contents of `custom_tasks.js` into your `Gruntfile.js` or include it by requiring it `require('./custom_tasks.js')`

2. Run `grunt custom:task1,task2,task3` in your console. Where task1 task2 and task3 represent where you will add in your own task names. 
### Requirements:
* At least one grunt task to be used
* Referenced tasks have to be already created

### Success Outputs 
If the task you entered is found it will show `[Success] Registering task: Task1` in the console as it's loading it. 


### Error Outputs
If the name is not found an output in the console will show `[Error] could not find grunt task: task77` where task77 will show be replaced wth the actual task you tried using. 

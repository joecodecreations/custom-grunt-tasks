 grunt.registerTask('custom', 'Roll your own task order', function(additionalTasks) {
    var tasks = [],
      n = 0,
      e = 0;
    if (additionalTasks !== undefined) {
      var taskList = additionalTasks.split(',');
      taskList.forEach(function(taskName) {
        e = (n < 1) ? '\n\n\n' : '';
        n++;
        if (grunt.task.exists(taskName)) {
          tasks.push(taskName);
          grunt.log.writeln(e + '[SUCCESS] Registering task:' + taskName);
        } else {
          grunt.log.writeln(e + '[ERROR] Could not find grunt task:' + taskName);
        }
      });
    }
    if (tasks.length) {
      grunt.log.writeln('\n\n Starting tasks...');
      grunt.task.run(tasks);
    } else {
      grunt.log.writeln('you have not added any tasks.....terminating');
    }

  });

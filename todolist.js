  var vm = new Vue({
    el: '#todoList',
    data: {
      tasks: ['リオレイアの狩猟','特産キノコ１０個の納品'],
      newTask: ''
    },
    methods: {
      addTask: function(newTask){
        if(newTask) {
          this.tasks.push(newTask);
          this.newTask = "";
          return;
        }
      },
      removeTask: function(theTask){
        this.tasks.splice(this.tasks.indexOf(theTask),1);
      }
    }
  })

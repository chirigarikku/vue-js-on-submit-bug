import Vue from 'vue';

let id = 1; // To generate unique id

const getTaskSchema = (task) => {
  let schema = {
    id: 0,
    label: '',
    isEditing: false    
  };

  return task == null
    ? schema
    : Object.assign({}, schema, task);
}

const vm = new Vue({
  el: '#app',
  data: {
    tasks: [],
    archivedIds: [],

    isCreating: false,
    isCreatingForm: getTaskSchema(),
    isEditingForm: getTaskSchema()
  },
  methods: {
    createTask() {
      this.isCreating = true;
    },

    cancelCreateTask() {
      this.isCreating = false;
      this.isCreatingForm = getTaskSchema();
    },

    storeTask(task) {
      this.isCreating = false;
      this.$set('isCreatingForm', getTaskSchema());
      this.tasks = [
        ...this.tasks,
        {
          id: id++,
          label: task.label,
          isEditing: false
        }
      ];
    },

    editTask(id) {
      this.tasks = this.tasks.map(task => {
        if ( task.id === id ) {
          this.isEditingForm = {
            ...task,
            isEditing: true
          };

          task = {
            ...task,
            isEditing: true
          };

          // Really need to optimize or use immutability
        }

        return task;
      });
    },

    cancelEditTask(id) {
      this.isEditingForm = getTaskSchema();
      this.tasks = this.tasks.map(task => (
        task.id === id
          ? {
            ...task,
            isEditing: false
          }
          : task
      ));
    },

    updateTask(id, data) {
      this.tasks = this.tasks.map(task => (
        task.id === id
          ? {
            ...data,
            isEditing: false
          }
          : task
      ));
    },

    archiveTask(id) {
      this.archivedIds = [
        ...this.archivedIds,
        id
      ];
    },

    restoreTask(_id) {
      this.archivedIds = this.archivedIds.filter(id => id !== _id);
    },

    removeTask(_id) {
      this.tasks = this.tasks.filter(id => task.id !== _id);
      this.archivedIds = this.archivedIds.filter(id => id !== _id);
    }
  },
  computed: {
    visibleTasks() {
      return this.tasks.filter(task => (
        this.archivedIds.indexOf(task.id) === -1
      ));
    },

    archivedTasks() {
      return this.archivedIds.map(id => (
        this.archivedIds.indexOf(task.id) !== -1
      ));
    }
  }
})

vm.$watch('isCreatingForm', () => {
  console.log(vm.isCreatingForm);
});
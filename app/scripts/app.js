function TaskListCtrl ($scope) {
    $scope.tasks = [
        {
            description: 'Finish Angular.js challenge.',
            done: false
        },
        {
            description: 'Visit cardiologist.',
            done: false
        },
        {
            description: 'Change the world.',
            done: false
        },
        {
            description: 'Lorem',
            done: true
        },
        {
            description: 'Ipsum',
            done: true
        }
    ];

    $scope.newTask = '';

    $scope.addTask = function (t) {
        var newTask = {
            description: $scope.newTask,
            done: false
        };

        $scope.tasks.push(newTask);
    }
}

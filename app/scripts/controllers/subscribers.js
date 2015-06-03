'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')

  .controller('SubscribersCtrl', function ($scope, $http, $modal) {
    $scope.subscribers = [];

    $http.get('subscribers.json')

      .success(function (data) {
        $scope.subscribers = data;
      });

    $scope.gridOptions = {
      data: 'subscribers',
      showGroupPanel: true,
      enableCellSelection: true,
      enableRowSelection: false,
      enableCellEdit: true,
      columnDefs: [
        {
          field: 'no',
          displayName: 'Id'
        },
        {
          field: 'name',
          displayName: 'Name'
        },
        {
          field: 'userType',
          displayName: 'Subscription Type'
        },
        {
          field: 'loyalty',
          displayName: 'Loyalty Score'
        },
        {
          field: 'joinDate',
          displayName: 'Date of Joining'
        }
      ]
    };
    $scope.showModal = function () {
      $scope.newUser = {};
      var modalInstance = $modal.open({
        templateUrl: 'views/add-user.html',
        controller: 'AddNewUserCtrl',
        animation:false,
        resolve: {
          newUser: function () {
            return $scope.newUser;
          }
        }
      });
      modalInstance.result.then(function (newUser) {
        $scope.subscribers.push({
          no: $scope.subscribers.length + 1,
          name: newUser.name,
          userType: newUser.userType,
          loyalty: newUser.loyalty,
          joinDate: newUser.joinDate
        });
      });
    };
  });

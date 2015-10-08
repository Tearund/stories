export default function ($scope, $log, $wpApiPosts, $stateParams) {
    'ngInject';
    var vm = this;
    vm.post = null;
    $scope.$on('$ionicView.loaded', init);

    function init() {
        $wpApiPosts.$get($stateParams.id).then((response) => {
            vm.post = response.data;
        });
    }

    $scope.nextPage = function(param){
    	console.log(param);
    	$('.page-'+param).hide();
    	$('.page-'+(param+1)).show();
    }
}


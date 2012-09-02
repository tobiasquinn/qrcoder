var qrcoder = angular.module('qrcoder', []).
directive('qrcode', function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.data, function(value) {
                if (value != undefined) {
                    $(element).empty();
                    $(element).qrcode({
                        //width: 250,
                        //height: 250,
                        text: value
                    });
                }
            });
        }
    }
});

function qrcoderController($scope, $location) {
    $scope.setUrl = function() {
        $scope.qrdata = $location.absUrl();
    };
    $scope.qrdata = "";
};

var calculator = {
    sum: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    divide: function(x, y) {
        return (y === 0) ? 0 : x / y;
    }
};

describe('calculator', function() {
    describe('sum', function() {
        it('1 + 1 should equal 2', function() {
            expect(calculator.sum(1, 1)).toBe(2);
        });
    });

    describe('subtract', function() {
        it('3 - 2 should equal 1', function() {
            expect(calculator.subtract(3, 2)).toBe(1);
        });
    });

    describe('divide', function() {
        it('10 / 5 should equal 2', function() {
            expect(calculator.divide(10, 5)).toBe(2);
        });

        it('zero divisor should equal 0', function() {
            expect(calculator.divide(10, 0)).toBe(0);
        });
    });
});

describe('homeController', function() {
    beforeEach(module('myApp'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));
    describe('$scope.userLVL', function() {
        it('sets the secturity level', function() {
            var $scope = {};
            var controller = $controller('homeController', {
                $scope: $scope
            });
            $scope.userLVL = '1 - 5';
            expect($scope.userLVL).toEqual('>0');
        });
    });
});

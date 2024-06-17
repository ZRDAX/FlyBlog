angular.module('blog', [])
        .controller('RestController', function ($scope, $http) {
            $http.get('https://api-fake-blog.onrender.com/postagens')
                .then(function (response) {
                    $scope.publicacoes = response.data;
                });
        })
        .controller('DetailsController', function ($scope, $http) {
            var urlParams = new URLSearchParams(window.location.search);
            var id = urlParams.get('id');

            if (id) {
                $http.get('https://api-fake-blog.onrender.com/postagem/' + id)
                    .then(function (response) {
                        $scope.publicacao = response.data;
                    });
            } else {
                console.error('ID não encontrado na URL');
            }
        });

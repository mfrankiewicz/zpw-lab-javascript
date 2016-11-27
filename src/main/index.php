<!DOCTYPE html>
<html lang="en" ng-controller="mainCtrl" ng-app="mainApp">
    <head>
        <meta charset="utf-8">
        <title>Zaawansowane Programowanie Webowe - laboratoria</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="/global/css/bootstrap.min.css">
        <link rel="stylesheet/less" href="/assets/less/main.less?v=<?= md5(uniqid()) ?>">

        <script type="text/javascript" src="/global/js/less.js"></script>
        <script src="/global/js/jquery.min.js"></script>
        <script src="/global/js/angular.min.js"></script>
        <script src="/global/js/angular-locale_pl-pl.js"></script>
        <script src="/global/js/angular-route.min.js"></script>
        <script src="/global/js/angular-resource.min.js"></script>
        <script src="/global/js/angular-animate.min.js"></script>

        <script src="/angular/controllers.js"></script>
    </head>

    <body>
        <header>
            <a href="/">
                Zaawansowane Programowanie Webowe
            </a>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <div ng-repeat="laboratory in laboratories" class="col-md-12 text-center">
                        <a ng-href="{{ laboratory.url }}"><h3>{{ laboratory.description }}</h3></a>
                    </div>
                </div>
            </div>
        </main>
        <script src="/angular/app.js"></script>
    </body>
</html>

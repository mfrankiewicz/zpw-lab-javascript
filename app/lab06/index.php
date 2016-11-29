<!DOCTYPE html>
<html lang="en" ng-controller="mainCtrl" ng-app="app">
    <head>
        <meta charset="utf-8">
        <title>Lab 6</title>
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
        <script src="/angular/services.js"></script>
        <script src="/angular/filters.js"></script>
    </head>

    <body>
        <header>
            <div class="container-fluid">
                <div class="col-md-6 text-left">
                    <a href="/#/">
                        lab06
                    </a>
                </div>
                <div class="col-md-6 text-right">
                    <a href="http://zpw.loc/">
                        lista laboratoriów
                    </a>
                </div>
            </div>
        </header>
        <main>
            <div class="view-frame" ng-view>
            </div>
        </main>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-12-md text-center">
                        <a href="/administrator">panel administracyjny</a>
                    </div>
                </div>
            </div
        </footer>
        <script src="/angular/app.js"></script>
    </body>
</html>

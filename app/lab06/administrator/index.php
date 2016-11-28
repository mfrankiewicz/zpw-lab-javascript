<!DOCTYPE html>
<html lang="en" ng-controller="mainCtrl" ng-app="adminApp">
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

        <script src="/administrator/angular/controllers.js"></script>

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
        <script src="/administrator/angular/app.js"></script>
    </body>
</html>

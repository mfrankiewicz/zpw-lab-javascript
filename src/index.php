<!DOCTYPE html>
<html ng-controller="GalleryListCtrl" lang="en" ng-app="portfolioApp">
    <head>
        <meta charset="utf-8">
        <title ng-bind-template="{{query.length > 0 ? 'Wyszukiwanie: ' + query : 'Strona galerii' + query}}">Strona galerii</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
        <link rel="stylesheet/less" href="/assets/less/main.less?v=<?= md5(uniqid()) ?>">

        <script type="text/javascript" src="/assets/js/less.js"></script>
        <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/angular.min.js"></script>
        <!-- Zakomentowane z uwagi na zadanie 7 dot. własnego filtra zamieniającego
        angielską nazwę dnia tygodnia na polską. -->
        <!-- <script src="/assets/js/angular-locale_pl-pl.js"></script> -->
        <script src="/assets/js/angular-route.min.js"></script>
        <script src="/assets/js/angular-resource.min.js"></script>
        <script src="/assets/js/angular-animate.min.js"></script>

        <script src="/angular/controllers.js"></script>
        <script src="/angular/filters.js"></script>
        <script src="/angular/services.js"></script>
        <script src="/angular/directives.js"></script>
    </head>



    <body>
        <header>
            <a href="/">
                header
            </a>
        </header>
        <nav class="col-md-2 col-xs-4">
            <ul>
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
            </ul>
        </nav>
        <main class="col-md-10 col-xs-8">
            <section class="galleries">
                <div class="container">
                    <div class="view-container">
                        <div class="view-frame" ng-view>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer>


        </footer>
        <script src="/angular/app.js"></script>
    </body>
</html>

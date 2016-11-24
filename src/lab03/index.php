<!DOCTYPE html>
<html lang="en" ng-controller="mainCtrl" ng-app="purchaseListApp">
    <head>
        <meta charset="utf-8">
        <title>Lista zakupów</title>
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
            <a href="/">
                lab03
            </a>
        </header>
        <main>
            <section ng-controller="purchaseFormCtrl" class="purchase-form mb-50">
                <form ng-submit="addPurchase()">
                    <div class="form-group">
                        <label>Nazwa użytkownika</label>
                        <input ng-model="purchase.username" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Nazwa produktu</label>
                        <input ng-model="purchase.productName" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Data zakupu</label>
                        <input ng-model="purchase.date" type="datetime-local" class="form-control">
                    </div>
                    <button type="submit" class="btn btn-default">Dodaj pozycję</button>
                </form>
            </section>
            <section ng-controller="purchaseListCtrl" class="purchase-list container">
                <h5>Aktywne produkty:
                    <span ng-if="getPurchaseCountByArchiveStatus(false) < 3" class="text-red">
                        {{ getPurchaseCountByArchiveStatus(false) }}
                    </span>
                    <span ng-if="getPurchaseCountByArchiveStatus(false) >= 3 && getPurchaseCountByArchiveStatus(false) <= 5" class="text-green">
                        {{ getPurchaseCountByArchiveStatus(false) }}
                    </span>
                    <span ng-if="getPurchaseCountByArchiveStatus(false) > 5" class="text-blue">
                        {{ getPurchaseCountByArchiveStatus(false) }}
                    </span>
                </h5>
                <h5>Wszystkie produkty: {{ purchases.length }}</h5>
                <div class="row mt-50">
                    <div class="col-md-2">Archiwum</div>
                    <div class="col-md-3">Imię</div>
                    <div class="col-md-4">Produkt</div>
                    <div class="col-md-3">Data</div>
                </div>
                <div class="row" ng-repeat="purchase in purchases | startFrom:currentPage*pageSize | limitTo:pageSize">
                    <div class="col-md-2" ng-if="purchase.archive">
                        <input type="checkbox" name="archive" checked="checked" ng-click="unarchive(purchase.id)">
                    </div>
                    <div class="col-md-2" ng-if="!purchase.archive">
                        <input type="checkbox" name="archive" ng-click="archive(purchase.id)">
                    </div>
                    <div class="col-md-3">{{ purchase.username }}</div>
                    <div class="col-md-4">{{ purchase.productName }} </div>
                    <div class="col-md-3">{{ purchase.date | date:'dd.MM.yyyy HH:mm' }}</div>
                </div>
                <div>
                    <button ng-disabled="currentPage == 0" ng-click="currentPage=currentPage-1" class="btn btn-default">
                        Poprzednia strona
                    </button>
                        {{currentPage+1}}/{{numberOfPages()}}
                    <button ng-disabled="currentPage >= getDisplayedPurchasesCount()/pageSize - 1" ng-click="currentPage=currentPage+1" class="btn btn-default">
                        Następna strona
                    </button>
                </div>
                <button ng-click="restoreArchive()" class="btn btn-default">Pokaż archiwum</button>
            </section>
        </main>
        <script src="/angular/app.js"></script>
    </body>
</html>

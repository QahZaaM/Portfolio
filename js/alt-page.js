var GlobalNavigation = null; 

$(document).ready(function ()
{
    GlobalNavigation = new GlobalNavigationCtor();
    var direction = 0;
    if (GlobalNavigation.containsArgument("dir="))
    {
        direction = GlobalNavigation.getParameterByName("dir");
    }
    if (direction === "1")
    {
        setTimeout(function () {
            $("body").addClass("loadedPanLeft");
        }, 1);
        // pan right
    }
    else if (direction === "-1") {
        // pan left
        setTimeout(function () {
            $("body").addClass("loadedPanRight");
        }, 1);
    }
    else
    {
        setTimeout(function () {
            $("body").addClass("loadedPanOpen");
        }, 1);
    }
        // normal
        setTimeout(function () {
            $("body").addClass("loaded");
        }, 1);
    });

function GlobalNavigationCtor()
{
    function obtainPathnameHeadBody()
    {
        var path = window.location.pathname;
        var headbody = path.substring(0, path.lastIndexOf('/'));
        return headbody;
    }

    function obtainPathnameTail() {
        var path = window.location.pathname;
        var tail = path.substring(path.lastIndexOf('/'), path.length);
        return tail;
    }

    function containsPage(path) {
        if (path.indexOf("pages") !== -1) return true;

        return false;
    }

    this.getParameterByName = function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    this.containsArgument = function (arg) {
        var path = window.location.href;

        if (path.indexOf(arg) !== -1) return true;

        return false;
    };

    this.hrefSwitcher = function () {
        if (containsPage(window.location.pathname)) {
            window.location.href = "../index.html";
        } else {
            window.location.href = "#";
        }

    };

    this.navCycle = function (direction)
    {
        this.CurrentIndex = this.CurrentIndex + direction;
        if (this.CurrentIndex === 0) this.CurrentIndex = 6;
        if (this.CurrentIndex === 7) this.CurrentIndex = 1;

        var arg = "?dir=".concat(direction);
        var path = obtainPathnameHeadBody().concat(this.IndexProjectPair[this.CurrentIndex]).concat(arg);
        

        window.location.href = path;
    };

    this.ProjectIndexPair =
        {
            "/magiator.html": 1,
            "/thelostbox.html": 2,
            "/thespot.html": 3,
            "/apiratesduel.html": 4,
            "/4v4arena.html": 5,
            "/run.html": 6
        };

    this.IndexProjectPair =
        {
            1: "/magiator.html",
            2: "/thelostbox.html",
            3: "/thespot.html",
            4: "/apiratesduel.html",
            5: "/4v4arena.html",
            6: "/run.html"
        };
    
    this.CurrentPage = obtainPathnameTail();
    this.CurrentIndex = this.ProjectIndexPair[this.CurrentPage];

    return this;
}


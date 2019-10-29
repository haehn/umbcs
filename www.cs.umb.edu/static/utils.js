/**
 * Created by cristian on 3/8/17.
 */

// Handler for an option in the pull-down menu of academic terms. Takes the
// user to the (relative) page specified by the value attribute of the option
// element.

function jumpToTerm()
{
    var destination = document.terms.term.value;
    var version = navigator.appVersion;
    if (version.indexOf("MSIE") >= -1) {
        window.location.href = destination;
    }
    else {
        window.open(destination, target = "_self");
    }
}

// Handler for an option in the pull-down menu of academic years. Takes the
// user to the (relative) page specified by the value attribute of the option
// element.

function jumpToYear()
{
    var destination = document.years.year.value;
    var version = navigator.appVersion;
    if (version.indexOf("MSIE") >= -1) {
        window.location.href = destination;
    }
    else {
        window.open(destination, target = "_self");
    }
}


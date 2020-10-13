"use strict";

var pageCounter1 = 1;
var pageCounter2 = 1;
var pageCounter3 = 13;
var infoContainer = document.getElementById("all-info");
var infoContainer = document.getElementById("id-info");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn1.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://www.devcodecampmusiclibrary.com/api/music/" + pageCounter1);
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        getById(data);
        console.log(data.title)
    };
    xhr.send();
    pageCounter1++;
    if (pageCounter1 > 23) {
        btn1.classList.add("hide-me");
    }
});


btn2.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://www.devcodecampmusiclibrary.com/api/music/" + pageCounter2);
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        getBeatlesTacks(data);
        console.log(data.title)
    };
    xhr.send();
    pageCounter2++;
    if (pageCounter2 > 1) {
        btn2.classList.add("hide-me");
    }
});

btn3.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://www.devcodecampmusiclibrary.com/api/music/" + pageCounter3);
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        getPostalTracks(data);
        console.log(data.title)
    };
    xhr.send();
    pageCounter3++;
    if (pageCounter3 > 1) {
        btn3.classList.add("hide-me");
    }
});


function getAllMusic() {
    $.ajax({
        url: "http://www.devcodecampmusiclibrary.com/api/music/",
        dataType: "json",
        type: "get",
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $("#table").append("<tr>" +
                    "<td>" + data[i].title + "</td> " +
                    "<td>" + data[i].album + "</td>" +
                    "<td>" + data[i].artist + "</td>" +
                    "<td>" + data[i].genre + "</td>" +
                    "<td>" + data[i].releaseDate + "</td>" +
                    " </tr>");
            }
        },
        error: function (jQxhr, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    });
}


function getById() {
    $.ajax({
        url: "http://www.devcodecampmusiclibrary.com/api/music/",
        dataType: "json",
        type: "get",
        success: function (data, textStatus, jQxhr) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                $("#title").append(
                    "<tr>" + "<td>" + data[i].title + "</tr>");
            }
        },
        error: function (jQxhr, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    });
}

    function getBeatlesTacks() {
        $.ajax({
            url: "http://www.devcodecampmusiclibrary.com/api/music/",
            dataType: "json",
            type: "get",
            success: function (data, textStatus, jQxhr) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    $("#title").append(
                        "<tr>" + "<td>" + data[i].title + "</tr>");
                }
            },
            error: function (jQxhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        });
    }

        
        function getPostalTracks() {
            $.ajax({
                url: "http://www.devcodecampmusiclibrary.com/api/music/",
                dataType: "json",
                type: "get",
                success: function (data, textStatus, jQxhr) {
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        $("#title").append(
                            "<tr>" + "<td>" + data[i].title + "</tr>");
                    }
                },
                error: function (jQxhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                },
            });
        

    // }

    // $(document).ready(function () {
    //     let songTitle = $("#title").html();
    //     console.log(songTitle);
}

getAllMusic();

getById();

getBeatlesTacks();

getPostalTracks();
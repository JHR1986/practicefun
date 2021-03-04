var map;
            var InforObj = [];
            var centerCords = {

                lat: 38.2682,
                lng: 140.8694
            };
            var markersOnMap = [{
                    placeName: "Tokyo",
                    text: "De facto capital and most populous prefecture of Japan.",
                    LatLng: [{
                        lat: 35.6762,
                        lng: 139.6503
                    }]
                },
                {
                    placeName: "Kyoto",
                    text: "Kyoto is a city on the island of Honshu, famous for its numerous classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden houses",
                    LatLng: [{
                        lat: 35.0116,
                        lng: 135.7681
                    }]
                },
                {
                    placeName: "Osaka",
                    text: "Osaka is a large port city and commercial center on the Japanese island of Honshu. It's known for its modern architecture, nightlife and hearty street food.",
                    LatLng: [{
                        lat: 34.6937,
                        lng: 135.5023
                    }]
                },
                {
                    placeName: "Sapporo",
                    text: "Sapporo, capital of the mountainous northern Japanese island of Hokkaido, is famous for its beer, skiing and annual Sapporo Snow Festival featuring enormous ice sculptures.",
                    LatLng: [{ 
                        lat: 43.0618,
                        lng: 141.3545
                    }]
                },
            ];

            window.onload = function () {
                initMap();
            };

            function addMarkerInfo() {
                for (var i = 0; i < markersOnMap.length; i++) {
                    var contentString = '<div id="content"><h2>' + markersOnMap[i].placeName +
                        '</h2><p>' + markersOnMap[i].text + '</p></div>';

                    const marker = new google.maps.Marker({
                        position: markersOnMap[i].LatLng[0],
                        map: map
                    });

                    const infowindow = new google.maps.InfoWindow({
                        content: contentString,
                        maxWidth: 200
                    });

                    marker.addListener('click', function () {
                        closeOtherInfo();
                        infowindow.open(marker.get('map'), marker);
                        InforObj[0] = infowindow;
                    });
                    // marker.addListener('mouseover', function () {
                    //     closeOtherInfo();
                    //     infowindow.open(marker.get('map'), marker);
                    //     InforObj[0] = infowindow;
                    // });
                    // marker.addListener('mouseout', function () {
                    //     closeOtherInfo();
                    //     infowindow.close();
                    //     InforObj[0] = infowindow;
                    // });
                }
            }

            function closeOtherInfo() {
                if (InforObj.length > 0) {
                    InforObj[0].set("marker", null);
                    InforObj[0].close();
                    InforObj.length = 0;
                }
            }

            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 4.5,
                    center: centerCords
                });
                addMarkerInfo();
            }
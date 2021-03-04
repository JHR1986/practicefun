var map;
            var InforObj = [];
            var centerCords = {
                lat: 34.9934,
                lng: 134.9694
            };
            var markersOnMap = [{
                    placeName: "Japan (Tokyo)",
                    LatLng: [{
                        lat: 35.6762,
                        lng: 139.6503
                    }]
                },
                {
                    placeName: "Japan (Kyoto)",
                    LatLng: [{
                        lat: 35.0116,
                        lng: 135.7681
                    }]
                },
                {
                    placeName: "Japan (Hiroshima)",
                    LatLng: [{
                        lat: 34.3853,
                        lng: 132.4553
                    }]
                },
                {
                    placeName: "Australia (Gold Coast)",
                    LatLng: [{
                        lat: -28.013044,
                        lng: 513.425586
                    }]
                },
                {
                    placeName: "Australia (Perth)",
                    LatLng: [{
                        lat: -31.951994,
                        lng: 475.858081
                    }]
                }
            ];

            window.onload = function () {
                initMap();
            };

            function addMarkerInfo() {
                for (var i = 0; i < markersOnMap.length; i++) {
                    var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName +
                        '</h1><p>Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.</p></div>';

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
                    zoom: 4,
                    center: centerCords
                });
                addMarkerInfo();
            }
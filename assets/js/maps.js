var map;
            var InforObj = [];
            var centerCords = {

                lat: 38.2682,
                lng: 140.8694
            };
            var markersOnMap = [{
                    placeName: "Tokyo",
                    LatLng: [{
                        lat: 35.6762,
                        lng: 139.6503
                    }]
                },
                {
                    placeName: "Kyoto",
                    LatLng: [{
                        lat: 35.0116,
                        lng: 135.7681
                    }]
                },
                {
                    placeName: "Hiroshima",
                    LatLng: [{
                        lat: 34.3853,
                        lng: 132.4553
                    }]
                },
                {
                    placeName: "Sapporo",
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
                        '</h2><p>Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.</p></div>';

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
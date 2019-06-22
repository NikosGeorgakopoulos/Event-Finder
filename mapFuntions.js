// All scripts will be writen here until moved to a different .js file           
            function initialize(){
                var position = new google.maps.LatLng(37.980600,23.725300);
                var position2 = new google.maps.LatLng(37.980700,23.725400);

                var mapOptions = { 
                    center: position, 
                    zoom: 15,
                    disableDefaultUI : true                    
                    };

                var map = new google.maps.Map(document.getElementById("mapDiv"),mapOptions);
                addEarthquakeLayer(map);
                //addButtons(map);
            }

            // Adding GeoRSS Feed for Earthquakes
			function addEarthquakeLayer(map){
				var QuakesLayer = new google.maps.KmlLayer('http://www.bgs.ac.uk/feeds/SchoolSeismology.xml');
				QuakesLayer.setMap(map);
			}

                // Add a marker as Geo JSON data

                // function addGeoJSONDataLayer(map){
                //     map.data.loadGeoJson()
                // }


                // Marker Addition

                // var centerMarker = new google.maps.Marker({                        
                //         position : position,
                //         map : map,
                //         title : "Test Marker"
                // });
                
                //Circle Creation

                // var circle = new google.maps.Circle({
                //         map:map,
                //         center : position,
                //         fillColor : "#92D050",
                //         fillOpacity : 0.6,
                //         strokeColor : "#92D050",
                //         strokeOpacity : 0.8,
                //         strokeWeight : 2
                // });
                // circle.setRadius(58);


            //    var kmlLayer = new google.maps.kmlLayer();
            //    kmlLayer.setMap(map);

            //Buttons for Adjusting MapType

			// function addButtons(map){
			// 	document.getElementById('btnTerrain').addEventListener('click',function(){
			// 		map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
			// 	});

			// 	document.getElementById('btnSatellite').addEventListener('click',function(){
			// 		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
			// 	});

			// 	document.getElementById('btnRoadmap').addEventListener('click',function(){
			// 		map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
			// 	});

			// 	document.getElementById('btnHybrid').addEventListener('click',function(){
			// 		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
			// 	});
			// };

            google.maps.event.addDomListener(window,"load",initialize);
const initMap = () =>  {

  const latLng = new google.maps.LatLng(34.868633, -111.761734);
  const mapMarker = {
    url: "img/icons/icon-map-marker.svg",
    size: new google.maps.Size(27, 27),
  };

  const mapOptions = {
    center: latLng,
    zoom: 7,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },
    scrollwheel: false,
    disableDefaultUI: true,
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  const marker = new google.maps.Marker({
    map: map,
    position: latLng,
    icon: mapMarker,
  });
}
initMap();


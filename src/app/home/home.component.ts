import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { MapView } from "nativescript-google-maps-sdk";

registerElement("MapView", () => MapView);

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    latitude: -23.4188119;
    longitude: -46.7171601;
    zoom: 8;
    bearing: 0;
    tilt: 0;
    mapAnimationsEnabled: true;
    padding: 0;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onMapReady(event) {
        let mapView = event.object as MapView;

        mapView.latitude = -23.4188967;
        mapView.longitude = -46.7172574;

        mapView.zoom = 17;
    }
}

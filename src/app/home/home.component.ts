import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { MapView, Marker, Position, Style } from "nativescript-google-maps-sdk";
import mapConfig from "../config/map.json";

registerElement("MapView", () => MapView);

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onMapReady(event) {
        let mapView = event.object as MapView;

        mapView.mapAnimationsEnabled = false;

        mapView.latitude = -23.4188967;
        mapView.longitude = -46.7172574;

        mapView.zoom = 17;

        mapView.setStyle(<Style>JSON.parse(JSON.stringify(mapConfig)));

        let marker = new Marker();
        marker.position = Position.positionFromLatLng(-23.418994, -46.718118);
        marker.title = 'TERM. PIRITUBA';
        marker.snippet = '9023-10';
        marker.color = '#6B8E23';
        marker.flat = true;

        mapView.addMarker(marker);
    }
}

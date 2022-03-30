import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent{
    @Output() featureEmitter = new EventEmitter<string>();
    onNavigate(feature: string){
        this.featureEmitter.emit(feature);
    }
}
import { Component } from "@angular/core";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-flash-card",
  templateUrl: "./flash-card.component.html",
  styleUrls: ["./flash-card.component.css"],
})
export class FlashCardComponent {
  iconTrash = faTrash;
}

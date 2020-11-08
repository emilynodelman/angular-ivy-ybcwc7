import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";
import { ModalComponent } from "./modal/modal/modal.component";
import { Collection } from "./models/collection";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  data$: Observable<Collection>;

  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.data$ = this.dataService.get();
  }

  openModal(item) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.item = item;
    modalRef.result.then(result => {
      if (result) {
        console.log(result);
      }
    });
  }
}

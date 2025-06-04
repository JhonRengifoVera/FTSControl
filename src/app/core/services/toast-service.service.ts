import { Injectable, inject } from "@angular/core";
import { MessageService } from "primeng/api";
import { Toast } from "../models/global.model"; 

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private messageService = inject(MessageService);
  showToast({ titulo, mensaje, tipo }: Toast){
    this.messageService.add({
      key: 'br',
      severity: tipo,
      summary: titulo,
      detail: mensaje,
    });
  }
}

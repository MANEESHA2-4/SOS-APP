import { Injectable } from '@angular/core';
import { ToastrService} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
 providedIn: 'root'
})
export class ToastarService {
  success(arg0: string) {
    throw new Error('Method not implemented.');
  }

 constructor(private notifyService:ToastrService,private client : HttpClientModule) {
  
 }

 showSuccess(message: string | undefined, title: string | undefined){
   this.notifyService.success(message, title)
  }
  
  showError(message: string | undefined, title: string | undefined){
   this.notifyService.error(message, title)
  }
  
  showInfo(message: string | undefined, title: string | undefined){
   this.notifyService.info(message, title)
  }
  
  showWarning(message: string | undefined, title: string | undefined) {
   this.notifyService.warning(message, title)
  }
  
  
  
}


import {Injectable} from '@angular/core';
import {Global} from './global';

//con el injectable defino mi servicio
@Injectable()
export class UploadService{
  public url: string;

  constructor(){
    this.url = Global.url;

  }

  makeFileRequest(url:string, params: Array<string>, files: Array<File>, name:string){
    return new Promise(function(resolve, reject){
      var formData:any=  new FormData();
      //xhr es sinonimo de ajax
      var xhr = new XMLHttpRequest();
      //recorreme todos los ficheros que me vayan llegando y adjuntamelos al form con el nombre que me llega
      //añade ese archivo y recoge su nombre
      for(var i=0; i < files.length; i++){
        formData.append(name, files[i], files[i].name);
      }
      //peticion ajax
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response);
          }
        }
      }
      xhr.open('POST',url,true);
      xhr.send(formData);
    });
  }
}

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private currentUser: any = null;

  constructor(private storage: Storage) {this.storage.create(); }

  async setCurrentUser(usuario: any) {
    this.currentUser = usuario;
    await this.storage.set('currentUser', usuario);
  }

  async getCurrentUser() {
    if (this.currentUser) {
      return this.currentUser;
    }
    this.currentUser = await this.storage.get('currentUser');
    return this.currentUser;
  }

  async clearCurrentUser() {
    this.currentUser = null;
    this.storage.remove('currentUser');
  }
  
}

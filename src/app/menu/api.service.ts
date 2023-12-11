import { Injectable } from '@angular/core';
import { Database, ref, get, set, update, push } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private db: Database) { }

  async obtenerUsuario(rut: string) {
    const userRef = ref(this.db, `/USUARIOS/${rut}`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return null;
    }
  }
  

}

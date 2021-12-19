import { Application } from 'express';
import { listLecturas } from './controllers/lectura_controllers';
export function routes(app: Application){
    app.get('/api/lecturas', listLecturas);
}
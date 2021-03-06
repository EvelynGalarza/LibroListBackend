import { Request, Response } from 'express';
import { db } from "../index";

export async function listLecturas(req: Request , res: Response) {
    try {
        let snapshot = await db.collection("lectura").get();
        return res.status(200).json(snapshot.docs);
    } catch (error) {
        return handleError(res,error);
    }
}

function handleError(res: Response, err: any) {
    return res.status(500).send({ message: `${err.code} - ${err.message}` });
}
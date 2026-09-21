import express from "express";

import {
    listar,
    formNovo,
    criar,
    alterarStatus,
    remover
} from "../controllers/livroController.js";

const router = express.Router();

router.get("/", listar);

router.get("/novo", formNovo);

router.post("/novo", criar);

router.get("/status/:indice", alterarStatus);

router.get("/remover/:indice", remover);

export default router;
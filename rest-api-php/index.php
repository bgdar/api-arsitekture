<?php


require_once __DIR__ . "/controller/managementBarangController.php";
require_once __DIR__ . "/core/router.php";


$route = new Router();

$route->get('/', [BarangbakuController::class, "index"]);
$route->get("/addBarang", [BarangbakuController::class, "addBarangView"]);
$route->post('/addBarang', [new BarangbakuController(), 'addBarangPost']);


// running semau route 
$route->dispatch();

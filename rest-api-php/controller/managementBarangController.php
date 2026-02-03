<?php

require_once  __DIR__ . "/../core/request.php";
require_once __DIR__ . "/../core/view.php";

class BarangbakuController
{

  public function index(Request $req)
  {
    View::render("index", [
      "title" => "halaman index",
      "data" => "data test ini bekerja ",
    ]);
  }
  public function addBarangView()
  {
    View::render("addBarang");
  }
  public function addBarangPost(Request $req)
  {
    $data = $req->body();
    var_dump($data);
  }
}

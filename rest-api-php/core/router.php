<?php

require_once __DIR__ . "/request.php";

// membuat instance Route dan request handler 


class Router
{
  protected array $routes = [];
  protected Request $request;

  public function __construct()
  {
    $this->request = new Request();
  }

  /*
 * Dapatkan route Http get 
 */
  public function get(string $path, callable | array $handler): void
  {

    // jadinya seperti 'Method /path_nya' nama_metho_handler()
    $this->routes['GET'][$path] = $handler;
    print_r("route get : " . $this->routes);
  }
  /*
 * Dapatkan route Http get 
 */
  public function post(string $path, callable | array $handler): void
  {

    // jadinya seperti 'Method /path_nya' nama_metho_handler()
    $this->routes['POST'][$path] = $handler;
  }
  /*
 * Menjalanakn Handler berdasarkan request yang masuk 
 */
  public function dispatch(): void
  {
    $method = $this->request->method();
    $path   = $this->request->path();
    $handle = $this->routes[$method][$path]; // array of array

    if (!isset($this->routes[$method][$path])) {
      http_response_code(404);
      echo json_encode(["error" => "Route not found"]);
      return;
    }

    if (is_callable($handle)) {
      call_user_func($handle, $this->request);
      return;
    }
    if (is_array($handle)) {
      [$class, $method] = $handle;
      $controller = new $class();
      call_user_func([$controller, $method], $this->request);
      return;
    }
  }
}

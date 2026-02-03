<?php

class Request
{
  protected string $url;
  protected string $method;
  protected array $body;

  public function __construct()
  {
    $this->body = json_decode(file_get_contents("php://input"), true) ?? [];
    $this->method = $_SERVER["REQUEST_METHOD"];
    $this->url = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
  }

  /*
 * Dapatkan path Url saaat ini 
 */
  public function path(): string
  {
    return $this->url;
  }
  /*
 * Dapatkan method dari request
 */
  public function method(): string
  {
    return $this->method;
  }
  /*
 * dapatkan request data Body dalam bentuk array json 
 */

  public function body(): array
  {
    return $this->body;
  }
}

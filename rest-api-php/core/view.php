<?php

class View
{

    /*
 * Render File  atau halaman | file.php
 * $view : nama file dari folder /viewa
 *    Example : file/file -> views/file/fiel.php
 */
    public static function render(string $view, array $data = []): void
    {
        // Mengubah key array menjadi variabel
        // ['title' => 'Home'] → $title
        extract($data);

        // Mulai buffer output
        ob_start();

        // Simpan hasil render view
        $content = ob_get_clean();


        $path_view = __DIR__ . "../resources/views/{$view}.php";
        var_dump("folder yg di dapat : " . $path_view);
        // Include file view utama
        require __DIR__ . "/../resources/views/{$view}.php";
    }

    /*
    * Render view tanpa layout (misal partial / ajax)
    */
    public static function renderRaw(string $view, array $data = []): void
    {
        extract($data);
        require __DIR__ . "views/{$view}.php";
    }

    // Render JSON response
    public static function json(array $data, int $status = 200): void
    {
        http_response_code($status);
        header("Content-Type: application/json");
        echo json_encode($data);
    }

    private function makePath(string $path): void
    {
        $path = str_replace('/', DIRECTORY_SEPARATOR, $path);

        if (!is_dir($path)) {
            if (!mkdir($path, 0755, true) && !is_dir($path)) {
                throw new RuntimeException("Gagal membuat directory: $path");
            }
        }
    }
}

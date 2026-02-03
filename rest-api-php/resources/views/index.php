<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8">
  <title><?= $title ?? 'My App' ?></title>
</head>

<body>

  <header>
    <h1>PHP MVC Native</h1>
    <hr>
  </header>

  <p><?= $data  ?? "Kosong" ?></p>

  <!-- Konten dinamis -->

  <!-- Footer -->
  <footer>
    <hr>
    <small>&copy; <?= date('Y') ?></small>
  </footer>

</body>

</html>

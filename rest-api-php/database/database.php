<?php



class Database
{
  protected string  $filename;
  protected array $field_default = ["barang" => ["barang1"], "pesanan" => [" "], " "]; // field default yang ada di filename

  public function __construct(string $filename)
  {
    $this->filename = $filename;
  }

  /*
 * Jika tidak ada buat baru d
 */
  function isFile(): bool
  {
    if (file_exists($this->filename)) {
      return true;
    } else {
      // File tidak ada, buat dan tulis
      $fileHandle = fopen($this->filename, 'w');
      if ($fileHandle) {

        fwrite($fileHandle, "[" . json_encode($this->field_default) . "]");
        fclose($fileHandle);
        echo "File '$this->filename' berhasil dibuat dan ditulis.\n";
        return true;
      } else {
        echo "Gagal membuat file.\n";
        return false;
      }
    }
  }
  /*
 * Tulis ulang 
 */
  function writeFile(array $file_name): void
  {

    $file_string = json_encode($file_name);

    // tulis file
    if (file_put_contents($this->filename, $file_string,)) {
      echo "File JSON '$this->filename' berhasil dibuat!";
    } else {
      echo "File gagal di tulis";
    }
  }
  /*
 * cek fild filed di file datanya apakah ada atau tidak  
 */
  function cek_field(string $file_name): bool
  {
    if (in_array($file_name, $this->field_default,)) {
      return true;
    }
    return false;
  }

  /*
 * Dapatkan data file 
 */
  public function get_data(): array
  {
    $file_strig = file_get_contents($this->filename);
    return json_decode($file_strig, true);
  }
  /*
 * manipulasi data berdasarkan 
 * @Param $data = data yang akan di masukan  
 * @param $file_name = jenis field yang ada di data , mislanya 'barang'
*/
  public function insert(string $data, string $filed_name): void
  {
    if ($this->isFile()) {
      $file_string = file_get_contents($this->filename);
      //ubah jadi array asosiatif 
      $file_json = json_decode($file_string, true);
      if ($this->cek_field($filed_name)) {

        $file_json[$filed_name] = $data;
        // tulis
        $this->writeFile(file_name: $file_json);
      } else {
        echo "fiedl tidak di temukan";
      }
    }
  }
  public function delete(string $data, string $filed_name): void
  {
    if ($this->isFile()) {
      $file = $this->get_data();
      // hapus 
      unset($file[$filed_name][$data]);
      // tulis ulang 
      $this->writeFile($file);
    }
  }
}

---
---

# My first post

```ruby
if (version_compare(phpversion(), '4.3.0') &lt; 0) {
    function file_get_contents($filename) {
        $fd = @fopen($filename, 'rb');
        if ($fd === false) {
            $content = false;
        } else {
            $content = @fread($fd, filesize($filename));
            @fclose($fd);
        }
        return $content;
    }
}

```
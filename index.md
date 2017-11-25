# this is a comment
{% for repository in site.github.public_repositories %}
  * {{ repository.name }}
{% endfor %}

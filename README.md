# mpa-react-ts
React + Typescript in Multiple Page Application demo


# Script to start

```shell
# dev in component frontend
cd component
npm install
npm run start
npm run build:watch
npm run build
# or see the `script` in package.json for your reference

# dev in web page fronted
cd web
npm install
npm run start
npm run build:watch
npm run build
npm run analyze
# or see the `script` in package.json for your reference

# dev in django backend
poetry install --no-root
poetry run python manage.py runserver
# go to see
# http://localhost:8090/polls/ for easy navigation

```

# Bridge for django template and react frontend for mpa

```python
# mpademo/settings.py

STATICFILES_DIRS = [
    BASE_DIR("component", "build"),
    BASE_DIR("web", "build"),
    # other non-app static folders
]
```

```shell
# build js bundle dynamically
cd web
npm run build:watch
cd component
npm run build:watch
```

```html
<!-- 
    for scripts from web, 
    copy the <script .../> <link .../> tags from web/build/page1.html
    and {% static .... %} as django template tags
    like polls/templates/polls/page1.html

    for dynamical imports just copy those present in web/build/page1.html is ok
-->
<script src="{% static 'assets/runtime.670e9f10.js' %}"></script>
<script src="{% static 'assets/1.1a14701d.js' %}"></script>
<script src="{% static 'assets/5.baa4917a.js' %}"></script>
<script src="{% static 'assets/page1.88e3cb4b.js' %}"></script>

```

```html
<!-- 
    for scripts from component, 
    like polls/templates/polls/component.html

    no we should exclude all dependencies in webpack config with `externals`

    here I just exclude {react: 'React', 'react-dom': 'ReactDOM'}
    although I should exclude stuff from `@headlessui/react` 
-->
<script src="{% static 'ListBox.js' %}"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
      React.createElement(
        ListBox.default, // note - using .default here as this is how the global is set up
      ), document.getElementById('root'));
  });
</script>

```

# reactism-grid

Grid system for react.js project reference by bootstrap 4.

## Instalation

For npm
```npm i reactism-grid```

or yarn
```yarn add reactism-grid```

## Grid Structure

This is basic example to using the grid.

```
<Container>
  <Row>
    <Col>Column 1</Col>
    <Col>Column 2</Col>
    <Col>Column 3</Col>
  </Row>
</Container>
```

## API

### Container

Container will create a boxed layout with max width **1346px** by default, you can change with property **size**.

```import { Container } from 'reactism-grid'```

|Name|Type|Default|Description|
|--|--|--|--|
|size|number, string|1346|Max width for the container|
|gutter|number, string|32|Spacing between column|
|padding|number, string|null|Extra control to give padding for the container|

### Row

Row is wrapper for `col`, this also means row of course like the name of the component.

```import { Row } from 'reactism-grid'```

|Name|Type|Default|Description|
|--|--|--|--|
|noGutter|bool|false|Remove spacing between column|

### Col

Col is the most used in grid, its mean column for layout. We using 12 max column (will be dynamic in the future). So when you want to make 2 column in your site, the code will be like:

```
import { Row, Col } from 'reactism-grid'

...

// Auto width
<Row>
  <Col>Column 1</Col>
  <Col>Column 2</Col>
</Row>

// Defined, you can make it different
<Row>
  <Col md="7">Column 1</Col> // Wider than column 2
  <Col md="5">Column 2</Col>
</Row>
```

|Name|Type|Default|Description|
|--|--|--|--|
|sm|number, string|null|Small media query. When the width is smaller than **575.98px**, width will be change to **100%**|
|md|number, string|null|Medium media query. When the width is smaller than **767.98px**, width will be change to **100%**|
|lg|number, string|null|Large media query. When the width is smaller than **991.98px**, width will be change to **100%**|
|xl|number, string|null|Extra large media query. When the width is smaller than **1199.98**, width will be change to **100%**|

# reactism-grid

Grid system for react.js project reference by bootstrap 4.

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

The container will create a boxed layout with max width **1346px** by default, you can change with property **size**.

|Name|Type|Default|Description|
|--|--|--|--|
|size|number, string|1346|Max width for the container|
|gutter|number, string|32|Spacing between column|
|padding|number, string|null|Extra control to give padding for the container|

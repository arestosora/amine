# Página web Amine Raver

## Información
### Versión: `0.6-alpha`
### Directorios de componentes
Todos los componentes se encuentran en el directorio [`.\src\apps\WebPage\src\app\components\`](./src/app/components/), pero en éste, se clasifican según su categoría y son ubicados en diferentes subdirectorios para mantener un mejor orden. En la siguiente tabla encontrarás la lista completa:
<table>
    <thead>
        <th>Categoría</th>
        <th>Subdirectorio</th>
        <th>Descripción</th>
    </thead>
    <tr>
        <td rowspan="4">Basics</td>
        <td><code><a href="./src/app/components/basics/context-menu/">.\basics\context-menu\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/basics/header/">.\basics\header\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/basics/loader/">.\basics\loader\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/basics/no-script/">.\basics\no-script\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="1">Copper</td>
        <td><code><a href="./src/app/components/copper/">.\copper\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="1">Gold</td>
        <td><code><a href="./src/app/components/gold/">.\gold\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="1">Home</td>
        <td><code><a href="./src/app/components/home/">.\home\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="6">Inputs</td>
        <td><code><a href="./src/app/components/inputs/checkbox/">.\inputs\checkbox\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/inputs/date/">.\inputs\date\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/inputs/mail/">.\inputs\mail\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/inputs/number/">.\inputs\number\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/inputs/radio/">.\inputs\radio\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/inputs/text/">.\inputs\text\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="7">Payment</td>
        <td><code><a href="./src/app/components/payment/">.\payment\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/payment/completed/">.\payment\completed\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/payment/failed/">.\payment\failed\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/payment/form/mail/">.\payment\form\mail\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/payment/form/personal/">.\payment\form\personal\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td><code><a href="./src/app/components/payment/form/plan/">.\payment\form\plan\</a></code></td>
        <td></td>
    <tr>
        <td><code><a href="./src/app/components/payment/loading/">.\payment\loading\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="1">Privacy</td>
        <td><code><a href="./src/app/components/privacy/">.\privacy\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="1">ProductBox</td>
        <td><code><a href="./src/app/components/productbox/">.\productbox\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="1">Products</td>
        <td><code><a href="./src/app/components/products/">.\products\</a></code></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="1">Silver</td>
        <td><code><a href="./src/app/components/silver/">.\silver\</a></code></td>
        <td></td>
    </tr>
</table>

## Cómo funciona

### Accede al directorio
```
cd .\src\apps\WebPage\
```

### Instala las dependencias
```
npm i
```

### Instala Angular
```
npm install -g angular
```

### Iniciar servidor de desarrollador
Usa el siguiente comando para ejecutar localmente el servidor de desarrollador.
```
ng serve
```
Una vez iniciado, la página podrá previsualizarse en `http://localhost:4200`

## Construcción

### Crear un componente
Para crear un nuevo componente podrás utilizar cualquiera de los siguientes dos comandos:
```
ng generate component components/<component-name>
```
```
ng g c components/<component-name>
```

### Crear otros elementos
Gracias a Angular también puedes crear otros elementos como directivas, servicios, módulos...
Para ello puedes utilizar los siguientes comandos:

```
ng generate directive directives/<directive-name>
```
```
ng generate pipe pipes/<pipe-name>
```
```
ng generate service services/<service-name>
```
```
ng generate class classes/<class-name>
```
```
ng generate guard guards/<guard-name>
```
```
ng generate interface interfaces/<interface-name>
```
```
ng generate enum enums/<enum-name>
```
```
ng generate module modules/<module-name>
```

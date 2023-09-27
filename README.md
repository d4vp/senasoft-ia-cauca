# Senasoft-ia-cauca

Este proyecto se desarrollo con la finalidade de complir con los requerimientos
dados el dia 26/09/2023.

## Requerimientos

### Funcionales

1. Crear una aplicación que permita a sus usuarios enviar imagenes, luego diferencie entre perros
patos y personas.

2. La aplicacion debe enseñar al usuario una respuesta visual que indique que la imagen enviada
son personas, patos o perros.

3. La palabra devuelta por el 

### No funcionales.

1. Usamos angular para crear la interefaz web.

2. Usamos css para añadirle estilos.

## Recursos audiovisuales usados

Para el entrenamiento de la ia usada para dar respuesta al usuario
se usaron los siguientes recursos.

### Visuales

1. Pexels: Plataforma en linea que brinda imagenes libres de derechos de autor para poder usarlas en
aplicaciones sin animo de lucro 
Enlace [https://www.pexels.com/es-es/]

## Endpoints de los recursos IA

Para la prueba usamos Microsoft azure [https://portal.azure.com/] para la creacion de los recursos
para el entrenamiento de imagenes usaos [https://www.customvision.ai/].
### Custom vision

Prediction-Key: 965da2919fd14e49bd4754ed0082060a (la key va en los header de ambos url y imagen)
#### Imagen 

1. Headers:
Content-Type: image/jpg 

2. Body:
Archivo de imagen, en binario

3. endpoint: [https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/image]

#### Url

### Traducción

1. Headers:

Ocp-Apim-Subscription-Key: fca2800b2e3340a7bd76f6303232db2d
Ocp-Apim-Subscription-Region: brazilsouth

2. Body:

Un array de objetos con la siguiente forma [{"text":"texto a traducir"}]

3. endpoint: [https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=af]
donde af al final de la url es el idioma al que queremos traducir. La informacion para encontrar
los idiomas disponibles se encuentra disponible en [https://learn.microsoft.com/es-es/azure/ai-services/translator/language-support]



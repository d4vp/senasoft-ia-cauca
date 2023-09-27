# Senasoft-ia-cauca

Este proyecto se desarrollo con la finalida de competir en senasoft 2023.
## Herramientas

### Lenguajes usado

* [Angular](https://angular.io/)

### Heramientas usadas

* Visual estudio code
* THUNDER CLIENT (extencion de visual estudio)

## Requerimientos

### Funcionales

#### Modulo 1
1. Crear una aplicación que permita a sus usuarios enviar imagenes, luego diferencie entre perros
patos y personas.

2. La aplicacion debe enseñar al usuario una respuesta visual que indique que la imagen enviada
son personas, patos o perros.

3. La palabra devuelta por el 

4. El resultado del identificador de imagenes debe ser devuelto en una respuesta de audio.

#### Modulo 2
1. Crear un modulo que permita subir 3 fotos de personas.
4. Debemos conectar el servicio de custon vision al de reconocimiento de rostros.

### No funcionales.

1. Usamos angular para crear la interefaz web.

2. Usamos css para añadirle estilos.

## Recursos audiovisuales usados

Para el entrenamiento de la ia usada para dar respuesta al usuario
se usaron los siguientes recursos.

### Visuales

1. Pexels: Plataforma en linea que brinda imagenes libres de derechos de autor para poder usarlas en
aplicaciones sin animo de lucro 
[pexels][https://www.pexels.com/es-es/]

### Iconos

1. Google icons: documentacion de google para descargar o importar iconos de libre uso
[google icons](https://fonts.google.com/icons)

## Endpoints de los recursos IA

Para la prueba usamos [Microsoft azure](https://portal.azure.com/) para la creacion de los recursos
para el entrenamiento de imagenes usamos [custom vision](https://www.customvision.ai/).
### Custom vision

#### itereacion 1
En esta iteracion el servicio reconoce fotos donde hay personas, perros y patos

##### Imagen 

1. Headers:
    * Prediction-Key: 965da2919fd14e49bd4754ed0082060a
    * Content-Type: image/jpg 

2. Body:
Archivo de imagen, en binario

3. [endpoint](https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/image)

##### Url

1. Headers:
    * Prediction-Key: 965da2919fd14e49bd4754ed0082060a
    * Content-Type: application/json

2. Body:
 un objeto json con la siguiente estructura
 `{
    "url":"la url de la imagen"
}`

3. [Endpoint](https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/fb27bfd7-e62a-4e10-9bf0-b39b8cd797f8/classify/iterations/ppp-v1/url)

### Traducción

1. Headers:

    * Ocp-Apim-Subscription-Key: fca2800b2e3340a7bd76f6303232db2d
    * Ocp-Apim-Subscription-Region: brazilsouth

2. Body:

Un array de objetos con la siguiente forma `
`[{
    "text": "texto a traducir"
}]`

3. [endpoint](https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=af)
donde af al final de la url es el idioma al que queremos traducir. La informacion para encontrar
los idiomas disponibles se encuentra disponible en [microsoft learn](https://learn.microsoft.com/es-es/azure/ai-services/translator/language-support)

### Texto a audio

1. Headers:
    * Ocp-Apim-Subscription-Key: d6784b0aa5474c1db500f7ca2a555877
    * Content-Type: application/ssml+xml
    * X-Microsoft-OutputFormat: audio-16khz-64kbitrate-mono-mp3

2. Body:
Se le debe pasar un xml con la siguiente estructura

`<speak version='1.0' xml:lang='en-US'>
    <!--lang en-Us hace referencia al lenguaje usado para el audio-->
    <voice xml:lang='en-US' xml:gender='Male'
    name='en-US-ChristopherNeural'>
        <!--name hace referencia a la voz hablante en el audio y gender al genero del hablante-->
        learning ai in SenaSoft!
    </voice>
</speak>`

3. [Endpoint](https://eastus.tts.speech.microsoft.com/cognitiveservices/v1)

4. [Docs microsoft](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/rest-text-to-speech?tabs=streaming#authentication)

### Reconocimiento de rostros

1. Headers:
    * Ocp-Apim-Subscription-Region: brazilsouth
    * Ocp-Apim-Subscription-Key: 770e8a742afa480f9f04c2a51a082a1b
    * Content-Type: application/json
2. Body: 
    `{
        "url":"url de la imagen"
    }`
3. [Endpoint](https://senasoft-cauca-faceapi.cognitiveservices.azure.com/face/v1.0/detect?detectionModel=detection_01)


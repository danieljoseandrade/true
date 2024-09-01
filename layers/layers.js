var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0 = new ol.format.GeoJSON();
var features_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0 = format_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0.readFeatures(json_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0.addFeatures(features_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0);var lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0 = new ol.layer.Vector({
                source:jsonSource_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0, 
                style: style_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0,
    title: 'Taxa de mortalidade infantil (óbitos de menores de 1 ano/1.000 nascidos vivos) por regiões - 2016<br />\
    <img src="styles/legend/Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0_0.png" /> 8.94<br />\
    <img src="styles/legend/Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0_1.png" /> 10.99<br />\
    <img src="styles/legend/Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0_2.png" /> 11.57<br />\
    <img src="styles/legend/Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0_3.png" /> 12.38<br />'
        });var format_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1 = new ol.format.GeoJSON();
var features_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1 = format_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1.readFeatures(json_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1.addFeatures(features_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1);var lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1 = new ol.layer.Vector({
                source:jsonSource_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1, 
                style: style_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1,
    title: 'Taxa de mortalidade infantil (óbitos de menores de 1 ano/1.000 nascidos vivos) - 2016<br />\
    <img src="styles/legend/Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1_0.png" />   0.00 - 6.78<br />\
    <img src="styles/legend/Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1_1.png" />   6.78 - 13.56<br />\
    <img src="styles/legend/Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1_2.png" />  13.56 - 20.34 <br />\
    <img src="styles/legend/Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1_3.png" />  20.34 - 27.12 <br />\
    <img src="styles/legend/Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1_4.png" />  27.12 - 33.90<br />'
        });var format_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2 = new ol.format.GeoJSON();
var features_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2 = format_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2.readFeatures(json_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2.addFeatures(features_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2);var lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2 = new ol.layer.Vector({
                source:jsonSource_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2, 
                style: style_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2,
    title: 'Taxa de mortalidade total por neoplasias (por 100 mil habitantes) por regiões - 2016<br />\
    <img src="styles/legend/Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2_0.png" /> 29.18<br />\
    <img src="styles/legend/Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2_1.png" /> 50.49<br />\
    <img src="styles/legend/Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2_2.png" /> 108.63<br />\
    <img src="styles/legend/Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2_3.png" /> 167.89<br />'
        });var format_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3 = new ol.format.GeoJSON();
var features_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3 = format_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3.readFeatures(json_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3.addFeatures(features_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3);var lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3 = new ol.layer.Vector({
                source:jsonSource_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3, 
                style: style_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3,
    title: 'Taxa de mortalidade total por neoplasias (por 100 mil habitantes) - 2016<br />\
    <img src="styles/legend/Taxademortalidadetotalporneoplasiaspor100milhabitantes_3_0.png" />     0.00 - 1522.41 <br />\
    <img src="styles/legend/Taxademortalidadetotalporneoplasiaspor100milhabitantes_3_1.png" />  1522.41 - 3045.82 <br />\
    <img src="styles/legend/Taxademortalidadetotalporneoplasiaspor100milhabitantes_3_2.png" />  3045.82 - 4567.22 <br />\
    <img src="styles/legend/Taxademortalidadetotalporneoplasiaspor100milhabitantes_3_3.png" />  4567.22 - 6090.63 <br />\
    <img src="styles/legend/Taxademortalidadetotalporneoplasiaspor100milhabitantes_3_4.png" />  6090.63 - 7612.04 <br />'
        });var format_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4 = new ol.format.GeoJSON();
var features_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4 = format_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4.readFeatures(json_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4.addFeatures(features_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4);var lyr_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4 = new ol.layer.Vector({
                source:jsonSource_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4, 
                style: style_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4,
    title: 'Taxa de mortalidade por doença do aparelho circulatório por regiões - 2016<br />\
    <img src="styles/legend/Taxademortalidadepordoenadoaparelhocirculatrioporregies_4_0.png" /> 126.38<br />\
    <img src="styles/legend/Taxademortalidadepordoenadoaparelhocirculatrioporregies_4_1.png" /> 141<br />\
    <img src="styles/legend/Taxademortalidadepordoenadoaparelhocirculatrioporregies_4_2.png" /> 189.46<br />\
    <img src="styles/legend/Taxademortalidadepordoenadoaparelhocirculatrioporregies_4_3.png" /> 195.65<br />'
        });var format_Taxademortalidadepordoenadoaparelhocirculatrio_5 = new ol.format.GeoJSON();
var features_Taxademortalidadepordoenadoaparelhocirculatrio_5 = format_Taxademortalidadepordoenadoaparelhocirculatrio_5.readFeatures(json_Taxademortalidadepordoenadoaparelhocirculatrio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxademortalidadepordoenadoaparelhocirculatrio_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Taxademortalidadepordoenadoaparelhocirculatrio_5.addFeatures(features_Taxademortalidadepordoenadoaparelhocirculatrio_5);var lyr_Taxademortalidadepordoenadoaparelhocirculatrio_5 = new ol.layer.Vector({
                source:jsonSource_Taxademortalidadepordoenadoaparelhocirculatrio_5, 
                style: style_Taxademortalidadepordoenadoaparelhocirculatrio_5,
    title: 'Taxa de mortalidade por doença do aparelho circulatório - 2016<br />\
    <img src="styles/legend/Taxademortalidadepordoenadoaparelhocirculatrio_5_0.png" />    0.00 - 127.99<br />\
    <img src="styles/legend/Taxademortalidadepordoenadoaparelhocirculatrio_5_1.png" />  127.99 - 175.23<br />\
    <img src="styles/legend/Taxademortalidadepordoenadoaparelhocirculatrio_5_2.png" />  175.23 - 222.48<br />\
    <img src="styles/legend/Taxademortalidadepordoenadoaparelhocirculatrio_5_3.png" />  222.48 - 269.72<br />\
    <img src="styles/legend/Taxademortalidadepordoenadoaparelhocirculatrio_5_4.png" />  269.72 - 316.96<br />'
        });var format_Taxademortalidadeporcausasexternasporregies_6 = new ol.format.GeoJSON();
var features_Taxademortalidadeporcausasexternasporregies_6 = format_Taxademortalidadeporcausasexternasporregies_6.readFeatures(json_Taxademortalidadeporcausasexternasporregies_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxademortalidadeporcausasexternasporregies_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Taxademortalidadeporcausasexternasporregies_6.addFeatures(features_Taxademortalidadeporcausasexternasporregies_6);var lyr_Taxademortalidadeporcausasexternasporregies_6 = new ol.layer.Vector({
                source:jsonSource_Taxademortalidadeporcausasexternasporregies_6, 
                style: style_Taxademortalidadeporcausasexternasporregies_6,
    title: 'Taxa de mortalidade por causas externas  por regiões - 2016<br />\
    <img src="styles/legend/Taxademortalidadeporcausasexternasporregies_6_0.png" /> 52.89<br />\
    <img src="styles/legend/Taxademortalidadeporcausasexternasporregies_6_1.png" /> 53.25<br />\
    <img src="styles/legend/Taxademortalidadeporcausasexternasporregies_6_2.png" /> 54.31<br />\
    <img src="styles/legend/Taxademortalidadeporcausasexternasporregies_6_3.png" /> 75.89<br />'
        });var format_Taxademortalidadeporcausasexternas_7 = new ol.format.GeoJSON();
var features_Taxademortalidadeporcausasexternas_7 = format_Taxademortalidadeporcausasexternas_7.readFeatures(json_Taxademortalidadeporcausasexternas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxademortalidadeporcausasexternas_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Taxademortalidadeporcausasexternas_7.addFeatures(features_Taxademortalidadeporcausasexternas_7);var lyr_Taxademortalidadeporcausasexternas_7 = new ol.layer.Vector({
                source:jsonSource_Taxademortalidadeporcausasexternas_7, 
                style: style_Taxademortalidadeporcausasexternas_7,
    title: 'Taxa de mortalidade por causas externas - 2016<br />\
    <img src="styles/legend/Taxademortalidadeporcausasexternas_7_0.png" />    0.00 - 32.26<br />\
    <img src="styles/legend/Taxademortalidadeporcausasexternas_7_1.png" />   32.26 - 64.53 <br />\
    <img src="styles/legend/Taxademortalidadeporcausasexternas_7_2.png" />   64.53 - 96.79<br />\
    <img src="styles/legend/Taxademortalidadeporcausasexternas_7_3.png" />   96.79 - 129.06 <br />\
    <img src="styles/legend/Taxademortalidadeporcausasexternas_7_4.png" />  129.06 - 161.32<br />'
        });var format_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8 = new ol.format.GeoJSON();
var features_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8 = format_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8.readFeatures(json_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8.addFeatures(features_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8);var lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8 = new ol.layer.Vector({
                source:jsonSource_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8, 
                style: style_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8,
    title: 'Percentual de nascidos vivos com 7 ou mais consultas de pré natal  por regiões - 2016<br />\
    <img src="styles/legend/Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8_0.png" /> 70.81<br />\
    <img src="styles/legend/Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8_1.png" /> 74.17<br />\
    <img src="styles/legend/Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8_2.png" /> 77.7<br />\
    <img src="styles/legend/Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8_3.png" /> 78.04<br />'
        });var format_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9 = new ol.format.GeoJSON();
var features_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9 = format_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9.readFeatures(json_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9.addFeatures(features_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9);var lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9 = new ol.layer.Vector({
                source:jsonSource_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9, 
                style: style_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9,
    title: 'Percentual de nascidos vivos com 7 ou mais consultas de pré natal - 2016<br />\
    <img src="styles/legend/Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9_0.png" />   0.00 - 56.96 <br />\
    <img src="styles/legend/Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9_1.png" />  56.96 - 65.27<br />\
    <img src="styles/legend/Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9_2.png" />  65.27 - 73.59 <br />\
    <img src="styles/legend/Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9_3.png" />  73.59 - 81.90 <br />\
    <img src="styles/legend/Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9_4.png" />  81.90 - 90.21 <br />'
        });var format_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10 = new ol.format.GeoJSON();
var features_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10 = format_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10.readFeatures(json_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10.addFeatures(features_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10);var lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10 = new ol.layer.Vector({
                source:jsonSource_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10, 
                style: style_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10,
    title: 'Percentual nascidos vivos com baixo peso ao nascer (menor que 2.5kg)  por regiões - 2016<br />\
    <img src="styles/legend/Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10_0.png" /> 7.95<br />\
    <img src="styles/legend/Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10_1.png" /> 8.28<br />\
    <img src="styles/legend/Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10_2.png" /> 8.63<br />\
    <img src="styles/legend/Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10_3.png" /> 8.66<br />'
        });var format_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11 = new ol.format.GeoJSON();
var features_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11 = format_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11.readFeatures(json_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11.addFeatures(features_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11);var lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11 = new ol.layer.Vector({
                source:jsonSource_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11, 
                style: style_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11,
    title: 'Percentual nascidos vivos com baixo peso ao nascer (menor que 2.5kg) - 2016<br />\
    <img src="styles/legend/Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11_0.png" />   0.00 - 2.93 <br />\
    <img src="styles/legend/Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11_1.png" />   2.93 - 5.85<br />\
    <img src="styles/legend/Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11_2.png" />   5.85 - 8.78 <br />\
    <img src="styles/legend/Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11_3.png" />   8.78 - 11.70 <br />\
    <img src="styles/legend/Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11_4.png" />  11.70 - 14.63 <br />'
        });var format_Percentualnascidosvivosdemescommenosde20anosporregies_12 = new ol.format.GeoJSON();
var features_Percentualnascidosvivosdemescommenosde20anosporregies_12 = format_Percentualnascidosvivosdemescommenosde20anosporregies_12.readFeatures(json_Percentualnascidosvivosdemescommenosde20anosporregies_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentualnascidosvivosdemescommenosde20anosporregies_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Percentualnascidosvivosdemescommenosde20anosporregies_12.addFeatures(features_Percentualnascidosvivosdemescommenosde20anosporregies_12);var lyr_Percentualnascidosvivosdemescommenosde20anosporregies_12 = new ol.layer.Vector({
                source:jsonSource_Percentualnascidosvivosdemescommenosde20anosporregies_12, 
                style: style_Percentualnascidosvivosdemescommenosde20anosporregies_12,
    title: 'Percentual nascidos vivos de mães com menos de 20 anos  por regiões - 2016<br />\
    <img src="styles/legend/Percentualnascidosvivosdemescommenosde20anosporregies_12_0.png" /> 11.97<br />\
    <img src="styles/legend/Percentualnascidosvivosdemescommenosde20anosporregies_12_1.png" /> 14.09<br />\
    <img src="styles/legend/Percentualnascidosvivosdemescommenosde20anosporregies_12_2.png" /> 14.33<br />\
    <img src="styles/legend/Percentualnascidosvivosdemescommenosde20anosporregies_12_3.png" /> 14.82<br />'
        });var format_Percentualnascidosvivosdemescommenosde20anos_13 = new ol.format.GeoJSON();
var features_Percentualnascidosvivosdemescommenosde20anos_13 = format_Percentualnascidosvivosdemescommenosde20anos_13.readFeatures(json_Percentualnascidosvivosdemescommenosde20anos_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentualnascidosvivosdemescommenosde20anos_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Percentualnascidosvivosdemescommenosde20anos_13.addFeatures(features_Percentualnascidosvivosdemescommenosde20anos_13);var lyr_Percentualnascidosvivosdemescommenosde20anos_13 = new ol.layer.Vector({
                source:jsonSource_Percentualnascidosvivosdemescommenosde20anos_13, 
                style: style_Percentualnascidosvivosdemescommenosde20anos_13,
    title: 'Percentual nascidos vivos de mães com menos de 20 anos - 2016<br />\
    <img src="styles/legend/Percentualnascidosvivosdemescommenosde20anos_13_0.png" />   0.00 - 13.02 <br />\
    <img src="styles/legend/Percentualnascidosvivosdemescommenosde20anos_13_1.png" />  13.02 - 16.17 <br />\
    <img src="styles/legend/Percentualnascidosvivosdemescommenosde20anos_13_2.png" />  16.17 - 19.33 <br />\
    <img src="styles/legend/Percentualnascidosvivosdemescommenosde20anos_13_3.png" />  19.33 - 22.48 <br />\
    <img src="styles/legend/Percentualnascidosvivosdemescommenosde20anos_13_4.png" />  22.48 - 25.64<br />'
        });var format_LeitosSUSpor1000habitantesporregies_14 = new ol.format.GeoJSON();
var features_LeitosSUSpor1000habitantesporregies_14 = format_LeitosSUSpor1000habitantesporregies_14.readFeatures(json_LeitosSUSpor1000habitantesporregies_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeitosSUSpor1000habitantesporregies_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LeitosSUSpor1000habitantesporregies_14.addFeatures(features_LeitosSUSpor1000habitantesporregies_14);var lyr_LeitosSUSpor1000habitantesporregies_14 = new ol.layer.Vector({
                source:jsonSource_LeitosSUSpor1000habitantesporregies_14, 
                style: style_LeitosSUSpor1000habitantesporregies_14,
    title: 'Leitos SUS por 1000 habitantes  por regiões - 2016<br />\
    <img src="styles/legend/LeitosSUSpor1000habitantesporregies_14_0.png" /> 0.98<br />\
    <img src="styles/legend/LeitosSUSpor1000habitantesporregies_14_1.png" /> 1.00<br />\
    <img src="styles/legend/LeitosSUSpor1000habitantesporregies_14_2.png" /> 1.06<br />\
    <img src="styles/legend/LeitosSUSpor1000habitantesporregies_14_3.png" /> 1.13<br />'
        });var format_LeitosSUSpor1000habitantes_15 = new ol.format.GeoJSON();
var features_LeitosSUSpor1000habitantes_15 = format_LeitosSUSpor1000habitantes_15.readFeatures(json_LeitosSUSpor1000habitantes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeitosSUSpor1000habitantes_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LeitosSUSpor1000habitantes_15.addFeatures(features_LeitosSUSpor1000habitantes_15);var lyr_LeitosSUSpor1000habitantes_15 = new ol.layer.Vector({
                source:jsonSource_LeitosSUSpor1000habitantes_15, 
                style: style_LeitosSUSpor1000habitantes_15,
    title: 'Leitos SUS por 1000 habitantes - 2016<br />\
    <img src="styles/legend/LeitosSUSpor1000habitantes_15_0.png" />  0.00 - 0.77<br />\
    <img src="styles/legend/LeitosSUSpor1000habitantes_15_1.png" />  0.77 - 1.53 <br />\
    <img src="styles/legend/LeitosSUSpor1000habitantes_15_2.png" />  1.53 - 2.30<br />\
    <img src="styles/legend/LeitosSUSpor1000habitantes_15_3.png" />  2.30 - 3.06<br />\
    <img src="styles/legend/LeitosSUSpor1000habitantes_15_4.png" />  3.06 - 3.83 <br />'
        });var format_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16 = new ol.format.GeoJSON();
var features_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16 = format_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16.readFeatures(json_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16.addFeatures(features_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16);var lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16 = new ol.layer.Vector({
                source:jsonSource_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16, 
                style: style_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16,
    title: 'Percentual da população coberta por equipes de atenção básica (SUS) por regiões - 2016<br />\
    <img src="styles/legend/PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16_0.png" /> 86.6<br />\
    <img src="styles/legend/PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16_1.png" /> 87.55<br />\
    <img src="styles/legend/PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16_2.png" /> 88.7<br />\
    <img src="styles/legend/PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16_3.png" /> 103.83<br />'
        });var format_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17 = new ol.format.GeoJSON();
var features_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17 = format_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17.readFeatures(json_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17.addFeatures(features_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17);var lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17 = new ol.layer.Vector({
                source:jsonSource_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17, 
                style: style_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17,
    title: 'Percentual da população coberta por equipes de atenção básica (SUS) - 2016<br />\
    <img src="styles/legend/PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17_0.png" />    0.00 - 127.62 <br />\
    <img src="styles/legend/PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17_1.png" />  127.62 - 212.42 <br />\
    <img src="styles/legend/PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17_2.png" />  212.42 - 297.21 <br />\
    <img src="styles/legend/PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17_3.png" />  297.21 - 382.01 <br />\
    <img src="styles/legend/PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17_4.png" />  382.01 - 466.80 <br />'
        });var format_Percentualdapopulaocomplanodesadeporregies_18 = new ol.format.GeoJSON();
var features_Percentualdapopulaocomplanodesadeporregies_18 = format_Percentualdapopulaocomplanodesadeporregies_18.readFeatures(json_Percentualdapopulaocomplanodesadeporregies_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentualdapopulaocomplanodesadeporregies_18 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Percentualdapopulaocomplanodesadeporregies_18.addFeatures(features_Percentualdapopulaocomplanodesadeporregies_18);var lyr_Percentualdapopulaocomplanodesadeporregies_18 = new ol.layer.Vector({
                source:jsonSource_Percentualdapopulaocomplanodesadeporregies_18, 
                style: style_Percentualdapopulaocomplanodesadeporregies_18,
    title: 'Percentual da população com plano de saúde por regiões - 2016<br />\
    <img src="styles/legend/Percentualdapopulaocomplanodesadeporregies_18_0.png" /> 17.96<br />\
    <img src="styles/legend/Percentualdapopulaocomplanodesadeporregies_18_1.png" /> 22.77<br />\
    <img src="styles/legend/Percentualdapopulaocomplanodesadeporregies_18_2.png" /> 28.57<br />\
    <img src="styles/legend/Percentualdapopulaocomplanodesadeporregies_18_3.png" /> 45.03<br />'
        });var format_Percentualdapopulaocomplanodesade_19 = new ol.format.GeoJSON();
var features_Percentualdapopulaocomplanodesade_19 = format_Percentualdapopulaocomplanodesade_19.readFeatures(json_Percentualdapopulaocomplanodesade_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Percentualdapopulaocomplanodesade_19 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Percentualdapopulaocomplanodesade_19.addFeatures(features_Percentualdapopulaocomplanodesade_19);var lyr_Percentualdapopulaocomplanodesade_19 = new ol.layer.Vector({
                source:jsonSource_Percentualdapopulaocomplanodesade_19, 
                style: style_Percentualdapopulaocomplanodesade_19,
    title: 'Percentual da população com plano de saúde - 2016<br />\
    <img src="styles/legend/Percentualdapopulaocomplanodesade_19_0.png" />   0.00 - 12.80 <br />\
    <img src="styles/legend/Percentualdapopulaocomplanodesade_19_1.png" />  12.80 - 21.64<br />\
    <img src="styles/legend/Percentualdapopulaocomplanodesade_19_2.png" />  21.64 - 30.48 <br />\
    <img src="styles/legend/Percentualdapopulaocomplanodesade_19_3.png" />  30.48 - 39.32<br />\
    <img src="styles/legend/Percentualdapopulaocomplanodesade_19_4.png" />  39.32 - 48.16 <br />'
        });var format_DespesaemsadepercapitaRmdiaporregies_20 = new ol.format.GeoJSON();
var features_DespesaemsadepercapitaRmdiaporregies_20 = format_DespesaemsadepercapitaRmdiaporregies_20.readFeatures(json_DespesaemsadepercapitaRmdiaporregies_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DespesaemsadepercapitaRmdiaporregies_20 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DespesaemsadepercapitaRmdiaporregies_20.addFeatures(features_DespesaemsadepercapitaRmdiaporregies_20);var lyr_DespesaemsadepercapitaRmdiaporregies_20 = new ol.layer.Vector({
                source:jsonSource_DespesaemsadepercapitaRmdiaporregies_20, 
                style: style_DespesaemsadepercapitaRmdiaporregies_20,
    title: 'Despesa em saúde per capita (R$) por regiões - 2016<br />\
    <img src="styles/legend/DespesaemsadepercapitaRmdiaporregies_20_0.png" /> R$ 619,14<br />\
    <img src="styles/legend/DespesaemsadepercapitaRmdiaporregies_20_1.png" /> R$ 640,38<br />\
    <img src="styles/legend/DespesaemsadepercapitaRmdiaporregies_20_2.png" /> R$ 831,86<br />\
    <img src="styles/legend/DespesaemsadepercapitaRmdiaporregies_20_3.png" /> R$ 1.114,28<br />'
        });var format_DespesaemsadepercapitaR_21 = new ol.format.GeoJSON();
var features_DespesaemsadepercapitaR_21 = format_DespesaemsadepercapitaR_21.readFeatures(json_DespesaemsadepercapitaR_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DespesaemsadepercapitaR_21 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DespesaemsadepercapitaR_21.addFeatures(features_DespesaemsadepercapitaR_21);var lyr_DespesaemsadepercapitaR_21 = new ol.layer.Vector({
                source:jsonSource_DespesaemsadepercapitaR_21, 
                style: style_DespesaemsadepercapitaR_21,
    title: 'Despesa em saúde per capita (R$) - 2016<br />\
    <img src="styles/legend/DespesaemsadepercapitaR_21_0.png" /> R$   000,00 - R$   585,06 <br />\
    <img src="styles/legend/DespesaemsadepercapitaR_21_1.png" /> R$   585,06 - R$   840,92 <br />\
    <img src="styles/legend/DespesaemsadepercapitaR_21_2.png" /> R$   840,92 - R$ 1.096,79 <br />\
    <img src="styles/legend/DespesaemsadepercapitaR_21_3.png" /> R$ 1.096,79 - R$ 1.352,65 <br />\
    <img src="styles/legend/DespesaemsadepercapitaR_21_4.png" /> R$ 1.352,65 - R$ 1.608,51 <br />'
        });var format_Regiesdelimitadasporcritriosdareadasade_22 = new ol.format.GeoJSON();
var features_Regiesdelimitadasporcritriosdareadasade_22 = format_Regiesdelimitadasporcritriosdareadasade_22.readFeatures(json_Regiesdelimitadasporcritriosdareadasade_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regiesdelimitadasporcritriosdareadasade_22 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Regiesdelimitadasporcritriosdareadasade_22.addFeatures(features_Regiesdelimitadasporcritriosdareadasade_22);var lyr_Regiesdelimitadasporcritriosdareadasade_22 = new ol.layer.Vector({
                source:jsonSource_Regiesdelimitadasporcritriosdareadasade_22, 
                style: style_Regiesdelimitadasporcritriosdareadasade_22,
    title: 'Regiões delimitadas por critérios da área da saúde<br />\
    <img src="styles/legend/Regiesdelimitadasporcritriosdareadasade_22_0.png" /> Alto Paraíba<br />\
    <img src="styles/legend/Regiesdelimitadasporcritriosdareadasade_22_1.png" /> Circuito da Fé e Vale Histórico<br />\
    <img src="styles/legend/Regiesdelimitadasporcritriosdareadasade_22_2.png" /> Litoral Norte<br />\
    <img src="styles/legend/Regiesdelimitadasporcritriosdareadasade_22_3.png" /> Vale do Paraíba e Região Serrana<br />'
        });var format_Tipologiadosmunicpiosnareadasade_23 = new ol.format.GeoJSON();
var features_Tipologiadosmunicpiosnareadasade_23 = format_Tipologiadosmunicpiosnareadasade_23.readFeatures(json_Tipologiadosmunicpiosnareadasade_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tipologiadosmunicpiosnareadasade_23 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Tipologiadosmunicpiosnareadasade_23.addFeatures(features_Tipologiadosmunicpiosnareadasade_23);var lyr_Tipologiadosmunicpiosnareadasade_23 = new ol.layer.Vector({
                source:jsonSource_Tipologiadosmunicpiosnareadasade_23, 
                style: style_Tipologiadosmunicpiosnareadasade_23,
    title: 'Tipologia dos municípios na área da saúde<br />\
    <img src="styles/legend/Tipologiadosmunicpiosnareadasade_23_0.png" /> Não classificado<br />\
    <img src="styles/legend/Tipologiadosmunicpiosnareadasade_23_1.png" /> Tipo 1<br />\
    <img src="styles/legend/Tipologiadosmunicpiosnareadasade_23_2.png" /> Tipo 2<br />\
    <img src="styles/legend/Tipologiadosmunicpiosnareadasade_23_3.png" /> Tipo 3<br />\
    <img src="styles/legend/Tipologiadosmunicpiosnareadasade_23_4.png" /> Tipo 4<br />'
        });var format_Sedes_municipais_24 = new ol.format.GeoJSON();
var features_Sedes_municipais_24 = format_Sedes_municipais_24.readFeatures(json_Sedes_municipais_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sedes_municipais_24 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Sedes_municipais_24.addFeatures(features_Sedes_municipais_24);var lyr_Sedes_municipais_24 = new ol.layer.Vector({
                source:jsonSource_Sedes_municipais_24, 
                style: style_Sedes_municipais_24,
                title: '<img src="styles/legend/Sedes_municipais_24.png" /> Sedes municipais'
            });

lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0.setVisible(false);lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1.setVisible(false);lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2.setVisible(false);lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3.setVisible(false);lyr_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4.setVisible(false);lyr_Taxademortalidadepordoenadoaparelhocirculatrio_5.setVisible(false);lyr_Taxademortalidadeporcausasexternasporregies_6.setVisible(false);lyr_Taxademortalidadeporcausasexternas_7.setVisible(false);lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8.setVisible(false);lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9.setVisible(false);lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10.setVisible(false);lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11.setVisible(false);lyr_Percentualnascidosvivosdemescommenosde20anosporregies_12.setVisible(false);lyr_Percentualnascidosvivosdemescommenosde20anos_13.setVisible(false);lyr_LeitosSUSpor1000habitantesporregies_14.setVisible(false);lyr_LeitosSUSpor1000habitantes_15.setVisible(false);lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16.setVisible(false);lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17.setVisible(false);lyr_Percentualdapopulaocomplanodesadeporregies_18.setVisible(false);lyr_Percentualdapopulaocomplanodesade_19.setVisible(false);lyr_DespesaemsadepercapitaRmdiaporregies_20.setVisible(false);lyr_DespesaemsadepercapitaR_21.setVisible(false);lyr_Regiesdelimitadasporcritriosdareadasade_22.setVisible(false);lyr_Tipologiadosmunicpiosnareadasade_23.setVisible(true);lyr_Sedes_municipais_24.setVisible(true);
var layersList = [baseLayer,lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0,lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1,lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2,lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3,lyr_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4,lyr_Taxademortalidadepordoenadoaparelhocirculatrio_5,lyr_Taxademortalidadeporcausasexternasporregies_6,lyr_Taxademortalidadeporcausasexternas_7,lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8,lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9,lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10,lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11,lyr_Percentualnascidosvivosdemescommenosde20anosporregies_12,lyr_Percentualnascidosvivosdemescommenosde20anos_13,lyr_LeitosSUSpor1000habitantesporregies_14,lyr_LeitosSUSpor1000habitantes_15,lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16,lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17,lyr_Percentualdapopulaocomplanodesadeporregies_18,lyr_Percentualdapopulaocomplanodesade_19,lyr_DespesaemsadepercapitaRmdiaporregies_20,lyr_DespesaemsadepercapitaR_21,lyr_Regiesdelimitadasporcritriosdareadasade_22,lyr_Tipologiadosmunicpiosnareadasade_23,lyr_Sedes_municipais_24];
lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'Taxa mortalidade infantil óbitos de menores de 1 ano/1000 nascidos vivos', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'REgiões_9', 'REgiões10': 'REgiões10', 'REgiões11': 'REgiões11', });
lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Taxa mortalidade infantil óbitos de menores de 1 ano/1000 nascidos vivos', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Saude Mu11', });
lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'Taxa mortalidade total por neoplasias por 100mil hab.', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'REgiões_9', 'REgiões10': 'REgiões10', 'REgiões11': 'REgiões11', });
lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Taxa mortalidade total por neoplasias por 100mil hab.', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Saude Mu11', });
lyr_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'Taxa mortalidade por doença do aparelho circulatório', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'REgiões_9', 'REgiões10': 'REgiões10', 'REgiões11': 'REgiões11', });
lyr_Taxademortalidadepordoenadoaparelhocirculatrio_5.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Taxa mortalidade por doença do aparelho circulatório', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Saude Mu11', });
lyr_Taxademortalidadeporcausasexternasporregies_6.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'Taxa mortalidade por causas externas', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'REgiões_9', 'REgiões10': 'REgiões10', 'REgiões11': 'REgiões11', });
lyr_Taxademortalidadeporcausasexternas_7.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Taxa mortalidade por causas externas', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Saude Mu11', });
lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'Percentual nascidos vivos com 7 ou mais consultas pré-natal', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'REgiões_9', 'REgiões10': 'REgiões10', 'REgiões11': 'REgiões11', });
lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Percentual nascidos vivos com 7 ou mais consultas pré-natal', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Saude Mu11', });
lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'Percentual nascidos vivos com baixo peso ao nascer (menor que 2,5kg)', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'REgiões_9', 'REgiões10': 'REgiões10', 'REgiões11': 'REgiões11', });
lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Percentual nascidos vivos com baixo peso ao nascer (menor que 2,5kg)', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Saude Mu11', });
lyr_Percentualnascidosvivosdemescommenosde20anosporregies_12.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'Percentual nascidos vivos de mães com menos de 20 anos', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'REgiões_9', 'REgiões10': 'REgiões10', 'REgiões11': 'REgiões11', });
lyr_Percentualnascidosvivosdemescommenosde20anos_13.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Percentual nascidos vivos de mães com menos de 20 anos', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Saude Mu11', });
lyr_LeitosSUSpor1000habitantesporregies_14.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'Leitos SUS por 1000 hab.', 'REgiões_9': 'REgiões_9', 'REgiões10': 'REgiões10', 'REgiões11': 'REgiões11', });
lyr_LeitosSUSpor1000habitantes_15.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Leitos SUS por 1000 hab.', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Saude Mu11', });
lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'Percentual da população coberta por equipes de atenção básica SUS', 'REgiões10': 'REgiões10', 'REgiões11': 'REgiões11', });
lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Percentual da população coberta por equipes de atenção básica SUS', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Saude Mu11', });
lyr_Percentualdapopulaocomplanodesadeporregies_18.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'REgiões_9', 'REgiões10': 'Percentual da população com plano de saúde', 'REgiões11': 'REgiões11', });
lyr_Percentualdapopulaocomplanodesade_19.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Percentual da população com plano de saúde', 'Saude Mu11': 'Saude Mu11', });
lyr_DespesaemsadepercapitaRmdiaporregies_20.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'REgiões_9', 'REgiões10': 'REgiões10', 'REgiões11': 'Despesa em saúde percapita (R$)', });
lyr_DespesaemsadepercapitaR_21.set('fieldAliases', {'Municipio': 'Municipio', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Despesa em saúde percapita (R$)', });
lyr_Regiesdelimitadasporcritriosdareadasade_22.set('fieldAliases', {'CodigoIBGE': 'CodigoIBGE', 'Reg_Saude': 'Regiões área da saúde', 'REgiões R': 'REgiões R', 'REgiões_1': 'REgiões_1', 'REgiões_2': 'REgiões_2', 'REgiões_3': 'REgiões_3', 'REgiões_4': 'REgiões_4', 'REgiões_5': 'REgiões_5', 'REgiões_6': 'REgiões_6', 'REgiões_7': 'REgiões_7', 'REgiões_8': 'REgiões_8', 'REgiões_9': 'REgiões_9', 'REgiões10': 'REgiões10', 'REgiões11': 'REgiões11', });
lyr_Tipologiadosmunicpiosnareadasade_23.set('fieldAliases', {'Municipio': 'Município', 'CodigoIBGE': 'CodigoIBGE', 'RegGoverno': 'RegGoverno', 'SuRegioes': 'Regiões área da saúde', 'Tipologia': 'Tipologia', 'Saude Mu_1': 'Saude Mu_1', 'Saude Mu_2': 'Saude Mu_2', 'Saude Mu_3': 'Saude Mu_3', 'Saude Mu_4': 'Saude Mu_4', 'Saude Mu_5': 'Saude Mu_5', 'Saude Mu_6': 'Saude Mu_6', 'Saude Mu_7': 'Saude Mu_7', 'Saude Mu_8': 'Saude Mu_8', 'Saude Mu_9': 'Saude Mu_9', 'Saude Mu10': 'Saude Mu10', 'Saude Mu11': 'Saude Mu11', });
lyr_Sedes_municipais_24.set('fieldAliases', {'Municipio': 'Municipio', });
lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'TextEdit', 'REgiões_2': 'Hidden', 'REgiões_3': 'Hidden', 'REgiões_4': 'Hidden', 'REgiões_5': 'Hidden', 'REgiões_6': 'Hidden', 'REgiões_7': 'Hidden', 'REgiões_8': 'Hidden', 'REgiões_9': 'Hidden', 'REgiões10': 'Hidden', 'REgiões11': 'Hidden', });
lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'TextEdit', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'Hidden', });
lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'TextEdit', 'REgiões_3': 'Hidden', 'REgiões_4': 'Hidden', 'REgiões_5': 'Hidden', 'REgiões_6': 'Hidden', 'REgiões_7': 'Hidden', 'REgiões_8': 'Hidden', 'REgiões_9': 'Hidden', 'REgiões10': 'Hidden', 'REgiões11': 'Hidden', });
lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'TextEdit', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'Hidden', });
lyr_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'Hidden', 'REgiões_3': 'TextEdit', 'REgiões_4': 'Hidden', 'REgiões_5': 'Hidden', 'REgiões_6': 'Hidden', 'REgiões_7': 'Hidden', 'REgiões_8': 'Hidden', 'REgiões_9': 'Hidden', 'REgiões10': 'Hidden', 'REgiões11': 'Hidden', });
lyr_Taxademortalidadepordoenadoaparelhocirculatrio_5.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'TextEdit', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'Hidden', });
lyr_Taxademortalidadeporcausasexternasporregies_6.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'Hidden', 'REgiões_3': 'Hidden', 'REgiões_4': 'TextEdit', 'REgiões_5': 'Hidden', 'REgiões_6': 'Hidden', 'REgiões_7': 'Hidden', 'REgiões_8': 'Hidden', 'REgiões_9': 'Hidden', 'REgiões10': 'Hidden', 'REgiões11': 'Hidden', });
lyr_Taxademortalidadeporcausasexternas_7.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'TextEdit', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'Hidden', });
lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'Hidden', 'REgiões_3': 'Hidden', 'REgiões_4': 'Hidden', 'REgiões_5': 'TextEdit', 'REgiões_6': 'Hidden', 'REgiões_7': 'Hidden', 'REgiões_8': 'Hidden', 'REgiões_9': 'Hidden', 'REgiões10': 'Hidden', 'REgiões11': 'Hidden', });
lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'TextEdit', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'Hidden', });
lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'Hidden', 'REgiões_3': 'Hidden', 'REgiões_4': 'Hidden', 'REgiões_5': 'Hidden', 'REgiões_6': 'TextEdit', 'REgiões_7': 'Hidden', 'REgiões_8': 'Hidden', 'REgiões_9': 'Hidden', 'REgiões10': 'Hidden', 'REgiões11': 'Hidden', });
lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'TextEdit', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'Hidden', });
lyr_Percentualnascidosvivosdemescommenosde20anosporregies_12.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'Hidden', 'REgiões_3': 'Hidden', 'REgiões_4': 'Hidden', 'REgiões_5': 'Hidden', 'REgiões_6': 'Hidden', 'REgiões_7': 'TextEdit', 'REgiões_8': 'Hidden', 'REgiões_9': 'Hidden', 'REgiões10': 'Hidden', 'REgiões11': 'Hidden', });
lyr_Percentualnascidosvivosdemescommenosde20anos_13.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'TextEdit', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'Hidden', });
lyr_LeitosSUSpor1000habitantesporregies_14.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'Hidden', 'REgiões_3': 'Hidden', 'REgiões_4': 'Hidden', 'REgiões_5': 'Hidden', 'REgiões_6': 'Hidden', 'REgiões_7': 'Hidden', 'REgiões_8': 'TextEdit', 'REgiões_9': 'Hidden', 'REgiões10': 'Hidden', 'REgiões11': 'Hidden', });
lyr_LeitosSUSpor1000habitantes_15.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'TextEdit', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'Hidden', });
lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'Hidden', 'REgiões_3': 'Hidden', 'REgiões_4': 'Hidden', 'REgiões_5': 'Hidden', 'REgiões_6': 'Hidden', 'REgiões_7': 'Hidden', 'REgiões_8': 'Hidden', 'REgiões_9': 'TextEdit', 'REgiões10': 'Hidden', 'REgiões11': 'Hidden', });
lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'TextEdit', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'Hidden', });
lyr_Percentualdapopulaocomplanodesadeporregies_18.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'Hidden', 'REgiões_3': 'Hidden', 'REgiões_4': 'Hidden', 'REgiões_5': 'Hidden', 'REgiões_6': 'Hidden', 'REgiões_7': 'Hidden', 'REgiões_8': 'Hidden', 'REgiões_9': 'Hidden', 'REgiões10': 'TextEdit', 'REgiões11': 'Hidden', });
lyr_Percentualdapopulaocomplanodesade_19.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'TextEdit', 'Saude Mu11': 'Hidden', });
lyr_DespesaemsadepercapitaRmdiaporregies_20.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'Hidden', 'REgiões_3': 'Hidden', 'REgiões_4': 'Hidden', 'REgiões_5': 'Hidden', 'REgiões_6': 'Hidden', 'REgiões_7': 'Hidden', 'REgiões_8': 'Hidden', 'REgiões_9': 'Hidden', 'REgiões10': 'Hidden', 'REgiões11': 'TextEdit', });
lyr_DespesaemsadepercapitaR_21.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'TextEdit', });
lyr_Regiesdelimitadasporcritriosdareadasade_22.set('fieldImages', {'CodigoIBGE': 'Hidden', 'Reg_Saude': 'TextEdit', 'REgiões R': 'Hidden', 'REgiões_1': 'Hidden', 'REgiões_2': 'Hidden', 'REgiões_3': 'Hidden', 'REgiões_4': 'Hidden', 'REgiões_5': 'Hidden', 'REgiões_6': 'Hidden', 'REgiões_7': 'Hidden', 'REgiões_8': 'Hidden', 'REgiões_9': 'Hidden', 'REgiões10': 'Hidden', 'REgiões11': 'Hidden', });
lyr_Tipologiadosmunicpiosnareadasade_23.set('fieldImages', {'Municipio': 'TextEdit', 'CodigoIBGE': 'Hidden', 'RegGoverno': 'Hidden', 'SuRegioes': 'TextEdit', 'Tipologia': 'TextEdit', 'Saude Mu_1': 'Hidden', 'Saude Mu_2': 'Hidden', 'Saude Mu_3': 'Hidden', 'Saude Mu_4': 'Hidden', 'Saude Mu_5': 'Hidden', 'Saude Mu_6': 'Hidden', 'Saude Mu_7': 'Hidden', 'Saude Mu_8': 'Hidden', 'Saude Mu_9': 'Hidden', 'Saude Mu10': 'Hidden', 'Saude Mu11': 'Hidden', });
lyr_Sedes_municipais_24.set('fieldImages', {'Municipio': 'Hidden', });
lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivosporregies_0.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões_1': 'header label', });
lyr_Taxademortalidadeinfantilbitosdemenoresde1ano1000nascidosvivos_1.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu_1': 'header label', });
lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantesporregies_2.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões_2': 'header label', });
lyr_Taxademortalidadetotalporneoplasiaspor100milhabitantes_3.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu_2': 'header label', });
lyr_Taxademortalidadepordoenadoaparelhocirculatrioporregies_4.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões_3': 'header label', });
lyr_Taxademortalidadepordoenadoaparelhocirculatrio_5.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu_3': 'header label', });
lyr_Taxademortalidadeporcausasexternasporregies_6.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões_4': 'header label', });
lyr_Taxademortalidadeporcausasexternas_7.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu_4': 'header label', });
lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatalporregies_8.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões_5': 'header label', });
lyr_Percentualdenascidosvivoscom7oumaisconsultasdeprnatal_9.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu_5': 'header label', });
lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kgporregies_10.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões_6': 'header label', });
lyr_Percentualnascidosvivoscombaixopesaoaonascermenorque25kg_11.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu_6': 'header label', });
lyr_Percentualnascidosvivosdemescommenosde20anosporregies_12.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões_7': 'header label', });
lyr_Percentualnascidosvivosdemescommenosde20anos_13.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu_7': 'header label', });
lyr_LeitosSUSpor1000habitantesporregies_14.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões_8': 'header label', });
lyr_LeitosSUSpor1000habitantes_15.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu_8': 'header label', });
lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUSporregies_16.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões_9': 'header label', });
lyr_PercentualdapopulaocobertaporequipesdeatenobsicaSUS_17.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu_9': 'header label', });
lyr_Percentualdapopulaocomplanodesadeporregies_18.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões10': 'header label', });
lyr_Percentualdapopulaocomplanodesade_19.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu10': 'header label', });
lyr_DespesaemsadepercapitaRmdiaporregies_20.set('fieldLabels', {'Reg_Saude': 'header label', 'REgiões11': 'header label', });
lyr_DespesaemsadepercapitaR_21.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', 'Saude Mu11': 'header label', });
lyr_Regiesdelimitadasporcritriosdareadasade_22.set('fieldLabels', {'Reg_Saude': 'header label', });
lyr_Tipologiadosmunicpiosnareadasade_23.set('fieldLabels', {'Municipio': 'header label', 'SuRegioes': 'header label', 'Tipologia': 'header label', });
lyr_Sedes_municipais_24.set('fieldLabels', {});
lyr_Sedes_municipais_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_Sedes_municipais_24.on("postcompose", update);

    var listenerKey = lyr_Sedes_municipais_24.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });
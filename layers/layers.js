var wms_layers = [];


        var lyr_Fondo_0 = new ol.layer.Tile({
            'title': 'Fondo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_CIERRES_1 = new ol.format.GeoJSON();
var features_CIERRES_1 = format_CIERRES_1.readFeatures(json_CIERRES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CIERRES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CIERRES_1.addFeatures(features_CIERRES_1);
var lyr_CIERRES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CIERRES_1, 
                style: style_CIERRES_1,
                interactive: true,
    title: 'CIERRES<br />\
    <img src="styles/legend/CIERRES_1_0.png" /> CARGUE Y DESCARGUE DE MATERIALES<br />\
    <img src="styles/legend/CIERRES_1_1.png" /> MANTENIMIENTO Y OTRAS ACTIVIDADES<br />\
    <img src="styles/legend/CIERRES_1_2.png" /> OBRA CON ROTURA DE PAVIMENTO<br />'
        });
var format_PMT_2 = new ol.format.GeoJSON();
var features_PMT_2 = format_PMT_2.readFeatures(json_PMT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PMT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMT_2.addFeatures(features_PMT_2);
var lyr_PMT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PMT_2, 
                style: style_PMT_2,
                interactive: true,
    title: 'PMT<br />\
    <img src="styles/legend/PMT_2_0.png" /> CARGUE Y DESCARGUE DE MATERIALES<br />\
    <img src="styles/legend/PMT_2_1.png" /> CIERRE DE VIA POR EVENTO<br />\
    <img src="styles/legend/PMT_2_2.png" /> EVENTO ESTATICO<br />\
    <img src="styles/legend/PMT_2_3.png" /> MANTENIMIENTO Y OTRAS ACTIVIDADES<br />\
    <img src="styles/legend/PMT_2_4.png" /> OBRA CON ROTURA DE PAVIMENTO<br />\
    <img src="styles/legend/PMT_2_5.png" /> <br />'
        });

lyr_Fondo_0.setVisible(true);lyr_CIERRES_1.setVisible(true);lyr_PMT_2.setVisible(true);
var layersList = [lyr_Fondo_0,lyr_CIERRES_1,lyr_PMT_2];
lyr_CIERRES_1.set('fieldAliases', {'Name': 'Name', 'INICIO': 'INICIO', 'FIN': 'FIN', 'DIRECCION': 'DIRECCION', 'TIPO DE CIERRE': 'TIPO DE CIERRE', 'SOLICITANTE': 'SOLICITANTE', 'ACTIVIDAD': 'ACTIVIDAD', 'REV_CAMPO': 'REV_CAMPO', });
lyr_PMT_2.set('fieldAliases', {'Name': 'Name', 'INICIO': 'INICIO', 'FIN': 'FIN', 'DIRECCION': 'DIRECCION', 'TIPO DE CIERRE': 'TIPO DE CIERRE', 'SOLICITANTE': 'SOLICITANTE', 'ACTIVIDAD': 'ACTIVIDAD', 'REV_CAMPO': 'REV_CAMPO', });
lyr_CIERRES_1.set('fieldImages', {'Name': 'TextEdit', 'INICIO': 'TextEdit', 'FIN': 'TextEdit', 'DIRECCION': 'TextEdit', 'TIPO DE CIERRE': 'TextEdit', 'SOLICITANTE': 'TextEdit', 'ACTIVIDAD': 'TextEdit', 'REV_CAMPO': 'TextEdit', });
lyr_PMT_2.set('fieldImages', {'Name': 'TextEdit', 'INICIO': 'TextEdit', 'FIN': 'TextEdit', 'DIRECCION': 'TextEdit', 'TIPO DE CIERRE': 'TextEdit', 'SOLICITANTE': 'TextEdit', 'ACTIVIDAD': 'TextEdit', 'REV_CAMPO': 'TextEdit', });
lyr_CIERRES_1.set('fieldLabels', {'Name': 'header label', 'INICIO': 'header label', 'FIN': 'header label', 'DIRECCION': 'header label', 'TIPO DE CIERRE': 'header label', 'SOLICITANTE': 'header label', 'ACTIVIDAD': 'header label', 'REV_CAMPO': 'header label', });
lyr_PMT_2.set('fieldLabels', {'Name': 'header label', 'INICIO': 'header label', 'FIN': 'header label', 'DIRECCION': 'header label', 'TIPO DE CIERRE': 'header label', 'SOLICITANTE': 'header label', 'ACTIVIDAD': 'header label', 'REV_CAMPO': 'header label', });
lyr_PMT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
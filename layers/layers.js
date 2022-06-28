var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SITES_TETRA_1 = new ol.format.GeoJSON();
var features_SITES_TETRA_1 = format_SITES_TETRA_1.readFeatures(json_SITES_TETRA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SITES_TETRA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SITES_TETRA_1.addFeatures(features_SITES_TETRA_1);
var lyr_SITES_TETRA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SITES_TETRA_1, 
                style: style_SITES_TETRA_1,
                interactive: true,
                title: '<img src="styles/legend/SITES_TETRA_1.png" /> SITES_TETRA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SITES_TETRA_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SITES_TETRA_1];
lyr_SITES_TETRA_1.set('fieldAliases', {'Nom équipement': 'Nom équipement', 'Site': 'Site', 'Région SNCF': 'Région SNCF', 'Longitude (Lambert 93)': 'Longitude (Lambert 93)', 'Latitude (Lambert 93)': 'Latitude (Lambert 93)', 'Identificateur équipement': 'Identificateur équipement', });
lyr_SITES_TETRA_1.set('fieldImages', {'Nom équipement': 'TextEdit', 'Site': 'TextEdit', 'Région SNCF': 'TextEdit', 'Longitude (Lambert 93)': 'Range', 'Latitude (Lambert 93)': 'Range', 'Identificateur équipement': 'TextEdit', });
lyr_SITES_TETRA_1.set('fieldLabels', {'Nom équipement': 'no label', 'Site': 'no label', 'Région SNCF': 'no label', 'Longitude (Lambert 93)': 'no label', 'Latitude (Lambert 93)': 'no label', 'Identificateur équipement': 'no label', });
lyr_SITES_TETRA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
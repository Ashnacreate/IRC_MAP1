ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-14.292384, 47.651534, -4.879578, 55.031866]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MULTIPLESERVICES_1 = new ol.format.GeoJSON();
var features_MULTIPLESERVICES_1 = format_MULTIPLESERVICES_1.readFeatures(json_MULTIPLESERVICES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MULTIPLESERVICES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MULTIPLESERVICES_1.addFeatures(features_MULTIPLESERVICES_1);
var lyr_MULTIPLESERVICES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MULTIPLESERVICES_1, 
                style: style_MULTIPLESERVICES_1,
                popuplayertitle: 'MULTIPLE SERVICES',
                interactive: true,
    title: 'MULTIPLE SERVICES<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_0.png" /> ACET Ireland<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_1.png" /> Amal Women Ireland<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_2.png" /> Baldoyle Family Resource Service CLG<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_3.png" /> Connecting Minds Project<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_4.png" /> Cuan Saor Women\'s Refuge and Support Services CLG<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_5.png" /> Dignity Partnership<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_6.png" /> Falls Women\'s Centre<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_7.png" /> Galway County Council Integration Team<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_8.png" /> GLENSHANE COMMUNITY DEVELOPMENT LIMITED<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_9.png" /> Haven<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_10.png" /> LAIT (Local Authority Integration Team) Donegal<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_11.png" /> Leitrim Volunteer Centre<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_12.png" /> Local Authority Integration Team<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_13.png" /> National Parents Council<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_14.png" /> Newbridge Family Resource Centre<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_15.png" /> SAOL Project CLG<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_16.png" /> Sligo Presbyterian Church<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_17.png" /> The Exchange Inishowen CLG<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_18.png" /> The Liberties Community Project<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_19.png" /> The Warehouse Newtownards<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_20.png" /> Tralee International Resource Centre (TIRC)<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_21.png" /> Tullamore International Welcome Centre<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_22.png" /> Waterford Integration Services<br />\
    <img src="styles/legend/MULTIPLESERVICES_1_23.png" /> West Cork Development Partnership<br />' });
var format_YOUTHSERVICES_2 = new ol.format.GeoJSON();
var features_YOUTHSERVICES_2 = format_YOUTHSERVICES_2.readFeatures(json_YOUTHSERVICES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_YOUTHSERVICES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YOUTHSERVICES_2.addFeatures(features_YOUTHSERVICES_2);
var lyr_YOUTHSERVICES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YOUTHSERVICES_2, 
                style: style_YOUTHSERVICES_2,
                popuplayertitle: 'YOUTH SERVICES',
                interactive: true,
    title: 'YOUTH SERVICES<br />\
    <img src="styles/legend/YOUTHSERVICES_2_0.png" /> Young Irish Film Makers<br />\
    <img src="styles/legend/YOUTHSERVICES_2_1.png" /> Youth Work Ireland Galway<br />' });
var format_WELLBEINGANDMENTALHEALTH_3 = new ol.format.GeoJSON();
var features_WELLBEINGANDMENTALHEALTH_3 = format_WELLBEINGANDMENTALHEALTH_3.readFeatures(json_WELLBEINGANDMENTALHEALTH_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_WELLBEINGANDMENTALHEALTH_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WELLBEINGANDMENTALHEALTH_3.addFeatures(features_WELLBEINGANDMENTALHEALTH_3);
var lyr_WELLBEINGANDMENTALHEALTH_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WELLBEINGANDMENTALHEALTH_3, 
                style: style_WELLBEINGANDMENTALHEALTH_3,
                popuplayertitle: 'WELLBEING AND MENTAL HEALTH',
                interactive: true,
    title: 'WELLBEING AND MENTAL HEALTH<br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_0.png" /> <br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_1.png" /> Academy of Success and Happiness<br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_2.png" /> Donegal Sexual Abuse & Rape Crisis Centre<br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_3.png" /> Dublin Rape Crisis Centre<br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_4.png" /> Insight Inishowen<br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_5.png" /> ISPCC<br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_6.png" /> ISPCC Childline Therapeutic Support Service<br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_7.png" /> LIFE CHANGE CHANGES LIVES<br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_8.png" /> Mayo Rape Crisis Centre<br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_9.png" /> Sailing Into Wellness<br />\
    <img src="styles/legend/WELLBEINGANDMENTALHEALTH_3_10.png" /> The Rainbow Project Ltd<br />' });
var format_ONLINESERVICES_4 = new ol.format.GeoJSON();
var features_ONLINESERVICES_4 = format_ONLINESERVICES_4.readFeatures(json_ONLINESERVICES_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ONLINESERVICES_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ONLINESERVICES_4.addFeatures(features_ONLINESERVICES_4);
var lyr_ONLINESERVICES_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ONLINESERVICES_4, 
                style: style_ONLINESERVICES_4,
                popuplayertitle: 'ONLINE SERVICES',
                interactive: true,
    title: 'ONLINE SERVICES<br />\
    <img src="styles/legend/ONLINESERVICES_4_0.png" /> Academy of Success and Happiness<br />\
    <img src="styles/legend/ONLINESERVICES_4_1.png" /> Generation Ireland<br />\
    <img src="styles/legend/ONLINESERVICES_4_2.png" /> Mauritian Network Ireland<br />' });
var format_VOLUNTEERING_SERVICES_5 = new ol.format.GeoJSON();
var features_VOLUNTEERING_SERVICES_5 = format_VOLUNTEERING_SERVICES_5.readFeatures(json_VOLUNTEERING_SERVICES_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_VOLUNTEERING_SERVICES_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VOLUNTEERING_SERVICES_5.addFeatures(features_VOLUNTEERING_SERVICES_5);
var lyr_VOLUNTEERING_SERVICES_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VOLUNTEERING_SERVICES_5, 
                style: style_VOLUNTEERING_SERVICES_5,
                popuplayertitle: 'VOLUNTEERING_SERVICES',
                interactive: true,
    title: 'VOLUNTEERING_SERVICES<br />\
    <img src="styles/legend/VOLUNTEERING_SERVICES_5_0.png" /> Clare Volunteer Centre<br />' });
var format_INFORMATIONANDADVICE_6 = new ol.format.GeoJSON();
var features_INFORMATIONANDADVICE_6 = format_INFORMATIONANDADVICE_6.readFeatures(json_INFORMATIONANDADVICE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_INFORMATIONANDADVICE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INFORMATIONANDADVICE_6.addFeatures(features_INFORMATIONANDADVICE_6);
var lyr_INFORMATIONANDADVICE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INFORMATIONANDADVICE_6, 
                style: style_INFORMATIONANDADVICE_6,
                popuplayertitle: 'INFORMATION AND ADVICE',
                interactive: true,
    title: 'INFORMATION AND ADVICE<br />\
    <img src="styles/legend/INFORMATIONANDADVICE_6_0.png" /> Crosscare Information & Advocacy Service<br />\
    <img src="styles/legend/INFORMATIONANDADVICE_6_1.png" /> EPIC, Empowering People in Care<br />\
    <img src="styles/legend/INFORMATIONANDADVICE_6_2.png" /> Kilkenny County Council (LAIT)<br />\
    <img src="styles/legend/INFORMATIONANDADVICE_6_3.png" /> Limerick Citizens Information Centre<br />\
    <img src="styles/legend/INFORMATIONANDADVICE_6_4.png" /> Local Authority Integration Team (LAIT). Sligo County Council<br />\
    <img src="styles/legend/INFORMATIONANDADVICE_6_5.png" /> Mauritian Network Ireland<br />\
    <img src="styles/legend/INFORMATIONANDADVICE_6_6.png" /> Minority Ethnic Support Armagh<br />\
    <img src="styles/legend/INFORMATIONANDADVICE_6_7.png" /> Offaly County Childcare Committee Clg<br />\
    <img src="styles/legend/INFORMATIONANDADVICE_6_8.png" /> South Leinster Citizens Information Carlow area<br />\
    <img src="styles/legend/INFORMATIONANDADVICE_6_9.png" /> Wadajir Somali Association Ireland CLG<br />' });
var format_EDUCATION_7 = new ol.format.GeoJSON();
var features_EDUCATION_7 = format_EDUCATION_7.readFeatures(json_EDUCATION_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_EDUCATION_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDUCATION_7.addFeatures(features_EDUCATION_7);
cluster_EDUCATION_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_EDUCATION_7
});
var lyr_EDUCATION_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_EDUCATION_7, 
                style: style_EDUCATION_7,
                popuplayertitle: 'EDUCATION',
                interactive: true,
    title: 'EDUCATION<br />\
    <img src="styles/legend/EDUCATION_7_0.png" /> Dublin College FET Blanchardstown<br />\
    <img src="styles/legend/EDUCATION_7_1.png" /> Dublin College FET Riversdale<br />\
    <img src="styles/legend/EDUCATION_7_2.png" /> Galway Roscommon Education and Training Board<br />' });
var format_COMMUNITY_8 = new ol.format.GeoJSON();
var features_COMMUNITY_8 = format_COMMUNITY_8.readFeatures(json_COMMUNITY_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_COMMUNITY_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNITY_8.addFeatures(features_COMMUNITY_8);
var lyr_COMMUNITY_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNITY_8, 
                style: style_COMMUNITY_8,
                popuplayertitle: 'COMMUNITY',
                interactive: true,
    title: 'COMMUNITY<br />\
    <img src="styles/legend/COMMUNITY_8_0.png" /> Atlas Womens Centre<br />\
    <img src="styles/legend/COMMUNITY_8_1.png" /> Cáirdeas Kilmovee Family Resource Centre<br />\
    <img src="styles/legend/COMMUNITY_8_2.png" /> Cliftonville Community Centre<br />\
    <img src="styles/legend/COMMUNITY_8_3.png" /> Mother Tongues<br />\
    <img src="styles/legend/COMMUNITY_8_4.png" /> South West Kerry Family Resource Centre<br />' });
var group_COMMUNITY = new ol.layer.Group({
                                layers: [lyr_COMMUNITY_8,],
                                fold: 'close',
                                title: 'COMMUNITY'});
var group_EIRCODE = new ol.layer.Group({
                                layers: [lyr_EDUCATION_7,],
                                fold: 'close',
                                title: 'EIRCODE'});
var group_INFORMATIONANDADVICE = new ol.layer.Group({
                                layers: [lyr_INFORMATIONANDADVICE_6,],
                                fold: 'open',
                                title: 'INFORMATION AND ADVICE'});

lyr_OSMStandard_0.setVisible(true);lyr_MULTIPLESERVICES_1.setVisible(true);lyr_YOUTHSERVICES_2.setVisible(true);lyr_WELLBEINGANDMENTALHEALTH_3.setVisible(true);lyr_ONLINESERVICES_4.setVisible(true);lyr_VOLUNTEERING_SERVICES_5.setVisible(true);lyr_INFORMATIONANDADVICE_6.setVisible(true);lyr_EDUCATION_7.setVisible(true);lyr_COMMUNITY_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MULTIPLESERVICES_1,lyr_YOUTHSERVICES_2,lyr_WELLBEINGANDMENTALHEALTH_3,lyr_ONLINESERVICES_4,lyr_VOLUNTEERING_SERVICES_5,group_INFORMATIONANDADVICE,group_EIRCODE,group_COMMUNITY];
lyr_MULTIPLESERVICES_1.set('fieldAliases', {'ID': 'ID', 'Name_of_th': 'Name_of_th', 'Is_your_or': 'Is_your_or', 'Should_you': 'Should_you', 'Would_you_': 'Would_you_', 'Please_ent': 'Please_ent', 'Please_e_1': 'Please_e_1', 'Please_e_2': 'Please_e_2', 'Can_you_pl': 'Can_you_pl', 'What_is_yo': 'What_is_yo', 'F_Is_your_': 'F_Is_your_', 'What_is_th': 'What_is_th', 'What_is__1': 'What_is__1', 'Does_your_': 'Does_your_', 'Please_pro': 'Please_pro', 'Does_your1': 'Does_your1', 'On_what_da': 'On_what_da', 'What_times': 'What_times', 'Which_of_t': 'Which_of_t', 'What_is__2': 'What_is__2', 'F_Can_you_': 'F_Can_you_', 'Do_you_agr': 'Do_you_agr', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_YOUTHSERVICES_2.set('fieldAliases', {'ID': 'ID', 'Name_of_th': 'Name_of_th', 'Is_your_or': 'Is_your_or', 'Should_you': 'Should_you', 'Would_you_': 'Would_you_', 'Please_ent': 'Please_ent', 'Please_e_1': 'Please_e_1', 'Please_e_2': 'Please_e_2', 'Can_you_pl': 'Can_you_pl', 'What_is_yo': 'What_is_yo', 'F_Is_your_': 'F_Is_your_', 'What_is_th': 'What_is_th', 'What_is__1': 'What_is__1', 'Does_your_': 'Does_your_', 'Please_pro': 'Please_pro', 'Does_your1': 'Does_your1', 'On_what_da': 'On_what_da', 'What_times': 'What_times', 'Which_of_t': 'Which_of_t', 'What_is__2': 'What_is__2', 'F_Can_you_': 'F_Can_you_', 'Do_you_agr': 'Do_you_agr', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_WELLBEINGANDMENTALHEALTH_3.set('fieldAliases', {'ID': 'ID', 'Name_of_th': 'Name_of_th', 'Is_your_or': 'Is_your_or', 'Should_you': 'Should_you', 'Would_you_': 'Would_you_', 'Please_ent': 'Please_ent', 'Please_e_1': 'Please_e_1', 'Please_e_2': 'Please_e_2', 'Can_you_pl': 'Can_you_pl', 'What_is_yo': 'What_is_yo', 'F_Is_your_': 'F_Is_your_', 'What_is_th': 'What_is_th', 'What_is__1': 'What_is__1', 'Does_your_': 'Does_your_', 'Please_pro': 'Please_pro', 'Does_your1': 'Does_your1', 'On_what_da': 'On_what_da', 'What_times': 'What_times', 'Which_of_t': 'Which_of_t', 'What_is__2': 'What_is__2', 'F_Can_you_': 'F_Can_you_', 'Do_you_agr': 'Do_you_agr', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_ONLINESERVICES_4.set('fieldAliases', {'ID': 'ID', 'Name_of_th': 'Name_of_th', 'Is_your_or': 'Is_your_or', 'Should_you': 'Should_you', 'Would_you_': 'Would_you_', 'Please_ent': 'Please_ent', 'Please_e_1': 'Please_e_1', 'Please_e_2': 'Please_e_2', 'Can_you_pl': 'Can_you_pl', 'What_is_yo': 'What_is_yo', 'F_Is_your_': 'F_Is_your_', 'What_is_th': 'What_is_th', 'What_is__1': 'What_is__1', 'Does_your_': 'Does_your_', 'Please_pro': 'Please_pro', 'Does_your1': 'Does_your1', 'On_what_da': 'On_what_da', 'What_times': 'What_times', 'Which_of_t': 'Which_of_t', 'What_is__2': 'What_is__2', 'F_Can_you_': 'F_Can_you_', 'Do_you_agr': 'Do_you_agr', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_VOLUNTEERING_SERVICES_5.set('fieldAliases', {'ID': 'ID', 'Name_of_th': 'Name_of_th', 'Is_your_or': 'Is_your_or', 'Should_you': 'Should_you', 'Would_you_': 'Would_you_', 'Please_ent': 'Please_ent', 'Please_e_1': 'Please_e_1', 'Please_e_2': 'Please_e_2', 'Can_you_pl': 'Can_you_pl', 'What_is_yo': 'What_is_yo', 'F_Is_your_': 'F_Is_your_', 'What_is_th': 'What_is_th', 'What_is__1': 'What_is__1', 'Does_your_': 'Does_your_', 'Please_pro': 'Please_pro', 'Does_your1': 'Does_your1', 'On_what_da': 'On_what_da', 'What_times': 'What_times', 'Which_of_t': 'Which_of_t', 'What_is__2': 'What_is__2', 'F_Can_you_': 'F_Can_you_', 'Do_you_agr': 'Do_you_agr', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_INFORMATIONANDADVICE_6.set('fieldAliases', {'ID': 'ID', 'Name_of_th': 'Name_of_th', 'Is_your_or': 'Is_your_or', 'Should_you': 'Should_you', 'Would_you_': 'Would_you_', 'Please_ent': 'Please_ent', 'Please_e_1': 'Please_e_1', 'Please_e_2': 'Please_e_2', 'Can_you_pl': 'Can_you_pl', 'What_is_yo': 'What_is_yo', 'F_Is_your_': 'F_Is_your_', 'What_is_th': 'What_is_th', 'What_is__1': 'What_is__1', 'Does_your_': 'Does_your_', 'Please_pro': 'Please_pro', 'Does_your1': 'Does_your1', 'On_what_da': 'On_what_da', 'What_times': 'What_times', 'Which_of_t': 'Which_of_t', 'What_is__2': 'What_is__2', 'F_Can_you_': 'F_Can_you_', 'Do_you_agr': 'Do_you_agr', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_EDUCATION_7.set('fieldAliases', {'ID': 'ID', 'Name_of_th': 'Name_of_th', 'Is_your_or': 'Is_your_or', 'Should_you': 'Should_you', 'Would_you_': 'Would_you_', 'Please_ent': 'Please_ent', 'Please_e_1': 'Please_e_1', 'Please_e_2': 'Please_e_2', 'Can_you_pl': 'Can_you_pl', 'What_is_yo': 'What_is_yo', 'F_Is_your_': 'F_Is_your_', 'What_is_th': 'What_is_th', 'What_is__1': 'What_is__1', 'Does_your_': 'Does_your_', 'Please_pro': 'Please_pro', 'Does_your1': 'Does_your1', 'On_what_da': 'On_what_da', 'What_times': 'What_times', 'Which_of_t': 'Which_of_t', 'What_is__2': 'What_is__2', 'F_Can_you_': 'F_Can_you_', 'Do_you_agr': 'Do_you_agr', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_COMMUNITY_8.set('fieldAliases', {'ID': 'ID', 'Name_of_th': 'Name_of_th', 'Is_your_or': 'Is_your_or', 'Should_you': 'Should_you', 'Would_you_': 'Would_you_', 'Please_ent': 'Please_ent', 'Please_e_1': 'Please_e_1', 'Please_e_2': 'Please_e_2', 'Can_you_pl': 'Can_you_pl', 'What_is_yo': 'What_is_yo', 'F_Is_your_': 'F_Is_your_', 'What_is_th': 'What_is_th', 'What_is__1': 'What_is__1', 'Does_your_': 'Does_your_', 'Please_pro': 'Please_pro', 'Does_your1': 'Does_your1', 'On_what_da': 'On_what_da', 'What_times': 'What_times', 'Which_of_t': 'Which_of_t', 'What_is__2': 'What_is__2', 'F_Can_you_': 'F_Can_you_', 'Do_you_agr': 'Do_you_agr', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_MULTIPLESERVICES_1.set('fieldImages', {'ID': 'TextEdit', 'Name_of_th': 'TextEdit', 'Is_your_or': 'TextEdit', 'Should_you': 'TextEdit', 'Would_you_': 'TextEdit', 'Please_ent': 'TextEdit', 'Please_e_1': 'TextEdit', 'Please_e_2': 'TextEdit', 'Can_you_pl': 'TextEdit', 'What_is_yo': 'TextEdit', 'F_Is_your_': 'TextEdit', 'What_is_th': 'TextEdit', 'What_is__1': 'TextEdit', 'Does_your_': 'TextEdit', 'Please_pro': 'TextEdit', 'Does_your1': 'TextEdit', 'On_what_da': 'TextEdit', 'What_times': 'TextEdit', 'Which_of_t': 'TextEdit', 'What_is__2': 'TextEdit', 'F_Can_you_': 'TextEdit', 'Do_you_agr': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_YOUTHSERVICES_2.set('fieldImages', {'ID': 'TextEdit', 'Name_of_th': 'TextEdit', 'Is_your_or': 'TextEdit', 'Should_you': 'TextEdit', 'Would_you_': 'TextEdit', 'Please_ent': 'TextEdit', 'Please_e_1': 'TextEdit', 'Please_e_2': 'TextEdit', 'Can_you_pl': 'TextEdit', 'What_is_yo': 'TextEdit', 'F_Is_your_': 'TextEdit', 'What_is_th': 'TextEdit', 'What_is__1': 'TextEdit', 'Does_your_': 'TextEdit', 'Please_pro': 'TextEdit', 'Does_your1': 'TextEdit', 'On_what_da': 'TextEdit', 'What_times': 'TextEdit', 'Which_of_t': 'TextEdit', 'What_is__2': 'TextEdit', 'F_Can_you_': 'TextEdit', 'Do_you_agr': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_WELLBEINGANDMENTALHEALTH_3.set('fieldImages', {'ID': 'TextEdit', 'Name_of_th': 'TextEdit', 'Is_your_or': 'TextEdit', 'Should_you': 'TextEdit', 'Would_you_': 'TextEdit', 'Please_ent': 'TextEdit', 'Please_e_1': 'TextEdit', 'Please_e_2': 'TextEdit', 'Can_you_pl': 'TextEdit', 'What_is_yo': 'TextEdit', 'F_Is_your_': 'TextEdit', 'What_is_th': 'TextEdit', 'What_is__1': 'TextEdit', 'Does_your_': 'TextEdit', 'Please_pro': 'TextEdit', 'Does_your1': 'TextEdit', 'On_what_da': 'TextEdit', 'What_times': 'TextEdit', 'Which_of_t': 'TextEdit', 'What_is__2': 'TextEdit', 'F_Can_you_': 'TextEdit', 'Do_you_agr': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_ONLINESERVICES_4.set('fieldImages', {'ID': 'TextEdit', 'Name_of_th': 'TextEdit', 'Is_your_or': 'TextEdit', 'Should_you': 'TextEdit', 'Would_you_': 'TextEdit', 'Please_ent': 'TextEdit', 'Please_e_1': 'TextEdit', 'Please_e_2': 'TextEdit', 'Can_you_pl': 'TextEdit', 'What_is_yo': 'TextEdit', 'F_Is_your_': 'TextEdit', 'What_is_th': 'TextEdit', 'What_is__1': 'TextEdit', 'Does_your_': 'TextEdit', 'Please_pro': 'TextEdit', 'Does_your1': 'TextEdit', 'On_what_da': 'TextEdit', 'What_times': 'TextEdit', 'Which_of_t': 'TextEdit', 'What_is__2': 'TextEdit', 'F_Can_you_': 'TextEdit', 'Do_you_agr': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_VOLUNTEERING_SERVICES_5.set('fieldImages', {'ID': 'TextEdit', 'Name_of_th': 'TextEdit', 'Is_your_or': 'TextEdit', 'Should_you': 'TextEdit', 'Would_you_': 'TextEdit', 'Please_ent': 'TextEdit', 'Please_e_1': 'TextEdit', 'Please_e_2': 'TextEdit', 'Can_you_pl': 'TextEdit', 'What_is_yo': 'TextEdit', 'F_Is_your_': 'TextEdit', 'What_is_th': 'TextEdit', 'What_is__1': 'TextEdit', 'Does_your_': 'TextEdit', 'Please_pro': 'TextEdit', 'Does_your1': 'TextEdit', 'On_what_da': 'TextEdit', 'What_times': 'TextEdit', 'Which_of_t': 'TextEdit', 'What_is__2': 'TextEdit', 'F_Can_you_': 'TextEdit', 'Do_you_agr': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_INFORMATIONANDADVICE_6.set('fieldImages', {'ID': 'TextEdit', 'Name_of_th': 'TextEdit', 'Is_your_or': 'TextEdit', 'Should_you': 'TextEdit', 'Would_you_': 'TextEdit', 'Please_ent': 'TextEdit', 'Please_e_1': 'TextEdit', 'Please_e_2': 'TextEdit', 'Can_you_pl': 'TextEdit', 'What_is_yo': 'TextEdit', 'F_Is_your_': 'TextEdit', 'What_is_th': 'TextEdit', 'What_is__1': 'TextEdit', 'Does_your_': 'TextEdit', 'Please_pro': 'TextEdit', 'Does_your1': 'TextEdit', 'On_what_da': 'TextEdit', 'What_times': 'TextEdit', 'Which_of_t': 'TextEdit', 'What_is__2': 'TextEdit', 'F_Can_you_': 'TextEdit', 'Do_you_agr': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_EDUCATION_7.set('fieldImages', {'ID': 'TextEdit', 'Name_of_th': 'TextEdit', 'Is_your_or': 'TextEdit', 'Should_you': 'TextEdit', 'Would_you_': 'TextEdit', 'Please_ent': 'TextEdit', 'Please_e_1': 'TextEdit', 'Please_e_2': 'TextEdit', 'Can_you_pl': 'TextEdit', 'What_is_yo': 'TextEdit', 'F_Is_your_': 'TextEdit', 'What_is_th': 'TextEdit', 'What_is__1': 'TextEdit', 'Does_your_': 'TextEdit', 'Please_pro': 'TextEdit', 'Does_your1': 'TextEdit', 'On_what_da': 'TextEdit', 'What_times': 'TextEdit', 'Which_of_t': 'TextEdit', 'What_is__2': 'TextEdit', 'F_Can_you_': 'TextEdit', 'Do_you_agr': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_COMMUNITY_8.set('fieldImages', {'ID': 'TextEdit', 'Name_of_th': 'TextEdit', 'Is_your_or': 'TextEdit', 'Should_you': 'TextEdit', 'Would_you_': 'TextEdit', 'Please_ent': 'TextEdit', 'Please_e_1': 'TextEdit', 'Please_e_2': 'TextEdit', 'Can_you_pl': 'TextEdit', 'What_is_yo': 'TextEdit', 'F_Is_your_': 'TextEdit', 'What_is_th': 'TextEdit', 'What_is__1': 'TextEdit', 'Does_your_': 'TextEdit', 'Please_pro': 'TextEdit', 'Does_your1': 'TextEdit', 'On_what_da': 'TextEdit', 'What_times': 'TextEdit', 'Which_of_t': 'TextEdit', 'What_is__2': 'TextEdit', 'F_Can_you_': 'TextEdit', 'Do_you_agr': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_MULTIPLESERVICES_1.set('fieldLabels', {'ID': 'hidden field', 'Name_of_th': 'inline label - visible with data', 'Is_your_or': 'hidden field', 'Should_you': 'inline label - always visible', 'Would_you_': 'inline label - visible with data', 'Please_ent': 'inline label - always visible', 'Please_e_1': 'inline label - always visible', 'Please_e_2': 'inline label - visible with data', 'Can_you_pl': 'inline label - always visible', 'What_is_yo': 'inline label - always visible', 'F_Is_your_': 'inline label - visible with data', 'What_is_th': 'inline label - always visible', 'What_is__1': 'inline label - always visible', 'Does_your_': 'inline label - always visible', 'Please_pro': 'inline label - always visible', 'Does_your1': 'inline label - always visible', 'On_what_da': 'inline label - always visible', 'What_times': 'no label', 'Which_of_t': 'inline label - visible with data', 'What_is__2': 'inline label - visible with data', 'F_Can_you_': 'inline label - visible with data', 'Do_you_agr': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_YOUTHSERVICES_2.set('fieldLabels', {'ID': 'hidden field', 'Name_of_th': 'inline label - visible with data', 'Is_your_or': 'inline label - visible with data', 'Should_you': 'inline label - visible with data', 'Would_you_': 'hidden field', 'Please_ent': 'inline label - visible with data', 'Please_e_1': 'inline label - visible with data', 'Please_e_2': 'hidden field', 'Can_you_pl': 'inline label - visible with data', 'What_is_yo': 'inline label - visible with data', 'F_Is_your_': 'inline label - visible with data', 'What_is_th': 'inline label - visible with data', 'What_is__1': 'inline label - visible with data', 'Does_your_': 'inline label - visible with data', 'Please_pro': 'inline label - visible with data', 'Does_your1': 'inline label - visible with data', 'On_what_da': 'inline label - visible with data', 'What_times': 'inline label - visible with data', 'Which_of_t': 'header label - always visible', 'What_is__2': 'inline label - visible with data', 'F_Can_you_': 'inline label - visible with data', 'Do_you_agr': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_WELLBEINGANDMENTALHEALTH_3.set('fieldLabels', {'ID': 'hidden field', 'Name_of_th': 'inline label - visible with data', 'Is_your_or': 'inline label - visible with data', 'Should_you': 'inline label - visible with data', 'Would_you_': 'inline label - visible with data', 'Please_ent': 'inline label - visible with data', 'Please_e_1': 'inline label - visible with data', 'Please_e_2': 'inline label - visible with data', 'Can_you_pl': 'inline label - visible with data', 'What_is_yo': 'inline label - visible with data', 'F_Is_your_': 'inline label - visible with data', 'What_is_th': 'inline label - always visible', 'What_is__1': 'inline label - visible with data', 'Does_your_': 'inline label - visible with data', 'Please_pro': 'inline label - visible with data', 'Does_your1': 'inline label - visible with data', 'On_what_da': 'inline label - visible with data', 'What_times': 'inline label - visible with data', 'Which_of_t': 'inline label - visible with data', 'What_is__2': 'inline label - visible with data', 'F_Can_you_': 'inline label - visible with data', 'Do_you_agr': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_ONLINESERVICES_4.set('fieldLabels', {'ID': 'inline label - visible with data', 'Name_of_th': 'inline label - visible with data', 'Is_your_or': 'inline label - visible with data', 'Should_you': 'inline label - visible with data', 'Would_you_': 'inline label - visible with data', 'Please_ent': 'inline label - visible with data', 'Please_e_1': 'inline label - visible with data', 'Please_e_2': 'hidden field', 'Can_you_pl': 'header label - visible with data', 'What_is_yo': 'header label - always visible', 'F_Is_your_': 'header label - always visible', 'What_is_th': 'header label - always visible', 'What_is__1': 'inline label - visible with data', 'Does_your_': 'inline label - visible with data', 'Please_pro': 'hidden field', 'Does_your1': 'inline label - visible with data', 'On_what_da': 'no label', 'What_times': 'no label', 'Which_of_t': 'inline label - always visible', 'What_is__2': 'inline label - visible with data', 'F_Can_you_': 'inline label - visible with data', 'Do_you_agr': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_VOLUNTEERING_SERVICES_5.set('fieldLabels', {'ID': 'hidden field', 'Name_of_th': 'inline label - visible with data', 'Is_your_or': 'inline label - visible with data', 'Should_you': 'inline label - visible with data', 'Would_you_': 'inline label - visible with data', 'Please_ent': 'inline label - visible with data', 'Please_e_1': 'inline label - visible with data', 'Please_e_2': 'inline label - always visible', 'Can_you_pl': 'inline label - visible with data', 'What_is_yo': 'inline label - visible with data', 'F_Is_your_': 'inline label - visible with data', 'What_is_th': 'inline label - visible with data', 'What_is__1': 'inline label - visible with data', 'Does_your_': 'inline label - visible with data', 'Please_pro': 'inline label - visible with data', 'Does_your1': 'inline label - visible with data', 'On_what_da': 'inline label - visible with data', 'What_times': 'inline label - visible with data', 'Which_of_t': 'inline label - visible with data', 'What_is__2': 'inline label - visible with data', 'F_Can_you_': 'inline label - always visible', 'Do_you_agr': 'header label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_INFORMATIONANDADVICE_6.set('fieldLabels', {'ID': 'no label', 'Name_of_th': 'header label - always visible', 'Is_your_or': 'header label - visible with data', 'Should_you': 'hidden field', 'Would_you_': 'hidden field', 'Please_ent': 'inline label - visible with data', 'Please_e_1': 'inline label - visible with data', 'Please_e_2': 'header label - always visible', 'Can_you_pl': 'inline label - visible with data', 'What_is_yo': 'inline label - visible with data', 'F_Is_your_': 'inline label - visible with data', 'What_is_th': 'inline label - visible with data', 'What_is__1': 'inline label - always visible', 'Does_your_': 'inline label - visible with data', 'Please_pro': 'inline label - always visible', 'Does_your1': 'inline label - always visible', 'On_what_da': 'inline label - visible with data', 'What_times': 'inline label - visible with data', 'Which_of_t': 'inline label - visible with data', 'What_is__2': 'inline label - visible with data', 'F_Can_you_': 'inline label - visible with data', 'Do_you_agr': 'header label - always visible', 'latitude': 'hidden field', 'longitude': 'no label', });
lyr_EDUCATION_7.set('fieldLabels', {'ID': 'no label', 'Name_of_th': 'header label - always visible', 'Is_your_or': 'hidden field', 'Should_you': 'hidden field', 'Would_you_': 'hidden field', 'Please_ent': 'inline label - visible with data', 'Please_e_1': 'inline label - visible with data', 'Please_e_2': 'inline label - visible with data', 'Can_you_pl': 'inline label - always visible', 'What_is_yo': 'inline label - visible with data', 'F_Is_your_': 'inline label - always visible', 'What_is_th': 'inline label - visible with data', 'What_is__1': 'inline label - visible with data', 'Does_your_': 'inline label - visible with data', 'Please_pro': 'inline label - visible with data', 'Does_your1': 'inline label - visible with data', 'On_what_da': 'header label - always visible', 'What_times': 'header label - always visible', 'Which_of_t': 'inline label - visible with data', 'What_is__2': 'inline label - visible with data', 'F_Can_you_': 'inline label - visible with data', 'Do_you_agr': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_COMMUNITY_8.set('fieldLabels', {'ID': 'no label', 'Name_of_th': 'inline label - always visible', 'Is_your_or': 'hidden field', 'Should_you': 'hidden field', 'Would_you_': 'hidden field', 'Please_ent': 'inline label - visible with data', 'Please_e_1': 'inline label - always visible', 'Please_e_2': 'inline label - always visible', 'Can_you_pl': 'inline label - always visible', 'What_is_yo': 'inline label - always visible', 'F_Is_your_': 'inline label - always visible', 'What_is_th': 'inline label - always visible', 'What_is__1': 'inline label - always visible', 'Does_your_': 'header label - always visible', 'Please_pro': 'header label - always visible', 'Does_your1': 'inline label - always visible', 'On_what_da': 'inline label - visible with data', 'What_times': 'inline label - visible with data', 'Which_of_t': 'inline label - visible with data', 'What_is__2': 'inline label - visible with data', 'F_Can_you_': 'inline label - visible with data', 'Do_you_agr': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_COMMUNITY_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
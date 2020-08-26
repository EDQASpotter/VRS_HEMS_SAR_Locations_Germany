<script type="text/javascript">
    if(VRS && VRS.globalDispatch && VRS.serverConfig) {
        VRS.globalDispatch.hook(VRS.globalEvent.bootstrapCreated, function(bootStrap) {
            bootStrap.hookInitialised(function(pageSettings) {
                var mapPlugin = pageSettings.mapPlugin;
                if(mapPlugin) {
					mapPlugin.addMarker( 'Klinikum Bayreuth', {
					position:{ lat: 49.9443, lng: 11.5354 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Bayreuth CHX20' 
					});
					mapPlugin.addMarker( 'Main Klinikum Ochsenfurt CHX18', {
					position:{ lat: 49.6598, lng: 10.0869 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Main Klinikum Ochsenfurt CHX18' 
					});
					mapPlugin.addMarker( 'Klinikum Harlaching CHX1', {
					position:{ lat: 48.0837, lng: 11.5601 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Harlaching CHX1' 
					});
					mapPlugin.addMarker( 'BGU Frankfurt CHX2', {
					position:{ lat: 50.1454, lng: 8.7102 },
					icon: { url: 'images/heli.png' },
					tooltip: 'BGU Frankfurt CHX2' 
					});
					mapPlugin.addMarker( 'Köln-Bonn CHX3', {
					position:{ lat: 50.8617, lng: 7.1257 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Köln-Bonn CHX3' 
					});
					mapPlugin.addMarker( 'MHH Hannover CHX4', {
					position:{ lat: 52.3848, lng: 9.8066 },
					icon: { url: 'images/heli.png' },
					tooltip: 'MHH Hannover CHX4' 
					});
					mapPlugin.addMarker( 'BGU Ludwigshafen CHX5', {
					position:{ lat: 49.4869, lng: 8.3896 },
					icon: { url: 'images/heli.png' },
					tooltip: 'BGU Ludwigshafen CHX5' 
					});
					mapPlugin.addMarker( 'Klinikum Links der Weser CHX6', {
					position:{ lat: 53.0358, lng: 8.8172 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Links der Weser CHX6' 
					});
					mapPlugin.addMarker( 'Krankenhaus Kassel CHX7', {
					position:{ lat: 51.3117, lng: 9.4534 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Krankenhaus Kassel CHX7' 
					});
					mapPlugin.addMarker( 'St.-Marien-Hospital Lünen CHX8', {
					position:{ lat: 51.6187, lng: 7.5154 },
					icon: { url: 'images/heli.png' },
					tooltip: 'St.-Marien-Hospital Lünen CHX8' 
					});
					mapPlugin.addMarker( 'BGU Duisburg CHX9', {
					position:{ lat: 51.3804, lng: 6.7872 },
					icon: { url: 'images/heli.png' },
					tooltip: 'BGU Duisburg CHX9' 
					});
					mapPlugin.addMarker( 'St. Elisabeth-Krankenhaus Wittlich CHX10', {
					position:{ lat: 49.9999, lng: 6.8930 },
					icon: { url: 'images/heli.png' },
					tooltip: 'St. Elisabeth-Krankenhaus Wittlich CHX10' 
					});
					mapPlugin.addMarker( 'Schwarzwald-Baar-Klinikum Villingen-Schwenningen CHX11', {
					position:{ lat: 48.0661, lng: 8.5004 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Schwarzwald-Baar-Klinikum Villingen-Schwenningen CHX11' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Ahrensbök-Siblin CHX12', {
					position:{ lat: 54.0351, lng: 10.5622 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Ahrensbök-Siblin CHX12' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Bielefeld CHX13', {
					position:{ lat: 51.9830, lng: 8.5285 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Bielefeld CHX13' 
					});
					mapPlugin.addMarker( 'Klinikum Traunstein CHX14', {
					position:{ lat: 47.8742, lng: 12.6313 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Traunstein CHX14' 
					});
					mapPlugin.addMarker( 'Klinikum St. Elisabeth Straubing CHX15', {
					position:{ lat: 48.8854, lng: 12.5923 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum St. Elisabeth Straubing CHX15' 
					});
					mapPlugin.addMarker( 'Winterbergkliniken CHX16', {
					position:{ lat: 49.2203, lng: 7.0000 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Winterbergkliniken CHX16' 
					});
					mapPlugin.addMarker( 'Flugplatz Durach CHX17', {
					position:{ lat: 47.6940, lng: 10.3406 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Durach CHX17' 
					});
					mapPlugin.addMarker( 'Main Klinik CHX18', {
					position:{ lat: 49.6598, lng: 10.0869 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Main Klinik CHX18' 
					});
					mapPlugin.addMarker( 'Klinikum Uelzen CHX19', {
					position:{ lat: 52.9733, lng: 10.5325 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Uelzen CHX19' 
					});
					mapPlugin.addMarker( 'Flugplatz Merzbrück Christoph Europa 1', {
					position:{ lat: 50.8236, lng: 6.1901 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Merzbrück Christoph Europa 1' 
					});
					mapPlugin.addMarker( 'Bundeswehrkrankenhaus Ulm CHX22', {
					position:{ lat: 48.4266, lng: 9.9453 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Bundeswehrkrankenhaus Ulm CHX22' 
					});
					mapPlugin.addMarker( 'Bundeswehr-Zentralkrankenhaus Koblenz CHX23', {
					position:{ lat: 50.3677, lng: 7.5451 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Bundeswehr-Zentralkrankenhaus Koblenz CHX23' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Rheine Christoph Europa 2', {
					position:{ lat: 52.2772, lng: 7.4312 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Rheine Christoph Europa 2' 
					});
					mapPlugin.addMarker( 'Evang. Jung-Stilling-Krankenhaus CHX25', {
					position:{ lat: 50.8521, lng: 8.0172 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Evang. Jung-Stilling-Krankenhaus CHX25' 
					});
					mapPlugin.addMarker( 'Nordwest-Krankenhaus Sanderbusch CHX26', {
					position:{ lat: 53.5060, lng: 8.0093 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Nordwest-Krankenhaus Sanderbusch CHX26' 
					});
					mapPlugin.addMarker( 'Klinikum Fulda CHX28', {
					position:{ lat: 50.5461, lng: 9.7045 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Fulda CHX28' 
					});
					mapPlugin.addMarker( 'Bundeswehrkrankenhaus Hamburg CHX29', {
					position:{ lat: 53.5966, lng: 10.0779 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Bundeswehrkrankenhaus Hamburg CHX29' 
					});
					mapPlugin.addMarker( 'Klinikum Wolfenbüttel CHX30', {
					position:{ lat: 52.1791, lng: 10.5341 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Wolfenbüttel CHX30' 
					});
					mapPlugin.addMarker( 'Universitätsklinikum Benjamin-Franklin CHX31', {
					position:{ lat: 52.4412, lng: 13.3224 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Universitätsklinikum Benjamin-Franklin CHX31' 
					});
					mapPlugin.addMarker( 'Klinikum Ingolstadt CHX32', {
					position:{ lat: 48.7708, lng: 11.3725 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Ingolstadt CHX32' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Senftenberg CHX33', {
					position:{ lat: 51.5340, lng: 13.9964 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Senftenberg CHX33' 
					});
					mapPlugin.addMarker( 'KMG Klinikum Güstrow CHX34', {
					position:{ lat: 53.8117, lng: 12.1991 },
					icon: { url: 'images/heli.png' },
					tooltip: 'KMG Klinikum Güstrow CHX34' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Brandenburg CHX35', {
					position:{ lat: 52.4152, lng: 12.5445 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Brandenburg CHX35' 
					});
					mapPlugin.addMarker( 'Klinikum Magdeburg CHX36', {
					position:{ lat: 52.1585, lng: 11.5836 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Magdeburg CHX36' 
					});
					mapPlugin.addMarker( 'Klinikum Nordhausen CHX37', {
					position:{ lat: 51.5167, lng: 10.7947 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Nordhausen CHX37' 
					});
					mapPlugin.addMarker( 'Flughafen Dresden CHX38', {
					position:{ lat: 51.1282, lng: 13.7625 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flughafen Dresden CHX38' 
					});
					mapPlugin.addMarker( 'Krankenhaus Perleberg CHX39', {
					position:{ lat: 53.0736, lng: 11.8748 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Krankenhaus Perleberg CHX39' 
					});
					mapPlugin.addMarker( 'Klinikum Augsburg CHX40', {
					position:{ lat: 48.3843, lng: 10.8379 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Augsburg CHX40' 
					});
					mapPlugin.addMarker( 'Kreiskrankenhaus Leonberg CHX41', {
					position:{ lat: 48.8033, lng: 8.9990 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Kreiskrankenhaus Leonberg CHX41' 
					});
					mapPlugin.addMarker( 'Flughafen Karlsruhe Baden-Baden CHX43', {
					position:{ lat: 48.7707, lng: 8.0803 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flughafen Karlsruhe Baden-Baden CHX43' 
					});
					mapPlugin.addMarker( 'Universitätsklinikum Georg-August CHX44', {
					position:{ lat: 51.5516, lng: 9.9433 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Universitätsklinikum Göttingen CHX44' 
					});
					mapPlugin.addMarker( 'Klinikum Friedrichshafen CHX45', {
					position:{ lat: 47.6731, lng: 9.4284 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Friedrichshafen CHX45' 
					});
					mapPlugin.addMarker( 'Klinikum Zwickau CHX46', {
					position:{ lat: 50.7201, lng: 12.4306 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Zwickau CHX46' 
					});
					mapPlugin.addMarker( 'Universitätsklinikum Greiswald CHX47', {
					position:{ lat: 54.0890, lng: 13.4081 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Universitätsklinikum Greiswald CHX47' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Neustrelitz CHX48', {
					position:{ lat: 53.3823, lng: 13.0523 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Neustrelitz CHX48' 
					});
					mapPlugin.addMarker( 'Klinikum Bad Saarow CHX49', {
					position:{ lat: 52.2846, lng: 14.0601 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Bad Saarow CHX49' 
					});
					mapPlugin.addMarker( 'Zentralklinikum Suhl CHX60', {
					position:{ lat: 50.6030, lng: 10.7107 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Zentralklinikum Suhl CHX60' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Dölzig CHX61', {
					position:{ lat: 51.3515, lng: 12.1923 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Dölzig CHX61' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Dölzig CHX63', {
					position:{ lat: 51.3515, lng: 12.1926 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Dölzig CHX63' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Angermünde CHX64', {
					position:{ lat: 52.9999, lng: 14.0025 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Angermünde CHX64' 
					});
					mapPlugin.addMarker( 'Flugplatz Dinkelsbühl CHX65', {
					position:{ lat: 49.0653, lng: 10.4023 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Dinkelsbühl CHX65' 
					});
					mapPlugin.addMarker( 'Flugplatz Schöngleina CHX70', {
					position:{ lat: 50.9150, lng: 11.7162 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Schöngleina CHX70' 
					});
					mapPlugin.addMarker( 'Flugplatz Weiden/Opf. CHX80', {
					position:{ lat: 49.6788, lng: 12.1181 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Weiden/Opf. CHX80' 
					});
					mapPlugin.addMarker( 'Flugplatz Rendsburg-Schachtholm CHX42', {
					position:{ lat: 54.2174, lng: 9.6012 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Rendsburg-Schachtholm CHX42' 
					});
					mapPlugin.addMarker( 'Flugplatz Pattonville CHX51', {
					position:{ lat: 48.8654, lng: 9.2204 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Pattonville CHX51' 
					});
					mapPlugin.addMarker( 'Klinik Niebüll Christoph Europa 5', {
					position:{ lat: 54.7940, lng: 8.8447 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinik Niebüll Christoph Europa 5' 
					});
					mapPlugin.addMarker( 'City Airprot Mannheim CHX53', {
					position:{ lat: 49.4761, lng: 8.5217 },
					icon: { url: 'images/heli.png' },
					tooltip: 'City Airprot Mannheim CHX53' 
					});
					mapPlugin.addMarker( 'Aerodrome Freiburg CHX54', {
					position:{ lat: 48.0205, lng: 7.8362 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Aerodrome Freiburg CHX54' 
					});
					mapPlugin.addMarker( 'Flugplatz Bautzen CHX62', {
					position:{ lat: 51.1985, lng: 14.5228 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Bautzen CHX62' 
					});
					mapPlugin.addMarker( 'Segelflugplatz Eßweiler CHX66', {
					position:{ lat: 49.5611, lng: 7.5791 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Segelflugplatz Eßweiler CHX66' 
					});
					mapPlugin.addMarker( 'Universitätsklinikum Mainz CHX77', {
					position:{ lat: 49.9938, lng: 8.2567 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Universitätsklinikum Mainz CHX77' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Gießen Christoph Gießen', {
					position:{ lat: 50.5725, lng: 8.6524 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Gießen Christoph Gießen' 
					});
					mapPlugin.addMarker( 'Flugplatz Halle-Oppin CHX85', {
					position:{ lat: 51.5509, lng: 12.0517 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Halle-Oppin CHX8' 
					});
					mapPlugin.addMarker( 'BGU Murnau CHX74', {
					position:{ lat: 47.6723, lng: 11.2167 },
					icon: { url: 'images/heli.png' },
					tooltip: 'BGU Murnau CHX74' 
					});
					mapPlugin.addMarker( 'Universitätsklinikum Regensburg CHX89', {
					position:{ lat: 48.9871, lng: 12.0929 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Universitätsklinikum Regensburg CHX89' 
					});
					mapPlugin.addMarker( 'Medical Center Nürburgring, Air Rescue Nürburgring', {
					position:{ lat: 50.3336, lng: 6.9435 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Medical Center Nürburgring, Air Rescue Nürburgring' 
					});
					mapPlugin.addMarker( 'Gewerbepark Sembach, Air Rescue Pfalz', {
					position:{ lat: 49.3023, lng: 7.5150 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Gewerbepark Sembach, Air Rescue Pfalz' 
					});
					mapPlugin.addMarker( 'Flugplatz Marl-Loemühle Akkon Bochum 89-1', {
					position:{ lat: 51.6475, lng: 7.1604 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Marl-Loemühle Akkon Bochum 89-1' 
					});
					mapPlugin.addMarker( 'Unfallkrankenhaus Berlin Marzahn Christoph Berlin', {
					position:{ lat: 52.5191, lng: 13.5678 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Unfallkrankenhaus Berlin Marzahn Christoph Berlin' 
					});
					mapPlugin.addMarker( 'Luftrettungszentrum Senftenberg Christoph Brandenburg', {
					position:{ lat: 51.5338, lng: 13.9967 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Luftrettungszentrum Senftenberg Christoph Brandenburg' 
					});
					mapPlugin.addMarker( 'Flughafen Dortmund CHX55', {
					position:{ lat: 51.5106, lng: 7.6030 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flughafen Dortmund CHX55' 
					});
					mapPlugin.addMarker( 'BGU Hamburg CHX50', {
					position:{ lat: 53.5080, lng: 10.1734 },
					icon: { url: 'images/heli.png' },
					tooltip: 'BGU Hamburg CHX50' 
					});
					mapPlugin.addMarker( 'Flugplatz Reichelsheim Christoph Mittelhessen', {
					position:{ lat: 50.3556, lng: 8.8771 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Reichelsheim Christoph Mittelhessen' 
					});
					mapPlugin.addMarker( 'Klinikum München CHX87', {
					position:{ lat: 48.1108, lng: 11.4656 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum München CHX87' 
					});
					mapPlugin.addMarker( 'Flughafen Hannover CHX86', {
					position:{ lat: 52.4628, lng: 9.6914 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flughafen Hannover CHX86' 
					});
					mapPlugin.addMarker( 'Flughafen Nürnberg CHX88', {
					position:{ lat: 49.4956, lng: 11.0726 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flughafen Nürnberg CHX88' 
					});
					mapPlugin.addMarker( 'Flughafen Nürnberg CHX27', {
					position:{ lat: 49.4958, lng: 11.0727 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flughafen Nürnberg CHX27' 
					});
					mapPlugin.addMarker( 'Flughafen Köln-Bonn CHX75', {
					position:{ lat: 50.8667, lng: 7.1227 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flughafen Köln-Bonn CHX75' 
					});
					mapPlugin.addMarker( 'Klinikum Rostock CHX92', {
					position:{ lat: 54.0706, lng: 12.1089 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Klinikum Rostock CHX92' 
					});
					mapPlugin.addMarker( 'Flugplatz Halle-Oppin CHX84', {
					position:{ lat: 51.5509, lng: 12.0517 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flugplatz Halle-Oppin CHX8' 
					});
					mapPlugin.addMarker( 'Zentralklinik Bad Berka CHX81', {
					position:{ lat: 50.8897, lng: 11.2642 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Zentralklinik Bad Berka CHX81' 
					});
					mapPlugin.addMarker( 'Flughafen Bremen Christoph Weser', {
					position:{ lat: 53.0490, lng: 8.7875 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Flughafen Bremen Christoph Weser' 
					});
					mapPlugin.addMarker( 'Marineflieger Stützpunkt Helgoland SAR10', {
					position:{ lat: 54.1754, lng: 7.8899 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Marineflieger Stützpunkt Helgoland SAR10' 
					});
					mapPlugin.addMarker( 'Marineflieger Stützpunkt Warnemünde SAR24', {
					position:{ lat: 54.1814, lng: 12.1321 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Marineflieger Stützpunkt Warnemünde SAR24' 
					});
					mapPlugin.addMarker( 'Fliegerhorst Nörvenich SAR41', {
					position:{ lat: 50.8320, lng: 6.6622 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Fliegerhorst Nörvenich SAR41' 
					});
					mapPlugin.addMarker( 'Fliegerhorst Niederstetten SAR63', {
					position:{ lat: 49.3909, lng: 9.9634 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Fliegerhorst Niederstetten SAR63' 
					});
					mapPlugin.addMarker( 'Fliegerhorst Niederstetten SAR64', {
					position:{ lat: 49.3906, lng: 9.9631 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Fliegerhorst Niederstetten SAR64' 
					});
					mapPlugin.addMarker( 'Fliegerhorst Holzdorf SAR87', {
					position:{ lat: 51.7685, lng: 13.1653 },
					icon: { url: 'images/heli.png' },
					tooltip: 'Fliegerhorst Holzdorf SAR87' 
					});
                }
            });
        });
    }
</script>
//const { get } = require("lodash");

const colours = [
	["#FF0000", "Red"], ["#3090C7", "Blue"], ["#7E587E", "Viola"], ["#E78A61", "Tangerine"], ["#FAEBD7", "AntiqueWhite"], ["#46C7C7", "Jellyfish"], ["#F0FFFF", "Azure"], ["#7F5A58", "Puce"],
	["#81D8D0", "Tiffany"], ["#387C44", "Pine"], ["#4863A0", "Steel"], ["#D462FF", "Heliotrope"], ["#D16587", "Pale"], ["#B1FB17", "Green"], ["#E67451", "Sunrise"], ["#6CBB3C", "Green"],
	["#85BB65", "Dollar"], ["#6D7B8D", "Light"], ["#4AA02C", "Spring"], ["#646D7E", "Mist"], ["#C88141", "Tiger"], ["#F9966B", "Light"], ["#E42217", "Lava"], ["#FFF8DC", "Cornsilk"],
	["#8EEBEC", "Blue"], ["#C2DFFF", "Sea"], ["#954535", "Chestnut"], ["#B041FF", "Purple"], ["#000080", "Navy"], ["#E3319D", "Dimorphotheca"], ["#437C17", "Seaweed"], ["#8D38C9", "Violet"],
	["#6CC417", "Alien"], ["#B5EAAA", "Green"], ["#8467D7", "Medium"], ["#50EBEC", "Celeste"], ["#EAC117", "Golden"], ["#FFFF00", "Yellow"], ["#1569C7", "Blue"], ["#E238EC", "Crimson"],
	["#0041C2", "Blueberry"], ["#CC6600", "Sedona"], ["#7D0541", "Plum"], ["#98AFC7", "Blue"], ["#EDC9AF", "Desert"], ["#79BAEC", "Denim"], ["#E0FFFF", "Light"], ["#EE9A4D", "Sandy"],
	["#357EC7", "Windows"], ["#C24641", "Cherry"], ["#786D5F", "Sandstone"], ["#6AFB92", "Dragon"], ["#98FF98", "Mint"], ["#5FFB17", "Emerald"], ["#E38AAE", "Cadillac"], ["#7BCCB5", "Blue"],
	["#E3E4FA", "Lavender"], ["#FCDFFF", "Cotton"], ["#3B9C9C", "Dark"], ["#B5A642", "Brass"], ["#CA226B", "Medium"], ["#FAAFBA", "Light"], ["#7E3517", "Blood"], ["#3BB9FF", "Deep"],
	["#B7CEEC", "Blue"], ["#728FCE", "Light"], ["#C48189", "Pink"], ["#F62217", "Ruby"], ["#FFE87C", "Sun"], ["#95B9C7", "Baby"], ["#C38EC7", "Purple"], ["#438D80", "Sea"],
	["#59E817", "Nebula"], ["#EBDDE2", "Lavender"], ["#4B0082", "Indigo"], ["#AF9B60", "Bullet"], ["#616D7E", "Jet"], ["#C12267", "Burnt"], ["#8AFB17", "Chartreuse"], ["#B38481", "Rosy"],
	["#CCFB5D", "Tea"], ["#F88158", "Basket"], ["#00FF00", "Green"], ["#2B547E", "Blue"], ["#0000A0", "Earth"], ["#D4A017", "Orange"], ["#151B54", "Midnight"], ["#E8ADAA", "Rose"],
	["#C6DEFF", "Powder"], ["#48CCCD", "Medium"], ["#CFECEC", "Pale"], ["#7D1B7E", "Dark"], ["#E56717", "Papaya"], ["#6495ED", "Cornflower"], ["#FDD7E4", "Pig"], ["#7F525D", "Dull"],
	["#7FE817", "Hummingbird"], ["#C85A17", "Chocolate"], ["#667C26", "Fern"], ["#9E7BFF", "Purple"], ["#FBB917", "Saffron"], ["#E77471", "Light"], ["#254117", "Dark"], ["#EDDA74", "Goldenrod"],
	["#F433FF", "Bright"], ["#E9AB17", "Bee"], ["#ECC5C0", "Rose"], ["#2B60DE", "Royal"], ["#C48793", "Lipstick"], ["#F9A7B0", "Flamingo"], ["#FF2400", "Scarlet"], ["#737CA1", "Slate"],
	["#57FEFF", "Blue"], ["#38ACEC", "Butterfly"], ["#43C6DB", "Turquoise"], ["#BCC6CC", "Metallic"], ["#C04000", "Mahogany"], ["#EBF4FA", "Water"], ["#4E9258", "Forest"],
	["#E41B17", "Love"], ["#DEB887", "BurlyWood"], ["#FFE5B4", "Peach"], ["#BDEDFF", "Robin"], ["#347C17", "Shamrock"], ["#461B7E", "Purple"], ["#566D7E", "Marble"], ["#FBF6D9", "Blonde"],
	["#78866B", "Camouflage"], ["#F535AA", "Neon"], ["#C2B280", "Sand"], ["#8A4117", "Sienna"], ["#E55B3C", "Shocking"], ["#C6AEC7", "Wisteria"], ["#347235", "Medium"], ["#FFFFCC", "Cream"],
	["#ADA96E", "Khaki"], ["#F2BB66", "Macaroni"], ["#4E387E", "Purple"], ["#B2C248", "Avocado"], ["#E45E9D", "Pink"], ["#F88017", "Dark"], ["#5EFB6E", "Jade"], ["#FBB117", "Beer"],
	["#C7A317", "Cookie"], ["#89C35C", "Green"], ["#827B60", "Army"], ["#FBBBB9", "Misty"], ["#F0F8FF", "AliceBlue"], ["#87F717", "Lawn"], ["#7F38EC", "Lovely"], ["#FF00FF", "Magenta"],
	["#C68E17", "Caramel"], ["#3EA055", "Clover"], ["#6698FF", "Sky"], ["#C11B17", "Chilli"], ["#D2B9D3", "Thistle"], ["#E66C2C", "Halloween"], ["#E799A3", "Pink"], ["#A0CFEC", "Jeans"],
	["#FDEEF4", "Pearl"], ["#5CB3FF", "Crystal"], ["#B4CFEC", "Pastel"], ["#2B3856", "Dark"], ["#F6358A", "Violet"], ["#FFA62F", "Cantaloupe"], ["#F62817", "Fire"], ["#4E8975", "Sea"],
	["#9AFEFF", "Electric"], ["#157DEC", "Blue"], ["#6F4E37", "Coffee"], ["#9CB071", "Iguana"], ["#52D017", "Yellow"], ["#87AFC7", "Columbia"], ["#C3FDB8", "Light"], ["#7A5DC7", "Purple"],
	["#E7A1B0", "Pink"], ["#57E964", "Stoplight"], ["#008080", "Teal"], ["#BCE954", "Slime"], ["#368BC1", "Glacial"], ["#5E7D7E", "Grayish"], ["#659EC7", "Blue"], ["#306754", "Medium"],
	["#FFEBCD", "BlanchedAlmond"], ["#F660AB", "Hot"], ["#347C2C", "Jungle"], ["#E4287C", "Pink"], ["#990012", "Red"], ["#B87333", "Copper"], ["#348781", "Medium"], ["#614051", "Eggplant"],
	["#FFFFC2", "Parchment"], ["#307D7E", "Greenish"], ["#64E986", "Algae"], ["#15317E", "Lapis"], ["#0020C2", "Cobalt"], ["#FFF8C6", "Lemon"], ["#306EFF", "Blue"], ["#C25A7C", "Tulip"],
	["#8E35EF", "Purple"], ["#82CAFF", "Day"], ["#657383", "Slate"], ["#C5908E", "Khaki"], ["#CD7F32", "Bronze"], ["#FFDB58", "Mustard"], ["#00FFFF", "Cyan"], ["#827839", "Moccasin"],
	["#E6A9EC", "Blush"], ["#AFDCEC", "Coral"], ["#B93B8F", "Plum"], ["#77BFC7", "Blue"], ["#6AA121", "Green"], ["#E0B0FF", "Mauve"], ["#92C7C7", "Cyan"], ["#9F000F", "Cranberry"],
	["#F9B7FF", "Blossom"], ["#FFF5EE", "SeaShell"], ["#DC381F", "Grapefruit"], ["#F7E7CE", "Champagne"], ["#842DCE", "Dark"], ["#C12283", "Dark"], ["#348017", "Medium"], ["#56A5EC", "Iceberg"],
	["#151B8D", "Denim"], ["#736AFF", "Light"], ["#99C68E", "Frog"], ["#1F45FC", "Blue"], ["#4C787E", "Beetle"], ["#C19A6B", "Camel"], ["#2554C7", "Sapphire"],
	["#FAAFBE", "Pink"], ["#A1C935", "Salad"], ["#C45AEC", "Tyrian"], ["#C34A2C", "Chestnut"], ["#ADDFFF", "Light"], ["#F778A1", "Carnation"], ["#9DC209", "Pistachio"],
	["#6A287E", "Purple"], ["#C58917", "Cinnamon"], ["#7E354D", "Velvet"], ["#893BFF", "Aztech"], ["#8C001A", "Burgundy"], ["#54C571", "Zombie"],
	["#C8B560", "Fall"], ["#7FFFD4", "Aquamarine"], ["#810541", "Maroon"], ["#7F4E52", "Rosy"], ["#3EA99F", "Light"], ["#CCFFFF", "Light"], ["#4EE2EC", "Blue"], ["#571B7E", "Purple"],
	["#493D26", "Mocha"], ["#E55451", "Valentine"], ["#E9CFEC", "Periwinkle"], ["#82CAFA", "Light"], ["#F70D1A", "Ferrari"], ["#617C58", "Hazel"], ["#6C2DC7", "Purple"], ["#FFD801", "Rubber"],
	["#7F5217", "Red"], ["#FF8040", "Mango"], ["#483C32", "Taupe"], ["#C35817", "Red"], ["#E18B6B", "Dark"], ["#583759", "Plum"], ["#342D7E", "Blue"], ["#AF7817", "Dark"], ["#7D0552", "Plum"],
	["#FFF380", "Corn"], ["#F87431", "Construction"], ["#806517", "Oak"], ["#43BFC7", "Macaw"], ["#848b79", "Sage"], ["#F75D59", "Bean"], ["#B048B5", "Medium"], ["#78C7C7", "Northern"],
	["#488AC7", "Silk"], ["#FF7F50", "Coral"], ["#6960EC", "Blue"], ["#5E5A80", "Grape"], ["#F52887", "Deep"], ["#966F33", "Wood"], ["#800517", "Firebrick"], ["#E2A76F", "Brown"],
	["#C9BE62", "Ginger"], ["#FC6C85", "Watermelon"], ["#EDE275", "Harvest"], ["#E8A317", "School"], ["#F3E5AB", "Vanilla"], ["#FDD017", "Bright"], ["#728C00", "Venom"], ["#FFDFDD", "Pink"],
	["#C25283", "Bashful"], ["#8BB381", "Dark"], ["#93FFE8", "Light"], ["#7DFDFE", "Tron"], ["#A74AC7", "Purple"], ["#7E3817", "Sangria"], ["#F87217", "Pumpkin"], ["#9172EC", "Crocus"],
	["#F5F5DC", "Beige"], ["#41A317", "Lime"], ["#C47451", "Orange"], ["#C12869", "Rogue"], ["#4CC552", "Kelly"], ["#C8A2C8", "Lilac"], ["#4CC417", "Green"], ["#FFCBA4", "Deep"],
	["#7F462C", "Sepia"], ["#C36241", "Rust"], ["#E56E94", "Blush"], ["#1589FF", "Dodger"], ["#835C3B", "Brown"], ["#A23BEC", "Jasmine"], ["#2B65EC", "Ocean"], ["#ECE5B6", "Tan"]
];


//const API_ENDPOINT = `https://api.canonn.tech`;
const API_ENDPOINT = 'https://us-central1-canonn-api-236217.cloudfunctions.net/query/codex'
const API_LIMIT = 1000;
function getURLParameter(name) {
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}
let urlParams = {
	sub_class: "",
	hud_category: "",
	english_name: "",
	system: ""
}
function signalLink(system, name) {
	return '<a href="https://tools.canonn.tech/signals?system=' + system + '"  target="_blank">' + name + '</a></br>'
}

const capi = axios.create({
	baseURL: API_ENDPOINT,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},
});

const go = async types => {
	const keys = Object.keys(types);
	return (await Promise.all(
		keys.map(type => getSites(type))
	)).reduce((acc, res, i) => {
		acc[keys[i]] = res;
		return acc;
	}, {});
};

const getSites = async type => {
	let records = [];
	let keepGoing = true;
	let API_START = 0;
	while (keepGoing) {
		let response = await reqSites(API_START, type);
		await records.push.apply(records, response.data); //TODO this expects data to be array of stuff but we get objects with hierarchys
		//console.log(response, records)
		API_START += API_LIMIT;
		if (!response.data || response.data.length < API_LIMIT) {
			keepGoing = false;
			return records;
		}
	}
};

const reqSites = async (API_START, type) => {
	if (type.indexOf('?')<0) type+='?'
	else type+='&'
	let payload = await capi({
		url: `/${type}_limit=${API_LIMIT}&_start=${API_START}`,
		method: 'get'
	});
	return payload;
};

var canonnEd3d_biogeocombo = {
	//Define Categories
	systemsData: {
		categories: {
			'Unknown Biology Signals': {
				'Signals': {
					name: 'Biology Surface Scan',
					color: colours[0][0].replace('#', ''),
				}
			}
		},
		systems: [],
	},

	formatSites: async function (data, resolvePromise) {
		//grabbing categories from /ref api
		/*
    "2401013": {
        "category": "$Codex_Category_Biology;",
        "english_name": "E01-Type Anomaly",
        "entryid": 2401013,
        "hud_category": "Anomaly",
        "name": "$Codex_Ent_L_Phn_Part_Cld_013_Name;",
        "platform": "legacy",
        "sub_category": "$Codex_SubCategory_Geology_and_Anomalies;",
        "sub_class": "E-Type Anomaly"
    },
	OR hud_category > sub_class > english_name hierarchy:
	"Anomaly": {
        "E-Type Anomaly": {
            "E01-Type Anomaly": {
                "category": "$Codex_Category_Biology;",
                "entryid": 2401013,
                "name": "$Codex_Ent_L_Phn_Part_Cld_013_Name;",
                "platform": "legacy",
                "sub_category": "$Codex_SubCategory_Geology_and_Anomalies;"
            },
		*/
		site_type_data = await capi({
			url: "/ref?hierarchy=1",
			method: 'get'
		});
		let menu_blacklist = ['Anomaly', 'Cloud', 'Guardian', 'None', 'Thargoid', 'Tourist']
		let hierarchy_data = site_type_data.data;
		let rootmenu = $('#biogeo-combo');
		//main menu for hud_category
		let hudmenu = $(`<ul>`)
		for (let hud_category in hierarchy_data) {
			if (menu_blacklist.includes(hud_category)) continue
			let huditem = $(`<li class="has-sub">`)
			huditem.append(`<a href="biogeo-combo.html?hud_category=${hud_category}"> <i class="fa fa-fw fa-bars"></i> ${hud_category}</a>`);
			//submenu for sub_class
			let submenu = $(`<ul>`)
			let subitem;
			for (let sub_class in hierarchy_data[hud_category]) {
				subitem = $(`<li>`);
				subitem.append(`<a href="biogeo-combo.html?hud_category=${hud_category}&sub_class=${sub_class}">${sub_class}</a>`)
				//submenu2 for english_name
				let namemenu = $(`<ul>`)
				let nameitem;
				for (let english_name in hierarchy_data[hud_category][sub_class]) {
					nameitem = $(`<li>`);
					nameitem.append(`<a href="biogeo-combo.html?hud_category=${hud_category}&sub_class=${sub_class}&english_name=${english_name}">${english_name}</a>`)
				}
				//avoid 1 subitem, link directly
				if (Object.keys(hierarchy_data[hud_category]).length > 1) {
					subitem.append(namemenu)
					submenu.append(subitem)
				} else {
					submenu.append(nameitem)
				}
			}
			//avoid 1 subitem, link directly
			if (Object.keys(hierarchy_data[hud_category]).length > 1) {
				huditem.append(submenu)
				hudmenu.append(huditem)
			} else {
				hudmenu.append(subitem)
			}
		}
		rootmenu.append(hudmenu)

		//get current url params and pass whitelist into API
		let queryParams = {}
		for (let p in urlParams) {
			let v = getURLParameter(p)
			if (v) queryParams[p] = v
		}
		console.log(queryParams)
		let query = "systems";
		try {
			query += '?'+$.param(queryParams);
			console.log(query)
		} catch (e) {
			console.log("Error creating queryParams for API: " + e)
		}
		let sites = await getSites(query);
		//let siteTypes = Object.keys(hierarchy_data);
		console.log("sites", sites)

		categories = {}
		subcategories = {}
		for (let i = 0; i < siteTypes.length; i++) {
			for (let d = 0; d < sites[siteTypes[i]].length; d++) {
				let siteData = sites[siteTypes[i]];



				if (siteData[d].system.systemName && siteData[d].system.systemName.replace(' ', '').length > 1) {

					let category = siteInfo[siteTypes[i]]
					subcategory = siteData[d].type.type

					if (!categories[category]) {
						categories[category] = {}
					}
					if (!subcategories[subcategory]) {
						subcategories[subcategory] = {}
						colourkey = Object.keys(subcategories).length
						categories[category][subcategory] = { name: subcategory, color: colours[colourkey][0].replace('#', '') }
					}

					var poiSite = {};
					poiSite['name'] = siteData[d].system.systemName;
					poiSite['infos'] = signalLink(siteData[d].system.systemName, siteData[d].type.type);
					poiSite['cat'] = [subcategory];

					poiSite['coords'] = {
						x: parseFloat(siteData[d].system.edsmCoordX),
						y: parseFloat(siteData[d].system.edsmCoordY),
						z: parseFloat(siteData[d].system.edsmCoordZ),
					};

					// We can then push the site to the object that stores all systems
					canonnEd3d_biogeocombo.systemsData.systems.push(poiSite);
				}
			}
		}

		canonnEd3d_biogeocombo.systemsData.categories = Object.assign({}, canonnEd3d_biogeocombo.systemsData.categories, categories);
		resolvePromise();
	},

	formatCol: function (data) {
		//Here you format POI & Gnosis JSON to ED3D acceptable object


		// this is assuming data is an array []
		for (var i = 0; i < data.length; i++) {
			var poiSite = {};

			poiSite['name'] = data[i].system;
			poiSite['infos'] = '<a href="https://tools.canonn.tech/signals?system=' + data[i].system + '" target="_blank">Unscanned Biology Signal</a>'

			//Check Site Type and match categories

			poiSite['cat'] = ['Signals'];

			poiSite['coords'] = {
				x: parseFloat(data[i].x),
				y: parseFloat(data[i].y),
				z: parseFloat(data[i].z),
			};

			// We can then push the site to the object that stores all systems
			canonnEd3d_biogeocombo.systemsData.systems.push(poiSite);

		}
	},

	parseCodex: function (url, callBack, resolvePromise) {
		let fetchDataFromApi = async (url, resolvePromise) => {
			let response = await fetch(url);
			let result = await response.json();
			callBack(result)
			resolvePromise();
			return result;
		}
		fetchDataFromApi(url, resolvePromise)

		//console.log(data)

	},
	init: function () {

		var p1 = new Promise(function (resolve, reject) {
			canonnEd3d_biogeocombo.parseCodex('https://us-central1-canonn-api-236217.cloudfunctions.net/query/codex/ref', canonnEd3d_biogeocombo.formatSites, resolve);
		});

		Promise.all([p1]).then(function () {
			document.getElementById("loading").style.display = "none";
			Ed3d.init({
				container: 'edmap',
				json: canonnEd3d_biogeocombo.systemsData,
				withFullscreenToggle: false,
				withHudPanel: true,
				hudMultipleSelect: true,
				effectScaleSystem: [20, 500],
				startAnim: false,
				showGalaxyInfos: true,
				cameraPos: [25, 14100, -12900],
				systemColor: '#FF9D00',
			});
		});
	},
};

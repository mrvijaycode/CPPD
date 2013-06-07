var strUrl = "http://teamspace.pg.com/sites/cppdpolicy";
var splists = new SPAPI_Lists(strUrl);
var spUserInformation = new SPAPI_UserGroup(strUrl);
var strLibName = '';
var sQuery = "<Query><OrderBy><FieldRef Name='Title' Ascending='True' /></OrderBy></Query>";
var strTitle = "No Title";
var queryFolder = '';
var nodocs = "No documents are available for this Topic..";
var IsHomeContent = "";
var strCategory = "";
var sCont = '';
//var STRLISTNAME = "Categories";
var STRCPPDHOME = "CPPDHome";
//var STRCPPDCATEGORY = "CPPDCategory";

//To load left navigation menu
function getLeftNavIndex(STRLISTNAME) {
	//LeftNavIndex
	//debugger
	if (STRLISTNAME.indexOf("&") > -1) {
		STRLISTNAME = STRLISTNAME.replace(/&/g, "&amp;");
	}
	
	if (document.getElementById("divfrmWord")) {
		document.getElementById("divfrmWord").style.display = 'none';
	}
	
	if (document.getElementById("divfrmBack")) {
		document.getElementById("divfrmBack").style.display = 'none';
	}
	

	if (document.getElementById("homeRef").value == "") {
		//document.getElementById("homeRef").value = window.location.search.split("?cat=")[1];
		document.getElementById("homeRef").value = window.location.search.split("?cat=")[1].split('&')[0];
	}
	strCategory = document.getElementById("homeRef").value;
	strCategory =unescape(strCategory);
	
	var strLeftNavIndex = "";
	strLeftNavIndex += "<table   border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\"180\" valign=\"top\"><img src=\"http://teamspace.pg.com/sites/cppdpolicy/images1/left_nav_heading.jpg\" width=\"245\" height=\"37\" /></td></tr></table>";
	//strLeftNavIndex += "<Table  class=\"leftnav_bg\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" ><tr><td>";
	var sQuery = "<Query><OrderBy><FieldRef Name='Title' Ascending='True' /></OrderBy></Query>";
	var oWs = splists.getListItems(STRLISTNAME, "", sQuery, "", "", '', "");
	
	strLeftNavIndex += "<div id='leftlinks'>";
	
	strLeftNavIndex += "<table width=\"100\" class=\"leftnav_bg\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" >";
	
	if (oWs.status == 200) {
		var rows = oWs.responseXML.getElementsByTagName('z:row');
		if (rows.length > 0) {
			for (var i = 0; i < rows.length; i++) {
				var strItemID = rows[i].getAttribute('ows_ID');
				var strTitle = rows[i].getAttribute('ows_Title');
				var strCurrentItemURL = strUrl + "/Lists/LeftNavIndex/DispForm.aspx?ID=" + strItemID + "&Source=" + window.location.href;
				
				strLeftNavIndex += "<tr>";
				strLeftNavIndex += "<td>";
				//strLeftNavIndex += "<a href=\"JavaScript:loaddoc('" + strTitle + "')\" style='text-Decoration:None'>";
				strLeftNavIndex += "<a href=\"http://teamspace.pg.com/sites/cppdpolicy/WPPages/Contents.aspx?cat="+escape(strCategory)+"&lib="+escape(strTitle)+"\" style='text-Decoration:None'>";
				strLeftNavIndex += "<div>" + ValidateLength(strTitle) + "</div></a>";
				
				strLeftNavIndex += "</td>";
				strLeftNavIndex += "</tr>";
				
				strLeftNavIndex += "<tr>";
				strLeftNavIndex += "<td valign=\"top\" style=\"padding:0 0 0 6px; height: 4px;\"><img src=\"http://teamspace.pg.com/sites/cppdpolicy/images1/left_nav_div.png\" width=\"220\" height=\"4\"/></td>";
				strLeftNavIndex += "</tr>";
			}
		}
	}
	//add menu ending image
	strLeftNavIndex += "<div valign=\"top\" class=\"leftnav_btmbg\">&nbsp;</div>";
	
	strLeftNavIndex += "</table></div>";
	
	if (document.getElementById("divLeftNavIndex")) {
		document.getElementById("divLeftNavIndex").innerHTML = strLeftNavIndex;
	}
}

function loadPresentations() {
	getContents('Presentations');
}

//to back to landing page
function loadHomeRef() {
//debugger
	sQuery = "<Query><OrderBy><FieldRef Name='Title' Ascending='True' /></OrderBy></Query>";
	loadHome();
}

function GetTitleContactDetails(SCtry) {
	//debugger
	var sQry = "<Query><OrderBy><FieldRef Name='ID' /></OrderBy><Where><Eq><FieldRef Name='Home_x0020_Link' /><Value Type='Lookup'>" + SCtry + "</Value></Eq></Where></Query>"
		var res = splists.getListItems('HomeLinksTitle', '', sQry, '', '', '', '');
	//alert(res.responseText);
	var Cont_rows = res.responseXML.getElementsByTagName('z:row');
	if (Cont_rows.length > 0) {
		if (Cont_rows[0].getAttribute('ows_Title'))
			var sPhone = Cont_rows[0].getAttribute('ows_Title');
		if (Cont_rows[0].getAttribute('ows_User_x0020_Name'))
			var sUserName = Cont_rows[0].getAttribute('ows_User_x0020_Name').substring(Cont_rows[0].getAttribute('ows_User_x0020_Name').lastIndexOf('#') + 1); ;
		if (Cont_rows[0].getAttribute('ows_Work_x0020_email'))
			var sEmail = Cont_rows[0].getAttribute('ows_Work_x0020_email').substring(Cont_rows[0].getAttribute('ows_Work_x0020_email').lastIndexOf('#') + 1); ;
		if (Cont_rows[0].getAttribute('ows_Description'))
			var sDescription = Cont_rows[0].getAttribute('ows_Description');
		// if(sDescription.indexOf('.'))
		// 	sDescription = sDescription.split('.')
		// var newscreated = news_rows[i].getAttribute('ows_Author').substring(news_rows[i].getAttribute('ows_Author').lastIndexOf('#')+1);
		//var Bunit = news_rows[i].getAttribute('ows_Business_x0020_Unit').substring(news_rows[i].getAttribute('ows_Business_x0020_Unit').lastIndexOf('#')+1)
		SCtry = unescape(SCtry);
		if (SCtry == 'Canada G2M Standard Index') {
			sCont = '<p><b><font size="2" color="#C95100">' + sDescription + ' ' + sUserName + ' at <a href="mailto:' + sEmail + '">' + sEmail + '</a> or at ' +
				'' + sPhone + '.&nbsp; </font></b></p>' +
				'<p><b><font size="2" color="#C95100">Thanks..</font></b></p>';
		} else {
			sCont = '<p><b><font size="2" color="#C95100">' + sDescription + '</font></b></p>';
		}
	}
}

function getReqType() {
	//debugger
	if (window.location.search.split("?cat=")[1].split('&lib=')[1]=="00") {
		//alert('First');
		loadHome();
	} else if (window.location.search.split("?cat=")[1].split('&lib=')[1]!="00") {
		//alert('Inner');
		callLib();
	} else {
		//alert('No ref');
		loadHome();
	}
}

function callLib()
{
var strLibrary=window.location.search.split("?cat=")[1].split('&lib=')[1];
	strLibrary=unescape(strLibrary);
loaddoc(strLibrary);
}

//To load home page contents
function loadHome() {
	//alert(window.location.search.split("?cat=")[1]);
	//alert('Vijay')
	//debugger

	document.getElementById("divMainLink").style.display = "none";
	strLibName = STRCPPDHOME;
	nodocs = "No documents are available for this Section..";
	IsHomeContent = "Y";
	
	if (document.getElementById("homeRef").value == "") {
		//document.getElementById("homeRef").value = window.location.search.split("?cat=")[1];
		document.getElementById("homeRef").value = window.location.search.split("?cat=")[1].split('&')[0];
	}
	strCategory = document.getElementById("homeRef").value;
	queryFolder = "<QueryOptions><Folder>CPPDHome/" + unescape(strCategory) + "</Folder></QueryOptions>";
	
	strCategory = unescape(strCategory);
	var strCategoryT = strCategory.replace(/%20/g, " ");
	
	switch (strCategoryT) {
	case 'onboarding':
		strTitle = "Onboarding";
		break;
		
	case 'FPM':
		strTitle = "FPM";
		break;
		
	case 'CPPD R Chart':
		strTitle = "CP&PD \"R\" Chart";
		break;
		
	case '11-12 Trade Funds':
		strTitle = '11/12 Trade Funds';
		break;
		
	case '12-13 Trade Funds':
		strTitle = "12/13 Trade Funds";
		break;

	case '13-14 Trade Funds':
		strTitle = "13/14 Trade Funds";
		break;
		
	case '14-15 Trade Funds':
		strTitle = "14/15 Trade Funds";
		break;

	case '15-16 Trade Funds':
		strTitle = "15/16 Trade Funds";
		break;
	
	case 'Integrated Prod Transition(iPTI)':
		strTitle = 'Integrated Prod Transition(iPTI)';
		break;
		
	case 'IPTL':
		strTitle = "Integrated Prod Transition (iPTl)";
		break;
		
	case 'USPR':
		strTitle = 'US & PR Standard Index';
		GetTitleContactDetails(strCategory);
		nodocs = sCont;
		break;
		
	case 'Contracts':
		strTitle = 'Contracts';
		break;
		
	case 'CDA':
		strTitle = 'CDA';
		break;
		
	case 'Policy and Legal Training':
		strTitle = 'Policy and Legal Training';
		break;
		
	case 'Logistics':
		strTitle = 'Logistics';
		break;
	case 'Canada G2M Standard Index':
		strTitle = 'Canada G2M Standard Index';
		GetTitleContactDetails(strCategory);
		nodocs = sCont;
		break;
	default:
		strTitle = "No Title";
	}
	document.getElementById("divMainLink").innerHTML = strTitle;
	getContents(strLibName);
}

//To load selected menu documents
function loaddoc(MapId) {
	//alert(MapId);
	//debugger
	if (MapId.indexOf("&") > -1) {
		MapId = MapId.replace(/&/g, "&amp;");
	}
	strLibName = document.getElementById('divref').innerText;
	document.getElementById("divMainLink").style.display = "block";
	switch (strLibName) {
	case 'CPPDCategory':
		
		var Topic = document.getElementById("homeRef").value;
		//alert(Topic);
		var country = "US";
		//alert("Before: "+country);
		Topic = unescape(Topic);
		if (Topic == "Canada G2M Standard Index") {
			country = "CANADA";
			//alert("After: "+country);
		}
		sQuery = "<Query>" +
			"<Where>" +
			"<And>" +
			"<Contains>" +
			"<FieldRef Name='Standard' />" +
			"<Value Type='LookupMulti'>" + unescape(MapId) + "</Value>" +
			"</Contains>" +
			"<Contains>" +
			"<FieldRef Name='Country' />" +
			"<Value Type='MultiChoice'>" + country + "</Value>" +
			"</Contains>" +
			"</And>" +
			"</Where>" +
			"<OrderBy>" +
			"<FieldRef Name='Order0' />" +
			"</OrderBy>" +
			"</Query>";
		//alert(sQuery);
		nodocs = "No documents are available for this Topic..";
		IsHomeContent = 'N';
		break;
	case 'GUIDELINESPRINCIPLES':
		sQuery = "<Query><Where><Eq><FieldRef Name='Section' /><Value Type='Lookup'>" + unescape(MapId) + "</Value></Eq></Where><OrderBy><FieldRef Name='Title' Ascending='True' /></OrderBy></Query>";
		nodocs = "No documents are available for this Topic..";
		break;
	default:
		strLibName = '';
	}
	queryFolder = '';
	strTitle = unescape(MapId);
	getContents(strLibName);
}

function GetHomeCategory(strFolder) {
	//alert(strFolder);
	strLibrary = 'CPPDCategory';
	var strContents = "";
	var strCategoryT = strFolder.replace(/%20/g, " ");
	//sQuery = '<Query><Where><Eq><FieldRef Name="Home" /><Value Type="Lookup">' + strCategoryT+ '</Value></Eq></Where></Query>';
	//	sQuery = '<Query><Where><Contains><FieldRef Name="Home" /><Value Type="LookupMulti">' + strCategoryT + '</Value></Contains></Where></Query>';
	sQuery = '<Query><Where><Contains><FieldRef Name="Home" /><Value Type="LookupMulti">' + strCategoryT + '</Value></Contains></Where><OrderBy><FieldRef Name="Order0" Ascending="True" /></OrderBy></Query>';
	//var strViewFields = "<ViewFields><FieldRef Name='BaseName' /><FieldRef Name='FileRef' /></ViewFields>";
	var strViewFields = "<ViewFields><FieldRef Name='Title' /><FieldRef Name='FileRef' /></ViewFields>";
	var oWs = splists.getListItems(strLibrary, "", sQuery, strViewFields, "", '', "");
	if (oWs.status == 200) {
		var docs = oWs.responseXML.getElementsByTagName('z:row');
		if (docs.length > 0) {
			flag = true;
			for (var j = 0; j < docs.length; j++) {
				var strFileName = docs[j].getAttribute('ows_Title');
				var strResult = docs[j].getAttribute('ows_FileRef');
				strResult = strResult.split("#", strUrl.length)[1];
				var strDocUrl = "http://teamspace.pg.com" + "/" + strResult;
				strContents += "<tr>";
				strContents += "<td class=\"body_bluelinks\">";
				strContents += "<div style=\"padding-left:10px\"><img src=\"http://teamspace.pg.com/sites/cppdpolicy/Images1/org_arw.png\">"
				strContents += "<a title='" + strFileName + "' style=\"padding-left:5px\" href=\"JavaScript:Opendoc('" + strDocUrl + "')\">" + strFileName + "</a>";
				strContents += "</div></td>";
				strContents += "</tr>";
			}
		}
	}
	return strContents;
}

var flag = false;
//To load content on the dashboard
function getContents(strLibrary) {
	//debugger
	if (document.getElementById("divContents")) {
		document.getElementById("divContents").style.display = '';
	}
	if (document.getElementById("frmWord")) {
		document.getElementById("frmWord").src = '';
	}
	
	if (document.getElementById("divfrmWord")) {
		document.getElementById("divfrmWord").style.display = 'none';
	}
	
	if (document.getElementById("divfrmBack")) {
		document.getElementById("divfrmBack").style.display = 'none';
	}
	
	var strContents = "";
	var strViewFields = "<ViewFields><FieldRef Name='Title' /><FieldRef Name='Group' /><FieldRef Name='FileRef' /></ViewFields>";
	
	strContents += "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";
	strContents += "<tr><td colspan=\"2\">";
	
	strContents += "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"
	strContents += "<tr>"
	strContents += "<td valign=\"top\"><img src=\"http://teamspace.pg.com/sites/cppdpolicy/images1/gray_heading_lft.jpg\" width=\"8\" height=\"37\" /></td>"
	strContents += "<td valign=\"top\" class=\"body_heading\">" + strTitle + "</td>"
	strContents += "<td valign=\"top\"><img src=\"http://teamspace.pg.com/sites/cppdpolicy/images1/gray_heading_rt.jpg\" width=\"8\" height=\"37\" /></td>"
	strContents += "</tr>"
	strContents += "</table>"
	
	strContents += "</td></tr>"
	
	//	alert(queryFolder+"--"+STRLIBNAME);
	var oWs = splists.getListItems(strLibrary, "", sQuery, strViewFields, "", queryFolder, "");
	var Links = new Array();
	var groups = new Array();
	var xmlcode = new Array();
	var LinksCount = 0;
	var groupsCount = 0;
	if (oWs.status == 200) {
		
		try {
			//alert(IsHomeContent);
			if (IsHomeContent == 'Y') {
				strContents += GetHomeCategory(strCategory);
			}
			var docs = oWs.responseXML.getElementsByTagName('z:row');
			if (docs.length > 0) { // alert(docs.length);
				for (var j = 0; j < docs.length; j++) {
					//alert('ok');
					//var strFileName = docs[j].getAttribute('ows_BaseName');
					var strFileName = docs[j].getAttribute('ows_Title');
					var strResult = docs[j].getAttribute('ows_FileRef');
					
					strResult = strResult.split("#", strUrl.length)[1];
					var strDocUrl = "http://teamspace.pg.com" + "/" + strResult;
					
					if (docs[j].getAttribute('ows_Group') == null) {
						Links[LinksCount] = "<a title='" + strFileName + "' style=\"padding-left:5px\" href=\"JavaScript:Opendoc('" + strDocUrl + "')\">" + strFileName + "</a>";
						LinksCount++;
					} else {
						groups[groupsCount] = docs[j].getAttribute('ows_Group');
						xmlcode[groupsCount] = docs[j].xml;
						groupsCount++;
					}
				}
			} else if (!flag) {
				strContents += "<Tr>";
				strContents += "<td valign=\"top\" class=\"body_bluelinks\" style=\"padding-left:20px\">";
				strContents += nodocs;
				strContents += "</Td>";
				strContents += "</Tr>";
			}
		} catch (er) {
			alert(er);
		}
	}
	if (Links.length > 0) {
		strContents += "</Tr>";
		strContents += "<td valign=\"top\" style=\"padding: 10px 10px 5px 20px;\">";
		strContents += "STANDARDS";
		strContents += "</Td>";
		strContents += "<Tr>";
	}
	for (var i = 0; i < Links.length; i++) {
		strContents += "<tr>";
		strContents += "<td class=\"body_bluelinks\">";
		strContents += "<div style=\"padding-left:10px\"><img src=\"http://teamspace.pg.com/sites/cppdpolicy/Images1/org_arw.png\">"
		strContents += Links[i];
		strContents += "</div></td>";
		strContents += "</tr>";
	}
	
	groups = unique(groups); //Get distinct values
	
	for (var i = 0; i < groups.length; i++) {
		
		strContents += "<tr>";
		strContents += "<td valign=\"top\" style=\"padding: 20px 20px 5px 20px;\">";
		strContents += groups[i];
		strContents += "</td>";
		strContents += "</tr>";
		
		for (var k = 0; k < xmlcode.length; k++) {
			var doc = StringtoXML(xmlcode[k]);
			var groupName = doc.getElementsByTagName('z:row')[0].getAttribute('ows_Group');
			if (groupName == groups[i]) {
				var strFileName = doc.getElementsByTagName('z:row')[0].getAttribute('ows_Title');
				var strResult = doc.getElementsByTagName('z:row')[0].getAttribute('ows_FileRef');
				
				strResult = strResult.split("#", strUrl.length)[1];
				
				var strDocUrl = "http://teamspace.pg.com" + "/" + strResult;
				strContents += "<tr>";
				strContents += "<td class=\"body_bluelinks\">";
				strContents += "<div style=\"padding-left:10px\"><img src=\"http://teamspace.pg.com/sites/cppdpolicy/Images1/org_arw.png\">"
				strContents += "<a title='" + strFileName + "' style=\"padding-left:5px\" href=\"JavaScript:Opendoc('" + strDocUrl + "')\">" + strFileName + "</a>";
				strContents += "</div></td>";
				strContents += "</tr>";
			}
		}
	}
	strContents += "</Table>";
	if (document.getElementById("divContents")) {
		document.getElementById("divContents").innerHTML = strContents;
	}
}

//to get distinct values in an Arrary
var unique = function (origArr) {
	var newArr = [],
	origLen = origArr.length,
	found,
	x,
	y;
	for (x = 0; x < origLen; x++) {
		found = undefined;
		for (y = 0; y < newArr.length; y++) {
			if (origArr[x] === newArr[y]) {
				found = true;
				break;
			}
		}
		if (!found)
			newArr.push(origArr[x]);
	}
	return newArr;
};

//to convert string to XML
function StringtoXML(text) {
	if (window.ActiveXObject) {
		var doc = new ActiveXObject('Microsoft.XMLDOM');
		doc.async = 'false';
		doc.loadXML(text);
	} else {
		var parser = new DOMParser();
		var doc = parser.parseFromString(text, 'text/xml');
	}
	return doc;
}

//To open document in Iframe
function Opendoc(strDoc) {
	//alert(strDoc);
	//alert(document.getElementById("frmWord").src);
	document.getElementById("divContents").style.display = 'none';
	document.getElementById("frmWord").width = '100%'
		document.getElementById("frmWord").src = strDoc;
	document.getElementById("divfrmWord").style.display = '';
	document.getElementById("divfrmBack").style.display = '';
}

function ShowContes() {
	document.getElementById("divContents").style.display = '';
	document.getElementById("frmWord").src = '';
	document.getElementById("divfrmWord").style.display = 'none';
	document.getElementById("divfrmBack").style.display = 'none';
}

//To validate length of the Category item.
function ValidateLength(val) {
	var textcount = val.length;
	if (textcount > 30) {
		var newval = val.substring(0, 30);
		newval = newval + "..";
		//alert(newval);
		return newval;
	} else {
		return val;
	}
}

function getRecentCppdHomeDoc() {
	//debugger
	sQuery = '<Query><Where><Contains><FieldRef Name="Home" /><Value Type="LookupMulti">CPPD R Chart</Value></Contains></Where><OrderBy><FieldRef Name="Modified" Ascending="False" /></OrderBy></Query>';
	var oWs = splists.getListItems('CPPDCategory', "", sQuery, "", '1', "", "");
	if (oWs.status == 200) {
		var docs = oWs.responseXML.getElementsByTagName('z:row');
		if (docs.length > 0) { // alert(docs.length);
			for (var j = 0; j < docs.length; j++) {
				var strFileName = docs[j].getAttribute('ows_Title');
				var strResult = docs[j].getAttribute('ows_FileRef');
				strResult = strResult.split("#", strUrl.length)[1];
				var strDocUrl = "http://teamspace.pg.com" + "/" + strResult;
				document.getElementById("RchartLink").setAttribute('href', strDocUrl);
			}
		} else {
			//alert("No documents for CPP R Chart");
		}
	}
}

function getRecentContactDoc() {
	//debugger
	sQuery = '<Query><Where><Contains><FieldRef Name="Home" /><Value Type="LookupMulti">CPPD Contacts</Value></Contains></Where><OrderBy><FieldRef Name="Modified" Ascending="False" /></OrderBy></Query>';
	var oWs = splists.getListItems('CPPDCategory', "", sQuery, "", '1', "", "");
	if (oWs.status == 200) {
		var docs = oWs.responseXML.getElementsByTagName('z:row');
		if (docs.length > 0) { // alert(docs.length);
			for (var j = 0; j < docs.length; j++) {
				var strFileName = docs[j].getAttribute('ows_Title');
				var strResult = docs[j].getAttribute('ows_FileRef');
				strResult = strResult.split("#", strUrl.length)[1];
				var strDocUrl = "http://teamspace.pg.com" + "/" + strResult;
				document.getElementById("CPPDContactslink").setAttribute('href', strDocUrl);
			}
		} else {
			//alert("No documents for CPPD Contacts");
		}
	}
}

function escapeURL(URL) {
	//debugger
	var url = escape(URL);
	window.location = "http://teamspace.pg.com/sites/cppdpolicy/WPPages/Contents.aspx?cat=" + url+"&lib=00";
}

//To test the functionality
function test() {
	//alert('working');
}

//_spBodyOnLoadFunctionNames.push("getLeftNavIndex","getContents");

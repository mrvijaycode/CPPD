var strUrl = "http://teamspace.pg.com/sites/cppdpolicy";
var splists = new SPAPI_Lists(strUrl);
var strLibName = '';
var sQuery = "<Query><OrderBy><FieldRef Name='Title' Ascending='True' /></OrderBy></Query>";
var strTitle = "No Title";
var queryFolder = '';

var STRLISTNAME = "Categories";
var STRCPPDHOME = "CPPDHome";
var STRCPPDCATEGORY = "CPPDCategory";

//To load left navigation menu
function getLeftNavIndex() {
	//LeftNavIndex
	document.getElementById("divfrmWord").style.display = 'none';
	var strLeftNavIndex = "";
	strLeftNavIndex += "<table   border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\"180\" valign=\"top\"><img src=\"../images1/left_nav_heading.jpg\" width=\"245\" height=\"37\" /></td></tr></table>";
	//strLeftNavIndex += "<Table  class=\"leftnav_bg\" width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" ><tr><td>";
	var sQuery = "<Query><OrderBy><FieldRef Name='Title' Ascending='True' /></OrderBy></Query>";
	var oWs = splists.getListItems(STRLISTNAME, "", sQuery, "", "", '', "");
	
	strLeftNavIndex +="<div id='leftlinks'>";
	
	strLeftNavIndex +="<table width=\"100\" class=\"leftnav_bg\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" >";
	
	if (oWs.status == 200) {
		var rows = oWs.responseXML.getElementsByTagName('z:row');
		if (rows.length > 0) {
			for (var i = 0; i < rows.length; i++) {
				var strItemID = rows[i].getAttribute('ows_ID');
				var strTitle = rows[i].getAttribute('ows_Title');
				var strCurrentItemURL = strUrl + "/Lists/LeftNavIndex/DispForm.aspx?ID=" + strItemID + "&Source=" + window.location.href;
				
				strLeftNavIndex += "<tr>";
				strLeftNavIndex += "<td valign=\"top\">";
				strLeftNavIndex += "<a href='#' onclick=\"JavaScript:loaddoc('" + strTitle + "')\" style='text-Decoration:None'>";
				strLeftNavIndex += "<div>" + ValidateLength(strTitle) + "</div></a>";
				
				strLeftNavIndex += "</td>";
				strLeftNavIndex += "</tr>";
				
				strLeftNavIndex += "<tr>";
				strLeftNavIndex += "<td valign=\"top\" style=\"padding:0 0 0 6px; height: 4px;\"><img src=\"../images1/left_nav_div.png\" width=\"220\" height=\"4\"/></td>";
				strLeftNavIndex += "</tr>";
			}
		}
	}
	
	//add menu ending image
	strLeftNavIndex += "<div valign=\"top\" class=\"leftnav_btmbg\">&nbsp;</div>"
	
	strLeftNavIndex += "</table></div>";
	document.getElementById("divLeftNavIndex").innerHTML = strLeftNavIndex;
}

//To load home page contents
function loadHome() {
	//alert(window.location.search.split("?cat=")[1]);
	strLibName = STRCPPDHOME;
	var strCategory = window.location.search.split("?cat=")[1];
	
	queryFolder = "<QueryOptions><Folder>CPPDHome/" + strCategory + "</Folder></QueryOptions>";
	
	switch (strCategory) {
		case 'onboarding':
		strTitle = "On Boarding";
		break;
		
		case 'FPM':
		strTitle = "FPM";
		break;
		
		case 'CPPDRChart':
		strTitle = "CP&PD \"R\" Chart";
		break;
		
		case '11-12 Trade Funds':
		strTitle = '11/12 Trade Funds';
		break;
		
		case '12-13 Trade Funds':
		strTitle = "12/13 Trade Funds";
		break;
		
		case 'Integrated Prod Transition(iPTI)':
		strTitle = 'Integrated Prod Transition(iPTI)';
		break;
		
		case 'IPTL':
		strTitle = "Integrated Prod Transition (iPTl)";
		break;
		
		case 'USPR':
		strTitle = 'US & PR Standard Index';
		break;
		
		case 'Contracts':
		strTitle = 'Contracts';
		break;
		
		case 'CDA':
		strTitle = 'CDA';
		break;
		
		case 'PloicyNTraining':
		strTitle = 'Policy and Legal Training';
		break;
		
		case 'Logistics':
		strTitle = 'Logistics';
		break;
		
		case 'CanadaStandard':
		strTitle = 'Canada G2M Standard Index';
		break;
		
		default:
		strTitle = "No Title";
	}
	getContents();
}

//To load selected menu documents
function loaddoc(MapId) {
	//alert(MapId);
	//Display documents
	strLibName = STRCPPDCATEGORY;
	sQuery = "<Query><Where><Eq><FieldRef Name='MapId' /><Value Type='Lookup'>" + MapId + "</Value></Eq></Where></Query>";
	queryFolder = '';
	strTitle = MapId;
	getContents();
}

//To load content on the dashboard
function getContents() {
	document.getElementById("divContents").style.display = '';
	document.getElementById("frmWord").src = '';
	document.getElementById("divfrmWord").style.display = 'none';
	var strContents = "";
	var strViewFields = "<ViewFields><FieldRef Name='BaseName' /><FieldRef Name='FileRef' /></ViewFields>";
	strContents += "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";
	strContents += "<tr><td>";
	
	strContents += "<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">"
	strContents += "<tr>"
	strContents += "<td valign=\"top\"><img src=\"../images1/gray_heading_lft.jpg\" width=\"8\" height=\"37\" /></td>"
	strContents += "<td valign=\"top\" class=\"body_heading\">" + strTitle + "</td>"
	strContents += "<td valign=\"top\"><img src=\"../images1/gray_heading_rt.jpg\" width=\"8\" height=\"37\" /></td>"
	strContents += "</tr>"
	strContents += "</table>"
	
	strContents += "</td></tr>"
	//	alert(queryFolder+"--"+STRLIBNAME);
	var oWs = splists.getListItems(strLibName, "", sQuery, strViewFields, "", queryFolder, "");
	if (oWs.status == 200) {
		//alert(oWs.responseText);
		try {
			var docs = oWs.responseXML.getElementsByTagName('z:row');
			if (docs.length > 0) { // alert(docs.length);
				for (var j = 0; j < docs.length; j++) {
					//alert('ok');
					var strFileName = docs[j].getAttribute('ows_BaseName');
					//alert(strFileName);
					var strResult = docs[j].getAttribute('ows_FileRef');
					strResult = strResult.split("#", strUrl.length)[1];
					var strDocUrl = "http://teamspace.pg.com" + "/" + strResult;
					//alert(strDocUrl);
					strContents += "<Tr>";
					strContents += "<td valign=\"top\" class=\"body_bluelinks\">";
					strContents += "<a href=\"JavaScript:Opendoc('" + strDocUrl + "')\">" + strFileName + "</a>";
					//strContents += "<a href='JavaScript:test()'"+ strFileName + "</a>";
					strContents += "</Td>";
					strContents += "</Tr>";
				}
				} else {
				strContents += "<Tr>";
				strContents += "<td valign=\"top\" class=\"body_bluelinks\">";
				strContents += "No documents are avaiable for this category...";
				strContents += "</Td>";
				strContents += "</Tr>";
			}
			} catch (er) {
			alert(er);
		}
	}
	strContents += "</Table>";
	document.getElementById("divContents").innerHTML = strContents;
}

//To open document in Iframe
function Opendoc(strDoc) {
	//alert(strDoc);
	//alert(document.getElementById("frmWord").src);
	document.getElementById("divContents").style.display = 'none';
	document.getElementById("frmWord").width = '100%'
	document.getElementById("frmWord").src = strDoc;
	document.getElementById("divfrmWord").style.display = '';
}

function ShowContes() {
	document.getElementById("divContents").style.display = '';
	document.getElementById("frmWord").src = '';
	document.getElementById("divfrmWord").style.display = 'none';
}

//To validate length of the Category item.
function ValidateLength(val)
{
	var textcount = val.length;
	if (textcount > 16) {
		var newval = val.substring(0, 16);
		newval = newval + "..";
		//alert(newval);
		return newval;
	}
	else
	{
		return val;
	}
}

//To test the functionality
function test() {
	//alert('working');
}

//_spBodyOnLoadFunctionNames.push("getLeftNavIndex","getContents");

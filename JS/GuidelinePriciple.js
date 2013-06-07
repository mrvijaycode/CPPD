var strUrl = "http://teamspace.pg.com/sites/cppdpolicy";
var splists = new SPAPI_Lists(strUrl);
var spUserInformation = new SPAPI_UserGroup(strUrl);
var strLibName = '';
var sQuery = "<Query><OrderBy><FieldRef Name='Title' Ascending='True' /></OrderBy></Query>";
var strTitle = "No Title";
var queryFolder = '';

var STRCPPDHOME = "CPPDHome";

//To load left navigation menu
function getLeftNavIndex() {
//debugger
		 var STRLISTNAME="Guidelines&Principles";
		STRLISTNAME = STRLISTNAME.replace("&", "&amp;");
		
	if (document.getElementById("divfrmWord")) {
		document.getElementById("divfrmWord").style.display = 'none';
	}
	if (document.getElementById("divfrmback")) {
		document.getElementById("divfrmback").style.display = 'none';
	}
	
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
				strLeftNavIndex += "<td valign=\"top\">";
				strLeftNavIndex += "<a href='#' onclick=\"JavaScript:loaddoc('" + strTitle + "')\" style='text-Decoration:None'>";
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
	strLeftNavIndex += "<div valign=\"top\" class=\"leftnav_btmbg\">&nbsp;</div>"
	
	strLeftNavIndex += "</table></div>";
	
	if (document.getElementById("divLeftNavIndex")) {
		document.getElementById("divLeftNavIndex").innerHTML = strLeftNavIndex;
	}
	getContents("");
}

//To load selected menu documents
function loaddoc(MapId) {
	//alert(MapId);
	strLibName = document.getElementById('divref').innerText;
	
	switch (strLibName) {
	case 'CPPDCategory':
		sQuery = "<Query><Where><Eq><FieldRef Name='MapId' /><Value Type='Lookup'>" + MapId + "</Value></Eq></Where></Query>";
		break;
	case 'GUIDELINESPRINCIPLES':
		sQuery = "<Query><Where><Eq><FieldRef Name='Section' /><Value Type='Lookup'>" + MapId + "</Value></Eq></Where></Query>";
		break;
	default:
		strLibName = '';
	}
	queryFolder = '';
	strTitle = MapId;
	getContents(strLibName);
}

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
	
	if (document.getElementById("divfrmback")) {
		document.getElementById("divfrmback").style.display = 'none';
	}

	
	if(strLibrary=="")
	{

	//sQuery='<Query><OrderBy><FieldRef Name="Section" /></OrderBy></Query>';
	sQuery='<Query><Where><IsNotNull><FieldRef Name="Section" /></IsNotNull></Where><OrderBy><FieldRef Name="Section" Ascending="True" /></OrderBy></Query>';
	queryFolder="";
	strTitle="CP&PD DEPARTMENT GUIDELINES & PRINCIPLES";
	}
	var strContents = "";
	//var strViewFields = "<ViewFields><FieldRef Name='Section' /><FieldRef Name='BaseName' /><FieldRef Name='FileRef' /></ViewFields>";
	var strViewFields = "<ViewFields><FieldRef Name='Section' /><FieldRef Name='Title' /><FieldRef Name='FileRef' /></ViewFields>";
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
	//debugger
	//	alert(queryFolder+"--"+STRLIBNAME);
	var oWs = splists.getListItems("GUIDELINESPRINCIPLES", "", sQuery, strViewFields, '1000', queryFolder, "");
	if (oWs.status == 200) {
		//alert(oWs.responseText);
		try {
			var docs = oWs.responseXML.getElementsByTagName('z:row');
			if (docs.length > 0) { // alert(docs.length);
			var sectionTitle="";
				for (var j = 0; j < docs.length; j++) {
					//alert('ok');
					var strFileName = docs[j].getAttribute('ows_Title');
					//alert(strFileName);
					var strResult = docs[j].getAttribute('ows_FileRef');
					strResult = strResult.split("#", strUrl.length)[1];
					var strDocUrl = "http://teamspace.pg.com" + "/" + strResult;
					//alert(strDocUrl);
					if(strLibrary=="")
					{
					if(sectionTitle!=docs[j].getAttribute('ows_Section'))
					{
					sectionTitle=docs[j].getAttribute('ows_Section');
					
					var section=sectionTitle.split("#");
					/*
					if(section[1]=="SAMPLE FOR PURCHASE PROGRAM")
					{
					alert('wait');
					debugger
					}
					*/				
					strContents += "<Tr>";
					strContents += "<td colspan=\"2\" valign=\"top\" class=\"body_bluelinks2\">";
					strContents += "<a>" + section[1]+ "</a>";
					strContents += "</Td>";
					strContents += "</Tr>";
					
					}
					}
					strContents += "<Tr>";
					strContents += "<td valign=\"top\" class=\"body_bluelinks1\">";
					strContents +="<img src=\"http://teamspace.pg.com/sites/cppdpolicy/Images1/org_arw.png\">";
					strContents += "<a title='" + strFileName + "' style='padding-left:5px' href=\"JavaScript:Opendoc('" + strDocUrl + "')\">" + strFileName + "</a>";
					strContents += "</Td>";
					strContents += "</Tr>";
				}
			} else {
				strContents += "<Tr>";
				strContents += "<td valign=\"top\" class=\"body_bluelinks\" style=\"padding-left:30px\">";
				strContents += "No documents are available for this topic...";
				strContents += "</Td>";
				strContents += "</Tr>";
			}
		} catch (er) {
			alert(er);
		}
	}
	strContents += "</Table>";
	if(document.getElementById("divContents"))
	{
	document.getElementById("divContents").innerHTML = strContents;
	}
	document.getElementById("divfrmWord").style.display = "none";
	document.getElementById("divfrmback").style.display = "none";
}

//To open document in Iframe
function Opendoc(strDoc) {
//debugger
	document.getElementById("divContents").style.display = "none";
	document.getElementById("frmWord").width = '100%'
	document.getElementById("frmWord").src = strDoc;
	document.getElementById("divfrmWord").style.display = "block";
	document.getElementById("divfrmback").style.display = "block";
}


// goBack function
function ShowContes() {
	document.getElementById("divContents").style.display = '';
	document.getElementById("frmWord").src = '';
	document.getElementById("divfrmWord").style.display = "none"
	document.getElementById("divfrmback").style.display = "none"
}

//To validate length of the Category item.
function ValidateLength(val) {
	var textcount = val.length;
	if (textcount > 16) {
		var newval = val.substring(0, 16);
		newval = newval + "..";
		//alert(newval);
		return newval;
	} else {
		return val;
	}
}

//To test the functionality
function test() {
	//alert('working');
}

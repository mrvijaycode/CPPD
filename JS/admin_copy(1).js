var strUrl = "http://teamspace.pg.com/sites/cppdpolicy";
var splists = new SPAPI_Lists(strUrl);
var strLibName = '';
var CATEGORIESLIST = 'LeftNavIndex';
var sQuery = "<Query><OrderBy><FieldRef Name='Title' Ascending='True' /></OrderBy></Query>";
var strTitle = "No Title";
var queryFolder = '';

function UploadDocumenttoCategory() {
	var div = '<div style="margin-top:25px;" id="DivIframe">' +
		'<iframe id="FrameSet" src="http://teamspace.pg.com/sites/cppdpolicy/_layouts/Upload.aspx?List=%7B13942CF9%2D43AB%2D4021%2D85DD%2D12739D82E271%7D&RootFolder=%2Fsites%2Fcppdpolicy%2FCPPDCategory&Source=http%3A%2F%2Fteamspace%2Epg%2Ecom%2Fsites%2Fcppdpolicy%2FCPPDCategory%2FForms%2FAllItems%2Easpx"   frameborder="0"></iframe>' +
		'</div>';
	document.getElementById("tdIframe").innerHTML = div;
}


function UploadDocumenttoHome() {
	var div = '<div style="margin-top:25px;" id="DivIframe">' +
		'<iframe id="FrameSet" src="http://teamspace.pg.com/sites/cppdpolicy/CPPDHome/Forms/AllItems.aspx"   frameborder="0"></iframe>' +
		'</div>';
	document.getElementById("tdIframe").innerHTML = div;
}


function adminload() {
	var div = '<div>' +
		'<iframe id="myFrame" style="margin-top:25px;width:600px;height:450px;" src="addCategory.aspx?Source=http://teamspace.pg.com/sites/cppdpolicy/WPPages/allCategories.aspx"   frameborder="0"></iframe>' +
		'</div>';
	document.getElementById("tdIframe").innerHTML = div;
	
	//document.getElementById("FrameSet").src = "";
}

function PreSaveAction() {
	
	var Title = document.getElementById("g_e14fa607_cc87_4b4b_86d8_cdef95175949_ff1_1_ctl00_ctl00_TextField").value;
	//alert(Title)
	if (Title != '') {
		
		sQuery = "<Query><Where><Eq><FieldRef Name=\"Title\" /><Value Type=\"Text\">" + Title + "</Value></Eq></Where></Query>";
		var oWs = splists.getListItems(CATEGORIESLIST, "", sQuery, '', "", '', "");
		
		if (oWs.status == 200) {
			//alert(oWs.responseText)
			var rows = oWs.responseXML.getElementsByTagName('z:row');
			
			if (rows.length > 0) {
				alert('This category is already existed..')
				return false;
				
			} else {
				//alert('Successfully created..')
				return true;
			}
			
		} else {
			alert('Not')
		}
	} else {
		alert('Please enter category name..');
	}
}

function AddCategory() {
	var Title = document.getElementById("g_e14fa607_cc87_4b4b_86d8_cdef95175949_ff1_1_ctl00_ctl00_TextField").value;
	//alert(Title)
	
	sQuery = "<Query><Where><Eq><FieldRef Name=\"Title\" /><Value Type=\"Text\">" + Title + "</Value></Eq></Where></Query>";
	var oWs = splists.getListItems(CATEGORIESLIST, "", sQuery, '', "", '', "");
	
	if (oWs.status == 200) {
		//alert(oWs.responseText)
		var rows = oWs.responseXML.getElementsByTagName('z:row');
		
		if (rows.length > 0) {
			alert('Yes, It is Existed..');
		} else {
			alert('Not Existed..');
		}
		
	} else {
		alert('Not')
	}
	
}

function test1() {
	alert('working from admin');
}

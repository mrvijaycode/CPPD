
function test1()
{
alert('alert from global');
}



function GetRootUrl() 
{     
	var oPathparts = document.location.pathname.split('/');     
	var sUrl = 'http://' + document.location.hostname + '/' + oPathparts[1] + '/'+oPathparts[2]; 
	return sUrl; 
}


//Returns the No of Attachments for the content
function attachmentRowCount()
{
	var sTRowCount=document.getElementById("tblContentAttachments");
	var nCountActiveRows=0;
	var nAllRows=sTRowCount.getElementsByTagName("TR");

	for (nEachRow=1;nEachRow<=nAllRows.length-1;nEachRow++)
	{
		if(nAllRows[nEachRow].cells[0])
		{
			if(nAllRows[nEachRow].cells[0].innerText!="")
			nCountActiveRows++;
	
		}
	}
	
	
	return nCountActiveRows;


}


//This function is used to check the no of items in the current folder
	function checkCount(gFolderPath,sSecondLevelURL)
	{
		var sReturnCount="";
		var sURL=GetRootUrl(); 		//To get the current Url	
		var oLists = new SPAPI_Lists(sURL);				
		var sQueryOptions="<QueryOptions><Folder>"+ gFolderPath +"</Folder><IncludeMandatoryColumns>FALSE</IncludeMandatoryColumns><IncludeAttachmentUrls>TRUE</IncludeAttachmentUrls></QueryOptions>";
		var sViewOption="<ViewFields><FieldRef Name='ID' /></ViewFields>";
		var oWs = oLists.getListItems('lst_Content','','',sViewOption,'',sQueryOptions,'');
		if(oWs.status==200)
		{
			var oRows = oWs.responseXML.getElementsByTagName('rs:data'); 	
		    sReturnCount=oRows[0].getAttribute('ItemCount');
		    
		    if(sReturnCount>500)
		    {
		    	var sNewFolder=gFolderPath;
				sNewFolder =sNewFolder.split('-');
				
				var sFolderNameSplit=gFolderPath.split('/');
				var sEndSlashFolderName=sFolderNameSplit[sFolderNameSplit.length-1];
				
				
				var sHyphenSplit=sEndSlashFolderName.split('-');
				
				
			
				var nFolderNumber=parseInt(sHyphenSplit[1])+1;
				
				//alert("FolderNumber  of Latest One"+nFolderNumber);
				//alert("Folder Name "+sHyphenSplit[0]+"-"+nFolderNumber);
				//alert("Folder URL "+sSecondLevelURL);
				
				sReturnCount=createFolderInList(sHyphenSplit[0]+"-"+nFolderNumber,sSecondLevelURL,"lst_Content",1);
				
				return sReturnCount;					
		    	//return sNewFolder[0]+"-"+nFolderNumber;
		    }
		    
		    else
		    {

		    return gFolderPath;
		    
		    }
		    

			
		}			
	} 


//This function is used to get the latest folder for the corresponding Category -Added on 27th August
	function getLatestFolder(_sRootCategory)
	{
	

		var sURL=GetRootUrl(); 		//To get the current Url	
		var oLists = new SPAPI_Lists(sURL);		
		var sQuery= "<Query><OrderBy><FieldRef Name='Created' Ascending='False' /></OrderBy></Query>";
		var sQueryoptions="<QueryOptions><Folder>/sites/mnet2/Lists/lst_Content/"+_sRootCategory+"</Folder><ViewAttributes Scope='Recursive'/><IncludeMandatoryColumns>FALSE</IncludeMandatoryColumns></QueryOptions>";
		var oWs = oLists.getListItems('lst_Content','',sQuery,'',1,sQueryoptions,'');
		var gFolderPath='';
		if(oWs.status==200)
		{
			var oRows = oWs.responseXML.getElementsByTagName('z:row'); 
			
			if(oRows.length >0)
			{
										
						var sGetPathInfo=oRows[0].getAttribute('ows_FileRef');	
						sGetPathInfo=sGetPathInfo.split(';');
						sGetPathInfo=sGetPathInfo[1].split('/');
						for(var nPathInfo=0;nPathInfo<sGetPathInfo.length-1;nPathInfo++)
						{
							if(nPathInfo == sGetPathInfo.length-2)
							{
								gFolderPath+=sGetPathInfo[nPathInfo];
							}
							else
							{
								gFolderPath+=sGetPathInfo[nPathInfo]+"/" ;
							}
						} 
						//gFolderPath=gFolderPath.substring(0,1);
						gFolderPath=gFolderPath.replace('#','/');
				
		 }
		 
		}
		if(gFolderPath == '')
		{
			gFolderPath="/sites/mnet2/Lists/lst_UserProfile/"+_sRootCategory;
		}		
		
			return gFolderPath; 
			

	}
	


//This function is used to create the folder in Comments List (or) a Folder in the 
function createFolderInList(sNewFolderName,FolderPath,lstName,bBool)
{

	
		var sListName=lstName;
		var sNewFolderPath="";
		var sURL="http://teamspace.pg.com/sites/mnet2"; 		//To get the current Url	
		var oLists1 = new SPAPI_Lists(sURL);			
		//var sFolderPath="http://teamspace.pg.com/sites/mnet2/lists/"+sListName+"/" + MainFolder;
		var sFolderPath;
		
		
		if (bBool==1)
		sFolderPath=FolderPath;
		else
		sFolderPath="http://teamspace.pg.com/sites/mnet2/lists/"+sListName+"/" + FolderPath;
		var oWs;
		
		try
		{
		//var oWs = oLists.createFolder(sListName, sNewFolderName, sFolderPath); 
		 oWs = oLists1.createFolder(sListName, trim(sNewFolderName), sFolderPath); 
		}
		catch(e)
		{
		
		}

		if (oWs.status == 200) 
		{ 
			return sNewFolderPath=sFolderPath+"/"+sNewFolderName;//if new folder is created ,the current folder path is assignedto new folder
		} 
		else
		{
			return sNewFolderPath;
		}
	


}




//Gets the dependent ID (Prefix) when Category ID is passed

function getCategoriesFromList(sCatID)
{

	var oCatValues = new SPAPI_Lists("http://teamspace.pg.com/sites/mnet2");	
	
	
	var query= "<Query><Where><And><Eq><FieldRef Name='LinkTitle' /><Value Type='Text'>"+ sCatID + "</Value></Eq><Eq><FieldRef Name='c_Status'/><Value Type='Choice'>Yes</Value></Eq></And></Where><OrderBy><FieldRef Name='s_CategoryTitle'/></OrderBy></Query>";
	var queryoptions="<QueryOptions><IncludeMandatoryColumns>TRUE</IncludeMandatoryColumns><IncludeAttachmentUrls>TRUE</IncludeAttachmentUrls></QueryOptions>";
	var ws = oCatValues.getListItems('lst_Category','',query,'','',queryoptions,'');
	
	if(ws.status==200)
	{
		
		var rows = ws.responseXML.getElementsByTagName('z:row');

		for (var i=0; i<rows.length; i++)
		{	
		
		return rows[i].getAttribute('ows_s_DependentID');
		
		}
		
	}			
	
}



function gup(name)
 {  
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
  var regexS = "[\\?&]"+name+"=([^&#]*)";  
  var regex = new RegExp( regexS );  
  var results = regex.exec( window.location.href );  
  if( results == null )    
   return "";  
  else    
   return results[1];
 }
 
 
// Removes leading and trailing spaces from the passed string. Also removes
	   // consecutive spaces and replaces it with one space. If something besides
	   // a string is passed in (null, custom object, etc.) then return the input.
		function trim(inputString) {
	  
		   if (typeof inputString != "string") return inputString;
		   var retValue = inputString;
		   var ch = retValue.substring(0, 1);
			
		   while (ch == " ") { // Check for spaces at the beginning of the string
		      retValue = retValue.substring(1, retValue.length);
		      ch = retValue.substring(0, 1);
		   }
		   ch = retValue.substring(retValue.length - 1, retValue.length);
			
		   while (ch == " ") { // Check for spaces at the end of the string
		      retValue = retValue.substring(0, retValue.length - 1);
		      ch = retValue.substring(retValue.length - 1, retValue.length);
		   }
			
			// Note that there are two spaces in the string - look for multiple spaces within the string
		   while (retValue.indexOf("  ") != -1) {
				// Again, there are two spaces in each of the strings
		      retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ") + 1, retValue.length);
		   }
		   return retValue; // Return the trimmed string back to the user
	}


//Trims the ; character at the right of the string
function rightTrim(sString) 
{
	while (sString.substring(sString.length-1, sString.length) == ';')
	{
		sString = sString.substring(0,sString.length-1);
	}
	return sString;
}

//End rightTrim


//Gets the SMEGroupName currently -need to be changed to ID after the interface is ready //TODO: 
function getCategoryLevel2SME(qsCategoryID,sLevel)
{
var lists = new SPAPI_Lists('/sites/mnet2');
var strQuery="<Query><Where><Eq><FieldRef Name='s_Level' /><Value Type='Text'>"+sLevel+"</Value></Eq></Where></Query>";	
//var strQuery="<Query><Where><Or><Eq><FieldRef Name='s_Level' /><Value Type='Text'>Level2</Value></Eq><Eq><FieldRef Name='s_Level' /><Value Type='Text'>Level1</Value></Eq></Or></Where></Query>";
//var strView="<ViewFields><FieldRef Name='m_Title' /><FieldRef Name='b_IsPrimary' /></ViewFields>";
//var strQryOptions="<QueryOptions><ViewAttributes Scope='Recursive'/></QueryOptions>";
var items = lists.getListItems('lst_Category','',strQuery, '','','','');
	
		
		
		if(items.status==200)
			{
				var rows = items.responseXML.getElementsByTagName('z:row');

				for(var i=0;i<rows.length;i++)
				{
				

					if(qsCategoryID.indexOf(rows[i].getAttribute('ows_Title'))!=-1 || qsCategoryID==rows[i].getAttribute('ows_Title'))
					{
							return rows[i].getAttribute('ows_s_SMEGroupID');
					}
				
				
				}
			
			}

}


//GEts User ID from wehn account name is passed 
function getsUserProfileId(sAccountName)
{

var grp = new SPAPI_UserGroup('/sites/mnet2');
  
 var ug = grp.getUserInfo(sAccountName);
//alert(ug.responseText);
 var rows = ug.responseXML.getElementsByTagName('User'); 
 if(rows.length!=0)
 {
 
 
 return  rows[0].getAttribute('ID');
  
 }
 else
 return 0;
 


}
//Checks if user is an SME or an ADMin -Added on 24th August -Pass the Group Name as Parameter
function getsUserGroupInfo(sSME)
{

 var grp = new SPAPI_UserGroup('/sites/mnet2');
 
 var sLoginUserName = document.getElementById('LoginName').innerText;
 var vflag = "FALSE";
 sLoginUserName = sLoginUserName.substring(8);

 
 
 var ug = grp.getGroupCollectionFromUser(sLoginUserName);
 var rows = ug.responseXML.getElementsByTagName('Group'); 

 
 for (var i=0; i<rows.length; i++)
 {
  
  //Checks If logged in user is in the Admin Group
  if(rows[i].getAttribute('ID')=='279' || rows[i].getAttribute('Name')==sSME) 
  {

   vflag = "TRUE";
   
   break;
  }
  
  else
  {
   vflag = "FALSE";
  }
  

 }

 return vflag; 
 

}



//Checks if Logged in user is an Admin -Added on 24th AUgust

function checkUser()
{

 
 var grp = new SPAPI_UserGroup('/sites/mnet2');
 var ug = grp.getUserCollectionFromGroup('mnet2_Admin');
 var rows = ug.responseXML.getElementsByTagName('User'); 
 var sLoginUserName = document.getElementById('LoginName').innerText;
 var vflag = "TRUE";
 sLoginUserName = sLoginUserName.substring(8);
 
 
 for (var i=0; i<rows.length; i++)
 {
  
  //Checks If logged in user is in the Admin Group
  if(rows[i].getAttribute('LoginName')==sLoginUserName) 
  {
   vflag = "TRUE";
   break;
  }
  
  else
  {
   vflag = "FALSE";
  }
 }
 

 return vflag; 
 

}

//End 

//Gets users from group
function getUsersFromGroup(sGrpName)
{

var grp = new SPAPI_UserGroup('/sites/mnet2');
var vflag = "";
 
 
 var ug = grp.getUserCollectionFromGroup(sGrpName);

 var rows = ug.responseXML.getElementsByTagName('User'); 
 
 for (var i=0; i<rows.length; i++)
 {
//			allUsers="12;#Bolla, Surendra;#120;#Siripuram, Manjula";
	  vflag=vflag + rows[i].getAttribute('ID')+";#"+rows[i].getAttribute('Name') +";#";
	  

 }
return vflag;

}

//Gets the SME Group Name when ID is passed -Added on 24th August
function getsSMEUsersFromGroup(nGrp)
{

 var grp = new SPAPI_UserGroup('/sites/mnet2');
 var vflag = "";
 
 
 var ug = grp.getGroupCollectionFromRole("Full Control");
 var rows = ug.responseXML.getElementsByTagName('Group'); 
 
 for (var i=0; i<rows.length; i++)
 {

  
	  if(rows[i].getAttribute('ID')==nGrp) 
	  {
	
		vflag=rows[i].getAttribute('Name');
	   
	    break;
	  }
	  
	  else
	  {
	   
	  }
	  

 }
 

 return vflag; 


}



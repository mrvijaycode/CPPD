<%@ Page language="C#" MasterPageFile="../_catalogs/masterpage/cppdhome.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=12.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" Title="Administration" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content id="Content1" runat="server" contentplaceholderid="PlaceHolderMain">

<style type="text/css">

#DivIframe {
	width: 615px;
	height: 600px;
	overflow: hidden;
	margin: auto;
	bgcolor: #F1F1F1;
}
#FrameSet {
	width: 800px;
	height: 600px;
	margin-left: -155px;
	margin-top: -150px;
	margin-right: 0px;
	border: 0 solid;
	bgcolor: #F1F1F1;
	overflow-x: hidden;
}

#Transparency {
	/*CSS for veil that covers entire page while modal window is visible*/
	position: absolute;
	left: 0;
	top: 0;
	z-index: 999;
	filter: progid:DXImageTransform.Microsoft.alpha(opacity=0);
	opacity: 0.8;
}
</style>
<table border="0" cellpadding="0" cellspacing="0">
<tr>
<td valign="top" style="width:245px; padding:0 0 0 5px;">
<div>
<div id="ops" style="margin-top:10px">
<!-- Display Left navigation menu
-->

<div>

<table width="91%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td valign="top"><img src="../images1/administration_heading.jpg" width="245" height="37" /></td>
</tr>
<tr>
<td valign="top" class="leftnav_bg">

<table width="218" border="0" cellspacing="0" cellpadding="0">           
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top>
<A style="TEXT-DECORATION: none" href="javascript:loadRestrcitedPage();"><div id="divRestrict" style="width:99%">
Restricted Area</div></A>
</TD></TR>
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top>
<A style="TEXT-DECORATION: none" href="javascript:loadPrinciples();"><div style="width:99%">
Guidelines and Principles</div></A>
</TD></TR>
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top>
<A style="TEXT-DECORATION: none" href="javascript:loadPre();"><div style="width:99%">
Presentations</div></A>
</TD></TR>

<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top>
<A style="TEXT-DECORATION: none" href="javascript:loadGraveyard();"><div style="width:99%">
Graveyard Documents</div></A>
</TD></TR>

</table></td>
</tr>

<tr>
<td valign="top" class="leftnav_btmbg">&nbsp;</td>
</tr>
</table>

</div>

<div id="divSuperAdmin">
<table width="91%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td valign="top"><img src="../images1/maintain_doc_heading.jpg" width="245" height="37" /></td>
</tr>
<tr>
<td valign="top" class="leftnav_bg">

<table width="218" border="0" cellspacing="0" cellpadding="0">           
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px; width: 226px;" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top style="width: 226px">
<A style="TEXT-DECORATION: none" href="javascript:openCategories();"><div style="width:99%;">
Create Standard Topic</div></A>
</TD></TR>
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px; width: 226px;" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top style="width: 226px;">
<A style="TEXT-DECORATION: none" href="javascript:UploadDocumenttoCategory();"><div style="width:99%">
Upload Home &amp; Standard Documents</div></A>
</TD></TR>
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px; width: 226px;" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD>
</TR>

<!--
<TR>
<TD vAlign=top style="width: 226px">
<A style="TEXT-DECORATION: none" href="javascript:UploadDocumenttoHome();"><div style="width:99%">
Upload Home Link Documents</div></A>
</TD></TR>
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px; width: 226px;" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD>
</TR>
-->
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px; width: 226px;" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD>
</TR>
<TR>
<TD vAlign=top style="width: 226px">
<A style="TEXT-DECORATION: none" href="javascript:UploadRestrictedArea();"><div style="width:99%">
Upload Restricted Area</div></A>
</TD></TR>

<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px; width: 226px;" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>

<TR>
<TD vAlign=top style="width: 226px">
<A style="TEXT-DECORATION: none" href="javascript:NextLeagalOrientation();"><div style="width:99%">
Create Next Legal Orientation</div></A>
</TD></TR>

<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px; width: 226px;" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>


<TR>
<TD vAlign=top style="width: 226px">
<A style="TEXT-DECORATION: none" href="javascript:loadGuidelines();"><div style="width:99%">
Create Guidelines &amp; Principles Topic</div></A>
</TD></TR>
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px; width: 226px;" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top style="width: 226px">
<A style="TEXT-DECORATION: none" href="javascript:UploadGuidelinePrinciple();"><div style="width:99%">
Upload Guideline &amp; Principle</div></A>
</TD></TR>

<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px; width: 226px;" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top style="width: 226px">
<A style="TEXT-DECORATION: none" href="javascript:UploadGuidelinePresentation();"><div style="width:99%">
Upload Presentation</div></A>
</TD></TR>

<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px; width: 226px;" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>

<TR>
<TD vAlign=top style="width: 226px">
<A style="TEXT-DECORATION: none" href="javascript:CreateHomeLinksTitle();"><div style="width:99%">
HomeLinks Title</div></A>
</TD></TR>

</table></td>
</tr>

<tr>
<td valign="top" class="leftnav_btmbg">&nbsp;</td>
</tr>
</table>
</div>

</div>
</div>


</td>
<td valign="top" style="padding:0 15px 0 10px;width:100%;height:500px">

<table border="0" cellspacing="0" cellpadding="0" style="margin-top:10px">
<tr>
<td valign="top" style="height: 37px"><img src="http://teamspace.pg.com/sites/cppdpolicy/images1/gray_heading_lft.jpg" width="8" height="37" /></td>
<td valign="top" class="body_heading" style="height: 37px">
<div id="headersec"></div> 
</td>
<td valign="top" style="height: 37px"><img src="http://teamspace.pg.com/sites/cppdpolicy/images1/gray_heading_rt.jpg" width="8" height="37" /></td>
</tr>
</table>
<table>
<tr>
<td id="tdIframe">

</td>
</tr>
</table>

</td>
</tr>
</table>
<script type="text/javascript">loadRestrcitedPage();</script>
</asp:Content>
<asp:Content id="ContentsInHeader" runat="server" contentplaceholderid="head">
</asp:Content>

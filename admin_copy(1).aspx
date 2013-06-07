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
	margin-left: -152px;
	margin-top: -150px;
	margin-right: -100px;
	border: 0 solid;
	bgcolor: #F1F1F1;
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

<!-- SITE ACTIONS HIDDEN
<div class="ms-siteactionsmenu" id="siteactiontd" style="float:right">
<SharePoint:SiteActions runat="server" AccessKey="<%$Resources:wss,tb_SiteActions_AK%>" id="SiteActionsMenuMain"
PrefixHtml="&lt;div&gt;&lt;div&gt;"
SuffixHtml="&lt;/div&gt;&lt;/div&gt;"
MenuNotVisibleHtml="&amp;nbsp;" __designer:Preview="

&lt;span style=&quot;display:none&quot;&gt;&lt;menu type='ServerMenu' id=&quot;zz1_SiteActionsMenuMain&quot; largeIconMode=&quot;true&quot;&gt;&lt;ie:menuitem id=&quot;zz2_MenuItem_Create&quot; type=&quot;option&quot; iconSrc=&quot;/_layouts/images/Actionscreate.gif&quot; onMenuClick=&quot;window.location = '/sites/cppdpolicy/_layouts/create.aspx';&quot; menuGroupId=&quot;100&quot;&gt;&lt;/ie:menuitem&gt;&lt;ie:menuitem id=&quot;zz3_MenuItem_Settings&quot; type=&quot;option&quot; iconSrc=&quot;/_layouts/images/ActionsSettings.gif&quot; onMenuClick=&quot;window.location = '/sites/cppdpolicy/_layouts/settings.aspx';&quot; menuGroupId=&quot;100&quot;&gt;&lt;/ie:menuitem&gt;&lt;/menu&gt;&lt;/span&gt;&lt;div&gt;&lt;div&gt;&lt;span title=&quot;Open Menu&quot;&gt;&lt;div  id=&quot;zz4_SiteActionsMenu_t&quot; class=&quot;&quot; onmouseover=&quot;MMU_PopMenuIfShowing(this);MMU_EcbTableMouseOverOut(this, true)&quot; hoverActive=&quot;ms-siteactionsmenuhover&quot; hoverInactive=&quot;&quot; onclick=&quot; MMU_Open(byid(''), MMU_GetMenuFromClientId('zz4_SiteActionsMenu'),event,false, null, 0);&quot; foa=&quot;MMU_GetMenuFromClientId('zz4_SiteActionsMenu')&quot; oncontextmenu=&quot;this.click(); return false;&quot; nowrap=&quot;nowrap&quot;&gt;&lt;a id=&quot;zz4_SiteActionsMenu&quot; accesskey=&quot;/&quot; href=&quot;#&quot; onclick=&quot;javascript:return false;&quot; style=&quot;cursor:pointer;white-space:nowrap;&quot; onfocus=&quot;MMU_EcbLinkOnFocusBlur(byid(''), this, true);&quot; onkeydown=&quot;MMU_EcbLinkOnKeyDown(byid(''), MMU_GetMenuFromClientId('zz4_SiteActionsMenu'), event);&quot; onclick=&quot; MMU_Open(byid(''), MMU_GetMenuFromClientId('zz4_SiteActionsMenu'),event,false, null, 0);&quot; oncontextmenu=&quot;this.click(); return false;&quot; menuTokenValues=&quot;MENUCLIENTID=zz4_SiteActionsMenu,TEMPLATECLIENTID=zz1_SiteActionsMenuMain&quot; serverclientid=&quot;zz4_SiteActionsMenu&quot;&gt;Site Actions&lt;img src=&quot;/_layouts/images/blank.gif&quot; border=&quot;0&quot; alt=&quot;Use SHIFT+ENTER to open the menu (new window).&quot;/&gt;&lt;/a&gt;&lt;img align=&quot;absbottom&quot; src=&quot;/_layouts/images/whitearrow.gif&quot; alt=&quot;&quot; /&gt;&lt;/div&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;" __designer:Values="&lt;P N='AccessKey' Bound='True' T='Resources:wss,tb_SiteActions_AK' /&gt;&lt;P N='ID' ID='1' T='SiteActionsMenuMain' /&gt;&lt;P N='PrefixHtml' T='&amp;lt;div&amp;gt;&amp;lt;div&amp;gt;' /&gt;&lt;P N='SuffixHtml' T='&amp;lt;/div&amp;gt;&amp;lt;/div&amp;gt;' /&gt;&lt;P N='MenuNotVisibleHtml' T='&amp;amp;nbsp;' /&gt;&lt;P N='InDesign' T='False' /&gt;&lt;P N='Page' ID='2' /&gt;&lt;P N='TemplateControl' R='2' /&gt;&lt;P N='AppRelativeTemplateSourceDirectory' R='-1' /&gt;">
<CustomTemplate>
<SharePoint:FeatureMenuTemplate runat="server"
FeatureScope="Site"
Location="Microsoft.SharePoint.StandardMenu"
GroupId="SiteActions"
UseShortId="true"
>
<SharePoint:MenuItemTemplate runat="server" id="MenuItem_Create"
Text="<%$Resources:wss,viewlsts_pagetitle_create%>"
Description="<%$Resources:wss,siteactions_createdescription%>"
ImageUrl="/_layouts/images/Actionscreate.gif"
MenuGroupId="100"
Sequence="100"
UseShortId="true"
ClientOnClickNavigateUrl="~site/_layouts/create.aspx"
PermissionsString="ManageLists, ManageSubwebs"
PermissionMode="Any" />
<SharePoint:MenuItemTemplate runat="server" id="MenuItem_EditPage"
Text="<%$Resources:wss,siteactions_editpage%>"
Description="<%$Resources:wss,siteactions_editpagedescription%>"
ImageUrl="/_layouts/images/ActionsEditPage.gif"
MenuGroupId="100"
Sequence="200"
ClientOnClickNavigateUrl="javascript:MSOLayout_ChangeLayoutMode(false);"
/>
<SharePoint:MenuItemTemplate runat="server" id="MenuItem_Settings"
Text="<%$Resources:wss,settings_pagetitle%>"
Description="<%$Resources:wss,siteactions_sitesettingsdescription%>"
ImageUrl="/_layouts/images/ActionsSettings.gif"
MenuGroupId="100"
Sequence="300"
UseShortId="true"
ClientOnClickNavigateUrl="~site/_layouts/settings.aspx"
PermissionsString="EnumeratePermissions,ManageWeb,ManageSubwebs,AddAndCustomizePages,ApplyThemeAndBorder,ManageAlerts,ManageLists,ViewUsageData"
PermissionMode="Any" />
</SharePoint:FeatureMenuTemplate>
</CustomTemplate>
</SharePoint:SiteActions>
</div>
SITE ACTIONS HIDDEN
-->
<table border="0" cellpadding="0" cellspacing="0">
<tr>
<td valign="top" style="width:245px; padding:0 0 0 10px;">
<div>
<div id="ops" style="margin-top:30px">
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
<A style="TEXT-DECORATION: none" href="javascript:loadRestrcitedPage();"><div style="width:99%">
Restricted Area</div></A>
</TD></TR>
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top>
<A style="TEXT-DECORATION: none" href="javascript:loadPresentations()"><div style="width:99%">
Guidelines and Principles</div></A>
</TD></TR>
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>

<TR>
<TD vAlign=top>
<A style="TEXT-DECORATION: none" href="#"><div style="width:99%">
Presentations</div></A>
</TD></TR>
<TR>
<TD vAlign=top>
<A style="TEXT-DECORATION: none" href="#"><div style="width:99%">
Graveyard Docs</div></A>
</TD></TR>

</table></td>
</tr>

<tr>
<td valign="top" class="leftnav_btmbg">&nbsp;</td>
</tr>
</table>

</div>



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
<A style="TEXT-DECORATION: none" href="javascript:openCategories();"><div style="width:99%">
Create Category</div></A>
</TD></TR>
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top>
<A style="TEXT-DECORATION: none" href="javascript:UploadDocumenttoCategory();"><div style="width:99%">
Upload documents to Category</div></A>
</TD></TR>
<TR>
<TD style="PADDING-BOTTOM: 0px; PADDING-LEFT: 6px; PADDING-RIGHT: 0px; HEIGHT: 4px; PADDING-TOP: 0px" vAlign=top><IMG src="../images1/left_nav_div.png" width=220 height=4></TD></TR>
<TR>
<TD vAlign=top>
<A style="TEXT-DECORATION: none" href="javascript:UploadDocumenttoHome();"><div style="width:99%">
Upload Home documents</div></A>
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
<td valign="top" style="padding:0 15px 0 10px;width:100%;height:450px">
<div id="headersec" style="margin:10px 300px 10px 0px;text-align:center;font-size:17px;font-weight:normal"></div> 
<table>
<tr>
<td id="tdIframe">

</td>
</tr>
</table>

</td>
</tr>

</table>

</asp:Content>
<asp:Content id="ContentsInHeader" runat="server" contentplaceholderid="head">
</asp:Content>

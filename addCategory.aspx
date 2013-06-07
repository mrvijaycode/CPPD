<%@ Page language="C#" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<html dir="ltr">

<head runat="server">
<meta name="ProgId" content="SharePoint.WebPartPage.Document">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<SharePoint:RobotsMetaTag runat="server"></SharePoint:RobotsMetaTag>
<title>CPPD</title>
<SharePoint:CssLink runat="server"/>

<script language="javascript" type="text/javascript" src="JS/SPAPI_Core.js"></script>
<script language="javascript" type="text/javascript" src="JS/SPAPI_Lists.js"></script>
<script language="javascript" type="text/javascript" src="JS/ShowListItems.js"></script>
<script language="javascript" type="text/javascript" src="JS/admin.js"></script>

<script>
/*
function PreSaveItem()
{
//var iframeBody=document.getElementById("frmWord").contentWindow.document;
var Title=document.getElementById("g_e14fa607_cc87_4b4b_86d8_cdef95175949_ff1_1_ctl00_ctl00_TextField").value;
alert(Title)
}
*/
</script>

</head>

<body>

<form id="form1" runat="server">
	<WebPartPages:SPWebPartManager runat="server" id="WebPartManager">
	</WebPartPages:SPWebPartManager>
	<WebPartPages:DataFormWebPart runat="server" IsIncluded="True" FrameType="None" NoDefaultStyle="TRUE" ViewFlag="0" Title="LeftNavIndex" __markuptype="vsattributemarkup" __WebPartId="{E14FA607-CC87-4B4B-86D8-CDEF95175949}" id="g_e14fa607_cc87_4b4b_86d8_cdef95175949" __AllowXSLTEditing="true" WebPart="true" Height="" Width="">
	<DataSources>
		<SharePoint:SPDataSource runat="server" DataSourceMode="ListItem" UseInternalName="true" selectcommand="&lt;View&gt;&lt;Query&gt;&lt;Where&gt;&lt;Eq&gt;&lt;FieldRef Name=&quot;ContentType&quot;/&gt;&lt;Value Type=&quot;Text&quot;&gt;Item&lt;/Value&gt;&lt;/Eq&gt;&lt;/Where&gt;&lt;/Query&gt;&lt;/View&gt;" id="LeftNavIndex1"><SelectParameters><WebPartPages:DataFormParameter Name="ListItemId" ParameterKey="ListItemId" PropertyName="ParameterValues" DefaultValue="0"/><WebPartPages:DataFormParameter Name="ListID" ParameterKey="ListID" PropertyName="ParameterValues" DefaultValue="{6E0D5285-6F64-424E-BB7C-7CF77E2557A9}"/></SelectParameters><DeleteParameters><WebPartPages:DataFormParameter Name="ListItemId" ParameterKey="ListItemId" PropertyName="ParameterValues" DefaultValue="0"/><WebPartPages:DataFormParameter Name="ListID" ParameterKey="ListID" PropertyName="ParameterValues" DefaultValue="{6E0D5285-6F64-424E-BB7C-7CF77E2557A9}"/></DeleteParameters><InsertParameters><WebPartPages:DataFormParameter Name="ListItemId" ParameterKey="ListItemId" PropertyName="ParameterValues" DefaultValue="0"/><WebPartPages:DataFormParameter Name="ListID" ParameterKey="ListID" PropertyName="ParameterValues" DefaultValue="{6E0D5285-6F64-424E-BB7C-7CF77E2557A9}"/></InsertParameters><UpdateParameters><WebPartPages:DataFormParameter Name="ListItemId" ParameterKey="ListItemId" PropertyName="ParameterValues" DefaultValue="0"/><WebPartPages:DataFormParameter Name="ListID" ParameterKey="ListID" PropertyName="ParameterValues" DefaultValue="{6E0D5285-6F64-424E-BB7C-7CF77E2557A9}"/></UpdateParameters></SharePoint:SPDataSource>
	</DataSources>
	<ParameterBindings>
		<ParameterBinding Name="ListItemId" Location="QueryString(ID)" DefaultValue="0"/>
		<ParameterBinding Name="ListID" Location="None" DefaultValue="{6E0D5285-6F64-424E-BB7C-7CF77E2557A9}"/>
		<ParameterBinding Name="dvt_apos" Location="Postback;Connection"/>
		<ParameterBinding Name="UserID" Location="CAMLVariable" DefaultValue="CurrentUserName"/>
		<ParameterBinding Name="Today" Location="CAMLVariable" DefaultValue="CurrentDate"/>
	</ParameterBindings>
	<datafields>@Title,Title;@ID,ID;@ContentType,Content Type;@Modified,Modified;@Created,Created;@Author,Created By;@Editor,Modified By;@_UIVersionString,Version;@Attachments,Attachments;@File_x0020_Type,File Type;@FileLeafRef,Name (for use in forms);@FileDirRef,Path;@FSObjType,Item Type;@_HasCopyDestinations,Has Copy Destinations;@_CopySource,Copy Source;@ContentTypeId,Content Type ID;@_ModerationStatus,Approval Status;@_UIVersion,UI Version;@Created_x0020_Date,Created;@FileRef,URL Path;</datafields>
	<XSL>
<xsl:stylesheet xmlns:x="http://www.w3.org/2001/XMLSchema" xmlns:dsp="http://schemas.microsoft.com/sharepoint/dsp" version="1.0" exclude-result-prefixes="xsl msxsl ddwrt" xmlns:ddwrt="http://schemas.microsoft.com/WebParts/v2/DataView/runtime" xmlns:asp="http://schemas.microsoft.com/ASPNET/20" xmlns:__designer="http://schemas.microsoft.com/WebParts/v2/DataView/designer" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:SharePoint="Microsoft.SharePoint.WebControls" xmlns:ddwrt2="urn:frontpage:internal">
	<xsl:output method="html" indent="no"/>
	<xsl:decimal-format NaN=""/>
	<xsl:param name="dvt_apos">&apos;</xsl:param>
	<xsl:variable name="dvt_1_automode">0</xsl:variable>
	<xsl:template match="/" xmlns:x="http://www.w3.org/2001/XMLSchema" xmlns:dsp="http://schemas.microsoft.com/sharepoint/dsp" xmlns:asp="http://schemas.microsoft.com/ASPNET/20" xmlns:__designer="http://schemas.microsoft.com/WebParts/v2/DataView/designer" xmlns:SharePoint="Microsoft.SharePoint.WebControls">
		<xsl:call-template name="dvt_1"/>
	</xsl:template>
	
	<xsl:template name="dvt_1">
		<xsl:variable name="dvt_StyleName">ListForm</xsl:variable>
		<xsl:variable name="Rows" select="/dsQueryResponse/Rows/Row"/>
		<table border="0" width="100%">
			<xsl:call-template name="dvt_1.body">
				<xsl:with-param name="Rows" select="$Rows"/>
			</xsl:call-template>
		</table>
	</xsl:template>
	<xsl:template name="dvt_1.body">
		<xsl:param name="Rows"/>
		<tr>
			<td class="ms-toolbar" nowrap="">
			<!--
				<table>
				
					<tr>
						<td width="99%" class="ms-toolbar" nowrap=""><IMG SRC="/_layouts/images/blank.gif" width="1" height="18"/></td>
						<td class="ms-toolbar" nowrap="">
							<SharePoint:SaveButton runat="server" ControlMode="New" id="savebutton1"/>
						</td>
						<td class="ms-separator">&#160;</td>
						<td class="ms-toolbar" nowrap="" align="right">
							<SharePoint:GoBackButton runat="server" ControlMode="New" id="gobackbutton1"/>
						</td>
					</tr>
				</table>
				-->
			</td>
		</tr>
		<!--
		<tr>
			<td class="ms-toolbar" nowrap="">
				<SharePoint:FormToolBar runat="server" ControlMode="New"/>
			</td>
		</tr>
		-->
		<xsl:call-template name="dvt_1.rowedit">
		<xsl:with-param name="Pos" select="concat('_', position())" />
		</xsl:call-template>
		
		<tr>
			<td class="ms-toolbar" nowrap="">
			
				<table>
					<tr>
						<td width="99%" class="ms-toolbar" nowrap=""><IMG SRC="/_layouts/images/blank.gif" width="1" height="18"/></td>
						<td class="ms-toolbar" nowrap="">
							<SharePoint:SaveButton runat="server" ControlMode="New" id="savebutton2"/>
						</td>
						<td class="ms-separator">&#160;</td>
						<td class="ms-toolbar" nowrap="" align="right">
							<SharePoint:GoBackButton runat="server" ControlMode="New" id="gobackbutton2"/>
						</td>
					</tr>
				</table>
				<!--
				<table>
					<tr>
						<td width="99%" class="ms-toolbar" nowrap=""><IMG SRC="/_layouts/images/blank.gif" width="1" height="18"/></td>
						<td class="ms-toolbar" nowrap="">
							<input onclick="AddCategory()" type="button" value="Add" />
						</td>
						<td class="ms-separator">&#160;</td>
						<td class="ms-toolbar" nowrap="" align="right">
							<input type="button" value="Cancel" />
						</td>
					</tr>
				</table>
				-->

			</td>
		</tr>
		
	</xsl:template>
	<xsl:template name="dvt_1.rowedit">
		<xsl:param name="Pos" />
		<tr>
			<td>
				<table border="0" cellspacing="0" width="100%">
					<tr>
						<td width="190px" valign="top" class="ms-formlabel">
							<H3 class="ms-standardheader">
								<nobr>Title<span class="ms-formvalidation"> *</span>
								</nobr>
							</H3>
						</td>
						<td width="400px" valign="top" class="ms-formbody">
							<SharePoint:FormField runat="server" id="ff1{$Pos}" ControlMode="New" FieldName="Title" __designer:bind="{ddwrt:DataBind('i',concat('ff1',$Pos),'Value','ValueChanged','ID',ddwrt:EscapeDelims(string(@ID)),'@Title')}"/>
							<SharePoint:FieldDescription runat="server" id="ff1description{$Pos}" FieldName="Title" ControlMode="New"/>
						</td>
					</tr>
					<xsl:if test="$dvt_1_automode = '1'" ddwrt:cf_ignore="1">
						<tr>
							<td colspan="99" class="ms-vb">
								<span ddwrt:amkeyfield="ID" ddwrt:amkeyvalue="ddwrt:EscapeDelims(string(@ID))" ddwrt:ammode="view"></span>
							</td>
						</tr>
					</xsl:if>
				</table>
			</td>
		</tr>
		
	</xsl:template>
</xsl:stylesheet>	</XSL>
</WebPartPages:DataFormWebPart>
</form>

</body>
</html>


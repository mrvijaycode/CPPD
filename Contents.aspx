<%@ Page language="C#" MasterPageFile="../_catalogs/masterpage/cppdhome.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=12.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" Title="CPPD Contents" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content id="Content1" runat="server" contentplaceholderid="PlaceHolderMain">
<a  href="javascript:loadHomeRef()"><div id="divMainLink" style="float:right;margin:5px 50px 0 0;cursor:pointer"> 
	Dashboard</div></a>
<div id="divfrmBack" style="float:right;margin:5px 50px 0 0">
        <a  href="JavaScript:ShowContes()">Go Back</a>
        </div>
        <input type="hidden" id="homeRef" name="admin"/>
<!-- SITE ACTIONS HIDDEN

-->
<div>
<table border="0" cellpadding="0" cellspacing="0" style="margin-top:20px">
      <tr>
        <td valign="top" style="width:245px; padding:0 0 0 10px;">
        <div style="height:10px">
        <div id="divref" style="display:none">CPPDCategory</div>
        <div id="divLeftNavIndex">
    <!-- Display Left navigation menu
        -->
        </div>
        </div>
        </td>
        <td valign="top" style="padding:0 15px 0 10px;width:100%;" height="550px">
        <div id="divContents">
        <!-- Contents will be added dynamically to this cell -->
        </div>
        <div id="divfrmWord">       
        <iframe id="frmWord" frameborder="0" style="height:500px;width:100%;background-color:green;"></iframe>
           </div>
      </td>
      </tr>
    </table>
    </div>    
<script type="text/javascript">getLeftNavIndex('Categories');getReqType();
//loadHome('GUIDELINES & PRINCIPLES');
</script>
</asp:Content>
<asp:Content id="ContentsInHeader" runat="server" contentplaceholderid="head">

<ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate><ZoneTemplate></ZoneTemplate></asp:Content>

<%@ Page Language="C#" masterpagefile="../../_catalogs/masterpage/cppdhome.master" title="CPPD - Search Results" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register tagprefix="WebPartPages" namespace="Microsoft.SharePoint.WebPartPages" assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register tagprefix="WebControls" namespace="Microsoft.Office.Server.Search.WebControls" assembly="Microsoft.Office.Server.Search, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content id="Content1" runat="server" contentplaceholderid="PlaceHolderMain">


<WebPartPages:SPProxyWebPartManager runat="server" id="ProxyWebPartManager">
</WebPartPages:SPProxyWebPartManager>
<p></p>
<WebPartPages:WebPartZone id="g_854D3706BE4D42FFB76B4D3C67A67CA4" runat="server" title="CPPD - Search Results"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>

</asp:Content>

<%@ Page Language="C#" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register tagprefix="WebPartPages" namespace="Microsoft.SharePoint.WebPartPages" assembly="Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<html dir="ltr">

<head runat="server">
<meta name="ProgId" content="SharePoint.WebPartPage.Document">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<SharePoint:RobotsMetaTag runat="server"></SharePoint:RobotsMetaTag>
</head>

<body>
<form id="form1" runat="server">

<WebPartPages:SPWebPartManager runat="server" id="WebPartManager">
</WebPartPages:SPWebPartManager>
<WebPartPages:WebPartZone id="g_ECC6147749B84DBA89EA8E6323AFC528" runat="server" title="Zone 1">
</WebPartPages:WebPartZone>

</form>
</body>
</html>


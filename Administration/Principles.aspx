<%@ Page Language="C#" masterpagefile="../../_catalogs/masterpage/cppdhome.master" title="Guidelines and Principles" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=12.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document"%>
<asp:Content id="Content1" runat="server" contentplaceholderid="PlaceHolderMain">
<div id="divfrmback" style="float:right;margin:5px 50px 0 0">
        <a  href="JavaScript:ShowContes()">Go Back</a>
        </div>
        <div style="float:right;margin:5px 30px 0 0">
                        <a href="../admin.aspx">Go to Administration</a>
</div>
<table align="center" class="footer">
 <tr>
    <td valign="top" style="padding:5px 0 5px 0; text-align:center;">
    </td>
  </tr>
</table>
<div style="padding-top: 5px;">
<table border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td valign="top" style="width:245px; padding:0 0 0 10px;">
        <div style="height:10px">
        
                <div id="divref" style="display:none">GUIDELINESPRINCIPLES</div>

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
        <div style="display:none" id="divfrmWord">       
        <iframe id="frmWord" frameborder="0" style="height:600px; width:100%;background-color:green;"></iframe>
           </div>
      </td>
      </tr>
    </table>
    </div>
<script type="text/javascript" language="javascript" src="http://teamspace.pg.com/sites/cppdpolicy/WPPages/JS/GuidelinePriciple.js"></script>
<script type="text/javascript">getLeftNavIndex();</script>

</asp:Content>

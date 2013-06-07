<%@ Page Language="C#" %>
<html dir="ltr">

<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Untitled 1</title>

<link rel="stylesheet" type="text/css" href="http://teamspace.pg.com/sites/cppdpolicy/WPPages/CSS/style.css"/>

<script language="javascript" type="text/javascript" src="http://teamspace.pg.com/sites/cppdpolicy/WPPages/JS/jquery-1.7.1.min.js"></script>
<script language="javascript" type="text/javascript" src="http://teamspace.pg.com/sites/cppdpolicy/WPPages/JS/jquery.SPServices-0.7.0.min.js"></script>
<script language="javascript" type="text/javascript" src="http://teamspace.pg.com/sites/cppdpolicy/WPPages/JS/SPAPI_UserGroup.js"></script>
<script language="javascript" type="text/javascript" src="http://teamspace.pg.com/sites/cppdpolicy/WPPages/JS/SPAPI_Core.js"></script>
<script language="javascript" type="text/javascript" src="http://teamspace.pg.com/sites/cppdpolicy/WPPages/JS/SPAPI_Lists.js"></script>
<script language="javascript" type="text/javascript" src="http://teamspace.pg.com/sites/cppdpolicy/WPPages/JS/admin.js"></script>
<script language="javascript" type="text/javascript" src="http://teamspace.pg.com/sites/cppdpolicy/WPPages/JS/LoadItems.js"></script>
<script language="javascript" type="text/javascript" src="http://teamspace.pg.com/sites/cppdpolicy/WPPages/JS/Restricted.js"></script>

</head>

<body>
<form id="form1" runat="server">
<div>
<table>
<tr>
<td class="restrcitHead">Contacts:</td>
</tr>
<tr>
<td id="tdContacts">
</td>
</tr>
</table>

<table>
<tr>
<td class="restrcitHead">Calendars:</td>
</tr>
<tr>
<td id="tdCalendar"></td>
</tr>
</table>

<table>
<tr>
<td class="restrcitHead">Miscellaneous:</td>
</tr>
<tr>
<td id="tdMiscellaneous"></td>
</tr>
</table>

<table>
<tr>
<td class="restrcitHead">Next Legal Orientation:</td>
</tr>
<tr>
<td id="tdOrientation"></td>
</tr>
</table>

<table>
<tr>
<td></td>
</tr>
<tr>
<td ><a title="http://teamspace.pg.com/sites/cppdpolicy/Restricted/CPPDBirthdayCalendar/CPPD Birthday List.doc" href="http://teamspace.pg.com/sites/cppdpolicy/Restricted/CPPDBirthdayCalendar/CPPD%20Birthday%20List.doc" style="text-decoration:underline;color:blue;font-size:12px; font-weight:bold;">CP & PD Birthday Calendar</a></td>
</tr>
<tr>
<td ><a title="http://teamspace.pg.com/sites/cppdpolicy/Restricted/CPPDAudioConferenceNumbers/CPPD MeetMe Audio Numbers and Passcodes.doc" style="font-size:12px; font-weight:bold;text-decoration:underline;color:blue" href="http://teamspace.pg.com/sites/cppdpolicy/Restricted/CPPDAudioConferenceNumbers/CPPD%20MeetMe%20Audio%20Numbers%20and%20Passcodes.doc" >CP&amp;PD meet me Audio Conference Numbers</a></td>
</tr>
</table>


<script type="text/javascript">
loadIndexItems('Restricted','#tdContacts','Restricted/Contacts');
loadIndexItems('Restricted','#tdCalendar','Restricted/Calendars');
loadIndexItems('Restricted','#tdMiscellaneous','Restricted/Miscellaneous');
loadOrientation('#tdOrientation');
</script>

</div>
</form>

</body>

</html>

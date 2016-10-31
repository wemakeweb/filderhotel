

<table cellpadding="0" cellspacing="0" style="margin-left:5px;" border="0" width="170px" height="170px" >
<?php

$months = array("01" => "Januar", "02" => "Februar", "03" => "M&auml;rz", "04" => "April", "05" => "Mai", "06" => "Juni",
				"07" => "Juli", "08" => "August", "09" => "September", "10" => "Oktober", "11" => "November", "12" => "Dezember");
$month = empty($_GET['month']) ? date("m") : $_GET['month'];
$year = empty($_GET['year']) ? date("Y") : $_GET['year'];
$timestamp_today = empty($month) && empty($year) ? time() : mktime(0,0,0,$month,1,$year);
$today[date("m")] = date("d");
$last_month = strtotime("last month", $timestamp_today);
$last_year = date("Y",$last_month);
$last_month = date("m", $last_month);
$next_month = strtotime("next month", $timestamp_today);
$next_year = date("Y", $next_month);
$next_month = date("m", $next_month);
$tiefe = $_SERVER['PHP_SELF']; 
$tiefe = substr_count($tiefe, '/'); 
if($tiefe == 2) 
{  $tiefe = "../";} 
if ($tiefe == 3) 
{  $tiefe ="../../";} 
else 
{  $tiefe ="";} 
echo "<tr><td align='center'  colspan='2'><span class='pointer' onclick=\"$tiefe/kalender.php?".($_GET['arrival'] == true ? "arrival" : "departure")."=true&month=$last_month&year=$last_year','kalender_content');\">&laquo;</span></td><td colspan='3' align='center'>",$months[$month]," ",$year,"</td><td align='center' colspan='2'><span class='pointer' onclick=\"$tiefe/kalender.php?".($_GET['arrival'] == true ? "arrival" : "departure") ."=true&month=$next_month&year=$next_year','kalender_content');\">&raquo;</span></td></tr>";
?>
<tr  >
	 <td align="center">Mo</td><td align="center">Di</td><td align="center">Mi</td><td align="center">Do</td><td align="center">Fr</td><td align="center">Sa</td><td align="center">So</td>
</tr>
<?
$first_day_month = mktime(0,0,0,$month,1,$year);
$first_day_month_num = date("w",$first_day_month);
if($first_day_month_num == "0") $first_day_month_num = 7;
$days_count = date("t",$first_day_month);
if($first_day_month_num > 1)
	for ($i = 1; $i < $first_day_month_num; $i++) $days[1][$i] = "&nbsp;";
$x = $first_day_month_num;
$y = 1;
$num = 0;
//Tage des Montags ins array eintragen
while ($num < $days_count) {
	$num++;
	$days[$y][$x] = $num;
	if($x == 7)
	{
		$x = 1;
		$y++;
	}
	else
	{
		$x++;
	}
}
//Tage nach letztem Monatstag
$date = date("w",mktime(0,0,0,$month,$num,$year));
if($x != "1")
	for ($i = $x; $i <= 7; $i++) $days[$y][$i] = "&nbsp;";
//Array in html umkonvertieren
foreach ($days as $woche)
{
	echo "<tr>\n";
	foreach ($woche as $tag)
	{
		$bg_color = null;
		if($today[$month] == $tag && $year == date("Y"))
		{
			$bg_color = " style='background-color: #66cc66;' ";
		}
		$input = $_GET['arrival'] == true ? "arrival" : "departure";
		echo "\t<td align='center' $bg_color".(is_numeric($tag) ? " onclick='set_$input(".'"'."$tag.$month.$year".'"'.");' class='pointer'" : "").">".$tag."</td>\n";
	}
	echo "</tr>\n";
}
?>
</table>
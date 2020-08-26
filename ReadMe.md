<h1 align="center">
HEMS & SAR locations in Germany
</h1>

<h2>
  Prerequisites
</h2>

- VRS installed and running
- VRS using Google Maps (LeafLet won't work!!)
- VRS Custom Content Plugin installed and enabled.

<h2>
  Instructions
</h2>

- Clone or download the repo into a directory on the machine where VRS is running. Ensure you do not place the files under the Virtual Radar Server directory, since they could be overwritten on upgrades.
- Configure the VRS Custom Content Plugin to add the "Locations.html" file into the END of HEAD portion of the pages, with "/desktop.html" (without quotes and spaces) on the Address field.
- Repeat Step 2 but this time with "/mobile.html" on the Address Field.


![alt tag](https://github.com/ETEJSpotter/VRS_HEMS_SAR_Locations_Germany/blob/master/Locations.jpg)
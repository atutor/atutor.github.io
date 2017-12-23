README ATutor Module
This version of the ewiki module for ATutor is available in English, as well as some limited Spanish and German. Languages are automatically available based in the perferred language set in the users browser.


1. Installation and Integration into ATutor
2. Initializing a course wiki
3. Modifying ewiki plugins
4. More ewiki help
5. Modifications that were made to ewiki.php

---------
1. Installation and Integration with ATutor
Install:
Note: For now ewiki will only function if the ATutor content/ directory is located inside your ATutor installation, and the AT_FORCE_GET_FILE constant is set to FALSE in include/config.inc.php. For future versions of this addon we'll try to better handle wiki files so they can be located outside the ATutor installation, or in the MySQL database.

  1. Unzip the contents of atutor_wiki.tar.gz in the tools/ directory of your ATutor installation. This will create a directory called "wiki"
tar xzvf atutor_wiki.tar.gz
  2. Add  the following language to the language_text table in the MySql database (adjust the prefix AT_ as necessary to match the table name in your database).

INSERT into AT_language_text values('en', '_template', 'wiki', 'Wiki', '', '');
INSERT into AT_language_text values('en', '_template', 'priv_wiki', 'Wiki', '', '');

Note: At this stage ewiki will run by simply entering a course and typing in the URL to the wiki/ directory, though you will likely want to integrate it with the rest of the tools available in ATutor so it can optionally be selected as a Student Tool on a course-by-course basis, and so course members can be assigned wiki administrator privileges (i.e. Page Control). Read on for more about integrating ewiki into ATutor.

Integrate:
3. Add "tools/wiki/index.php" to the end of the $_modules array in the include/lib/constants.php file.

4. Add the following line to the $_privs array in the include/lib/constants file.
$_privs[32768]= array('name' => 'AT_PRIV_WIKI',  'pen' => false,'tools' => false);

5. Add the following line to the end of the $tools_list array in tools/index.php
'tools/wiki/index.php'   => AT_PRIV_WIKI

6. Add the following lines to include/lib/menu_pages.php, somewhere with the other $_pages lines (It doesn't really matter where)

$_pages['tools/wiki/index.php']['title_var'] = 'Wiki';
$_pages['tools/wiki/index.php']['img'] = 'images/tlogo.png';

7. Copy the ewiki logo (wiki/tlogo.png)  into the images/ directory of your ATutor installation

8. Add the styles listed at the end of this README  to the Default theme style.css file (and to other theme style sheets if they exist). You might choose to edit the stylesheet elements to give ewiki a look that matches the theme it will be running under, or you might choose not to add the styles below at all, though things will be prettier if you do add them.

2. Initalizing a course Wiki

To turn on the Wiki tool, as an instructor under the Manage Tab, choose Student Tools, then add the Wiki to the Home Page, or to the Main Navigation (or both). Then click on the Home Page icon that gets inserted, or on the Main Navigation tab, to open the wiki for the first time.

The first time ewiki is used in a course you will be asked to initialize the database. Click the link provided to intialize the wiki. This will  insert a variety of documentation pages that explain how the Wiki works, as well as providing a full set of examples. You might choose to delete these pages later, or move them into a documentation section of your wiki content, and link them in from your own wiki front page. Note that the first page should be named FrontPage, or redefined to something else in the ewiki config.php file.

All files for a course wiki can be found in the File Manager in a directory called wiki/. You should not attempt to edit these files directly from within the File Manager. Don't delete this directory unless you intend to dump the content of the wiki, and reinitialize a new one, for a new course session for example. When you create a backup of a course, all the wiki files are included with the backup. Backups of the wiki can also be created using the WikiDump feature (type WikiDump into a wiki page to turn it on)

3. Modifying plugins
Three files within the wiki/ directory are used to make ewiki an addon for ATutor: index.php, page.php, and config.php. You can enable and disable various ewiki plugins from within the config.php file. A full list of potential plugins is available in the README.plugin file. You can also start with a fresh version of EfurtWiki, and drop these three files into the wiki's main directory if you want to upgrade ewiki.

Many (but not all) ewiki plugins are enabled by default when the addon is installed. You might choose to disable some of those by commenting out lines in the config.php file, or add in others listed in the README.plugins file.

4. More EWiki help
Visit http://ewiki.berlios.de/ for additional details. Read the other README files included with the ewiki addon.

5. Modifications that were made to ewiki.php, if you wish to install an updated version of Erfurte Wiki to replace the one included with this addon

line 1522: added an exit; statement following the header redirect (so redirect back to same page being edited is possible)
     $sid = defined("SID") ? EWIKI_ADDPARAMDELIM.SID : "";
     header("Location: $url$sid");
->  exit;

line 1709 added $o to globals (so the top tool bar can be displayed)
function ewiki_control_links_list($id, &$data, $action_links, $version=0) {
->     global $ewiki_plugins, $ewiki_config, $o;
   $o = "";


-----------------
Optional Wiki Styles:
(add to themes/Default/styles.css)

/* ewiki calendar styles */
table.calendar {
   background-color: #EFEFEF;
      text-align:center;
}
table.calendar td {
   font-family: "Verdana", "Arial", sans-serif;
}

table.calendar .head {
   font-size: 8pt;
   text-align: center;
}

table.calendar .daynames {
   color:#BA997A;
   font-size: 8pt;
   text-align:center;
}

table.calendar .day {
   font-size: 8pt;
   text-align:right;
}
table.calendar .today{
   background-color:#D7CFC7;
   font-size: 8pt;
   text-align:right;
}

table.calendar a.found {
   text-decoration: none;
   font-weight:600;
}
table.calendar a.hide {
   text-decoration: none;
}

/* Plugin NavBar styles */
.wiki-plugins a{
border-style: solid;
border-width : 1px 1px 1px 1px;
text-decoration : none;
padding : 2px;
border-color : #ccc #000 #000 #ccc;
margin: 1px;
}
.wiki-plugins a:hover{
border-style: solid;
border-width : 1px 1px 1px 1px;
text-decoration : none;
padding : 2px;
border-color : #00f #69f #69f #00f;
background-color: #efefef;
}
.wiki-plugins  a:active {
border: 1px inset;
padding: 2px;
text-decoration: none;
}

.link-tree{
margin-left: 12px;
}
/*ewiki NavBar styles */
.wiki{
padding : 12px;

}
.wiki.calendar{

}
.wiki input{
border-style: solid;
border-width : 1px 1px 1px 1px;
text-decoration : none;
padding : 2px;
border-color : #00f #69f #69f #00f;
background-color: #efefef;
    }
.wiki input:hover{
border-style: solid;
border-width : 1px 1px 1px 1px;
text-decoration : none;
padding : 2px;
border-color : #69f  #00f #00f #69f ;
background-color: #eeeeee;
}
.wiki textarea{
border-width : 1px 1px 1px 1px;
border-color : #00f #69f #69f #00f;
background-color: #eeeeee;
}

.preview{
border-style: solid;
background-color: #efefef;
border-width : 1px 1px 1px 1px;
border-color : #333 #eee #eee #333;
padding : 2px;
}

.wiki.attachments{
border-style: solid;
border-width : 1px 1px 1px 1px;
border-color : #00f #69f #69f #00f;
background-color: #EBF4F9;
margin-right: 1em;
}

.wiki.edit{
border-style: solid;
border-width : 1px 1px 1px 1px;
border-color : #00f #69f #69f #00f;
background-color: #EBF4F9;
margin-right: 1em;
}
.wiki .page-toc {
       width: 160px;
       float: right;
       padding:2px;
       border: 2px #333333 solid;
       background: #efefef;
    }




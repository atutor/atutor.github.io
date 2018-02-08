---
title: Transitioning from ATutorSpaces
layout: post
---

## Transitioning from ATutorSpaces

This post covers what ATutorSpaces users need to know about moving their courses from ATutorSpaces, into another ATutor site, or into another Learning Management System (LMS). These details will be relevant for anyone planning on moving or distributing their ATutor courses.

There are three primary ways to transition from your ATutorSpaces site:
*   Export ATutor course Backups, to import into another ATutor system
*   Export Common Cartridges, to import into another LMS, or another ATutor system
*   Export a Site Bundle with the content directory and database, to copy a complete ATutor system from one place to another (fees apply).

## Export ATutor Backups

If you are moving from ATutorSpaces into another ATutor site, a preferred way to transition is to generate course backups on ATutorSpaces, then upload those backups and restore them in the new ATutor host site.

**Backups contain:**
*   Announcements
*   Assignments
*   Content
*   External Tools
*   File Manager Files
*   Forums
*   Frequently Asked Questions (FAQ)
*   GameMe Settings
*   Glossary Terms
*   Groups
*   Links
*   Polls
*   Reading Lists
*   Statistics
*   Tests and Surveys

Backups do include any data from addon modules.  Backups do not include student information, grades, postings to forums, or other course generated data. A backup produces a fresh copy of a course, that would be used to create a new course session.

### Considerations:

Servers may restrict the size of files that can be uploaded. If you receive a file size exceeded error message when uploading a backup, you may need to contact your system administrator and ask to have the PHP upload_max_filesize and post_max_size settings increased.

The size of backups can be reduced by removing any multimedia files you may have uploaded in a course, before generating a backup. A few audio files in your content is fine. One video however, can be 10 times the size of all the other files in a course. Many videos make courses very large and more difficult to manage. We recommend using services like YouTube and Vimeo for storing your videos, then linking or embedding those into your course content.

The steps described here for administrators, instructors may also complete for their own courses.

**To create backups, follow these steps:**
1.  Login as the ATutor administrator
2.  Open the Courses Tab
3.  Select a course, and press the Backups button
4.  Click on Create Backup
5.  Provide an optional description for the backup, and press Save
6.  Repeat steps 3 to 5 for each course
7.  From the list of backups, select the latest one for a course and press Download, and save the zip file to a folder on your computer
8.  Repeat step 7 for each course.

**To restore backups, follow these steps:**
1.  Login to the new ATutor site as the administrator
2.  Open the Courses tab
3.  Click on Create Course to create a new empty course shell for each of the courses you downloaded backups for in the steps above.
4.  Under the Courses tab, choose a course, then click on View (this takes you into that course as its instructor)
5.  In the course, click on Manage, then Backups
6.  Choose the Upload tab in the Backup Manager, and upload the backup you created for that course
7.  Choose the radio button beside the uploaded Backup, and click the Restore button
8.  On the Restore screen that opens, choose which elements in the backup you want to restore, then press the Restore button. If the course you are restoring into is not empty, you may choose to append the new content into the course, leaving the existing content intact, or you may choose to have the contents of the backup replace the existing content. Select Append or Overwrite.

## Export Common Cartridges

If you are planning to move into another LMS the preferred way to move would likely be to generate Common Cartridges for each course, and import those into the LMS. You may also use this method for moving from ATutorSpaces into another ATutor site.

### Considerations:

As is the case with Backups, you will likely want to move any multimedia you have in your courses, into a video streaming service (YouTube, Vimeo) before generating cartridges.

Systems may vary in their support for Common Cartridge 1.0\. Some may import content, but not tests. If you choose the common cartridge route, you should test ATutor generated cartridges with the system you’re planning to migrate to.

**To create Common Cartridges:**
1.  Login as the ATutor administrator
2.  Open the Courses tab
3.  Select the radio button next to a course, then select View. This will log you into the course as its instructor
4.  In the course choose the Manage tab, in the Content area choose Import/Export
5.  In the Export area, choose from the “What to export” menu, what you want to export, typically the Entire course
6.  Choose the Common Cartridge radio button (You may choose Content Package as an alternate export format, if the system you are importing into does not support CC1.0)
7.  Press the Export button to generate the cartridge, and download it onto your computer
8.  Repeat Step 7 with each course.

If you have properly associated tests with the content in your course, ATutor common cartridges will include tests. Test are associated with content under the Test & Surveys tab of the Content Editor.  

Not all systems that support common cartridge will also import the tests that are part of a cartridge. In such cases it may be necessary to export the tests out separately as QTI test packages, or as a QTI question bank. You will want to check whether the system you are importing into supports the IMS QTI 1.2.1 standard.

**To create QTI Test or Question Packages:**
1.  Login as the ATutor administrator
2.  Open the Courses tab
3.  Select the radio button next to a course, then select View. This will log you into the course as its instructor.
4.  As the instructor, under the Manage tab, choose Tests and Surveys
5.  To export a test, select the radio button next to the test you want to export, then press the Export button. Each test must be exported separately
6.  Or, to export a question bank, click on the Question Bank tab.
7.  Select all the questions you want to export, then press the Export button. All questions can be exported as a single question bank. The export by default will be a QTI 1.2.1 package. You may also choose to export as a QTI 2.1 package, though this format is experimental.

Once you have your common cartridges, and if necessary your QTI packages, refer to the documentation in the system you are importing into for details on how to import these.

## Copy ATutor Content and Database

If you are moving onto an ATutor server where you have access as the root user, or have a system administrator who does, you may choose to have your ATutorSpaces site bundled in a form that can be restored as a whole on a new ATutor server. This method has the advantage of maintaining all ATutor related data and files.

One ticket can be purchased through ATutorSpaces, to have the bundles created. Your root user or system administrator can restore them, with the instructions below.

**Purchase a Ticket at:**

[https://www.atutorspaces.com/services/index.php](https://www.google.com/url?q=https://www.atutorspaces.com/services/index.php&sa=D&ust=1517961642699000&usg=AFQjCNETyRrlD_veIvbNL9G0TzD7ToFszQ)

Once you have the bundles, your system administrator can follow these steps for restore them:

1.  Install ATutor as it would normally be installed, following the installation instructions: [https://atutor.github.io/atutor/docs/installation](https://www.google.com/url?q=https://atutor.github.io/atutor/docs/installation&sa=D&ust=1517961642700000&usg=AFQjCNEe9DiMlcFwNN1w4o2YWTk_gZeKFA) 
2.  Move or rename the content directory in the new ATutor installation, and copy the content.zip file from the bundle into the base ATutor directory (inside ATutor/).
3.  Unzip the archive at the command prompt with ‘unzip content.zip’ . This will create a directory called content (ATutor/content/), containing all the content files associated with the courses that were on ATutorSpaces.
4.  Using a tool like phpMyAdmin, rename the database that was created when the fresh installation of ATutor was created, to move it out of the way, so your ATutorSpaces database can take its place.
5.  Upload the database.zip file into the MySQL data directory. This directory may be in different locations depending on the system. On Mac or Linux, it is typically found in /var/lib/mysql/. Shutdown mysql, unzip database.zip into the mysql directory, which creates a directory called [yoursite]_atutorspaces_com, which contains the database files. Then restart mysql.
6.  Open phpMyAdmin (or another MySQL client) and rename the database to match the database name that was created when the fresh installation of ATutor was installed in step 1.
7.  Or, as an alternative to step 6, the settings in the include/config.inc.php file in ATutor can be updated to reflect the new environment
8.  That should be it. Visit your ATutor site with a web browser to ensure it is working properly.
